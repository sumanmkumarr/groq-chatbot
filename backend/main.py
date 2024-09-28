

import time
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from langchain_ollama import OllamaLLM
from langchain_core.prompts import ChatPromptTemplate

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods (GET, POST, etc.)
    allow_headers=["*"],  # Allows all headers
)

# Define the model and prompt template
template = """
Answer the question below.

Here is the conversation history:{context}

Question: {question}

Answer:
"""

model = OllamaLLM(model="llama3")
prompt = ChatPromptTemplate.from_template(template)
chain = prompt | model

context = ""

class ChatRequest(BaseModel):
    question: str

@app.post("/chat")
async def chat_endpoint(request: ChatRequest):
    global context
    user_input = request.question
    print(f"Received question: {user_input}")

    start_time = time.time()  # Start timer
    try:
        result = chain.invoke({"context": context, "question": user_input})
        context += f"\nUser: {user_input}\nAI: {result}"
        response = {"answer": result}
        end_time = time.time()  # End timer
        print(f"Generated answer: {response['answer']} in {end_time - start_time:.2f} seconds")
        return response
    except Exception as e:
        print(f"Error during model invocation: {e}")
        return {"answer": "Sorry, something went wrong."}

@app.get("/test")
async def test_endpoint():
    return {"status": "Backend is working"}
