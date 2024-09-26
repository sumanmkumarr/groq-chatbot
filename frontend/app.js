// const chatBox = document.getElementById("chat-box");

// function appendMessage(sender, message) {
//     const messageElement = document.createElement("p");
//     messageElement.textContent = `${sender}: ${message}`;
//     chatBox.appendChild(messageElement);
//     chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to the bottom
// }

// async function sendMessage() {
//     const userInput = document.getElementById("user-input");
//     const message = userInput.value;
//     appendMessage("User", message);

//     // Clear the input field
//     userInput.value = "";

//     // Send the message to the backend and get the response
//     const response = await fetch("/chat", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({ question: message })
//     });

//     const data = await response.json();
//     appendMessage("Bot", data.answer);
// }














// const chatBox = document.getElementById("chat-box");

// function appendMessage(sender, message) {
//     const messageElement = document.createElement("p");
//     messageElement.textContent = `${sender}: ${message}`;
//     chatBox.appendChild(messageElement);
//     chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to the bottom
// }

// async function sendMessage() {
//     const userInput = document.getElementById("user-input");
//     const message = userInput.value;
//     appendMessage("User", message);

//     userInput.value = "";

//     try {
//         const response = await fetch("/chat", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({ question: message })
//         });

//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }

//         const data = await response.json();

//         if (data && data.answer) {
//             appendMessage("Bot", data.answer);
//         } else {
//             appendMessage("Bot", "Sorry, I didn't understand that.");
//         }
//     } catch (error) {
//         console.error('There was a problem with the fetch operation:', error);
//         appendMessage("Bot", "Error: Could not get a response from the server.");
//     }
// }











// const chatBox = document.getElementById("chat-box");

// function appendMessage(sender, message) {
//     const messageElement = document.createElement("p");
//     messageElement.textContent = `${sender}: ${message}`;
//     chatBox.appendChild(messageElement);
//     chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to the bottom
// }

// async function sendMessage() {
//     const userInput = document.getElementById("user-input");
//     const message = userInput.value;
//     appendMessage("User", message);

//     userInput.value = "";

//     try {
//         const response = await fetch("http://127.0.0.1:8000/chat", {  // Make sure this URL matches your backend
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({ question: message })
//         });

//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }

//         const data = await response.json();

//         if (data && data.answer) {
//             appendMessage("Bot", data.answer);
//         } else {
//             appendMessage("Bot", "Sorry, I didn't understand that.");
//         }
//     } catch (error) {
//         console.error('There was a problem with the fetch operation:', error);
//         appendMessage("Bot", "Error: Could not get a response from the server.");
//     }
// }




















// const chatBox = document.getElementById("chat-box");

// // Initialize Speech Recognition
// const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
// recognition.lang = 'en-US';
// recognition.interimResults = false;
// recognition.maxAlternatives = 1;

// function startRecording() {
//     recognition.start();
// }

// recognition.onresult = function(event) {
//     const transcript = event.results[0][0].transcript;
//     document.getElementById('user-input').value = transcript;
//     sendMessage();  // Automatically send the transcribed message
// };

// recognition.onerror = function(event) {
//     console.error('Speech recognition error detected: ' + event.error);
// };

// recognition.onend = function() {
//     console.log('Speech recognition service disconnected');
// };

// function appendMessage(sender, message) {
//     const messageElement = document.createElement("p");
//     messageElement.textContent = `${sender}: ${message}`;
//     chatBox.appendChild(messageElement);
//     chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to the bottom
// }

// async function sendMessage() {
//     const userInput = document.getElementById("user-input");
//     const message = userInput.value;
//     appendMessage("User", message);

//     userInput.value = "";

//     try {
//         const response = await fetch("http://127.0.0.1:8000/chat", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({ question: message })
//         });

//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }

//         const data = await response.json();

//         if (data && data.answer) {
//             appendMessage("Bot", data.answer);
//             speakResponse(data.answer);  // Speak the AI's response
//         } else {
//             appendMessage("Bot", "Sorry, I didn't understand that.");
//         }
//     } catch (error) {
//         console.error('There was a problem with the fetch operation:', error);
//         appendMessage("Bot", "Error: Could not get a response from the server.");
//     }
// }

// function speakResponse(text) {
//     const synth = window.speechSynthesis;
//     const utterance = new SpeechSynthesisUtterance(text);
//     utterance.lang = 'en-US';
//     synth.speak(utterance);
// }




































// const chatBox = document.getElementById("chat-box");

// // Initialize Speech Recognition
// const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
// recognition.lang = 'en-US';
// recognition.interimResults = false;
// recognition.maxAlternatives = 1;

// function startRecording() {
//     recognition.start();
// }

// recognition.onresult = function(event) {
//     const transcript = event.results[0][0].transcript;
//     document.getElementById('user-input').value = transcript;
//     sendMessage();  // Automatically send the transcribed message
// };

// recognition.onerror = function(event) {
//     console.error('Speech recognition error detected: ' + event.error);
//     if (event.error === 'network') {
//         console.error('Network error occurred during speech recognition.');
//     } else if (event.error === 'no-speech') {
//         console.error('No speech was detected. Please try again.');
//     } else if (event.error === 'audio-capture') {
//         console.error('No microphone was found. Ensure that a microphone is connected.');
//     } else if (event.error === 'not-allowed') {
//         console.error('Permission to use microphone was denied.');
//     }
// };

// recognition.onend = function() {
//     console.log('Speech recognition service disconnected');
//     // Automatically restart speech recognition
//     // Uncomment the following line if you want to re-initiate speech recognition automatically
//     // startRecording();
// };

// function appendMessage(sender, message) {
//     const messageElement = document.createElement("p");
//     messageElement.textContent = `${sender}: ${message}`;
//     chatBox.appendChild(messageElement);
//     chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to the bottom
// }

// async function sendMessage() {
//     const userInput = document.getElementById("user-input");
//     const message = userInput.value;
//     appendMessage("User", message);

//     userInput.value = "";

//     console.log(`Sending message: ${message}`);

//     try {
//         const response = await fetch("http://127.0.0.1:8000/chat", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({ question: message })
//         });

//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }

//         const data = await response.json();
//         console.log('Received response:', data);

//         if (data && data.answer) {
//             appendMessage("Bot", data.answer);
//             speakResponse(data.answer);  // Speak the AI's response
//         } else {
//             appendMessage("Bot", "Sorry, I didn't understand that.");
//         }
//     } catch (error) {
//         console.error('There was a problem with the fetch operation:', error);
//         appendMessage("Bot", "Error: Could not get a response from the server.");
//     }
// }

// function speakResponse(text) {
//     const synth = window.speechSynthesis;
//     const utterance = new SpeechSynthesisUtterance(text);
//     utterance.lang = 'en-US';
//     synth.speak(utterance);
// }









































// const chatBox = document.getElementById("chat-box");

// // Initialize Speech Recognition
// const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
// recognition.lang = 'en-US';
// recognition.interimResults = false;
// recognition.maxAlternatives = 1;

// function startRecording() {
//     recognition.start();
// }

// recognition.onresult = function(event) {
//     const transcript = event.results[0][0].transcript;
//     document.getElementById('user-input').value = transcript;
//     sendMessage();  // Automatically send the transcribed message
// };

// recognition.onerror = function(event) {
//     console.error('Speech recognition error detected: ' + event.error);
//     if (event.error === 'network') {
//         console.error('Network error occurred during speech recognition.');
//     } else if (event.error === 'no-speech') {
//         console.error('No speech was detected. Please try again.');
//     } else if (event.error === 'audio-capture') {
//         console.error('No microphone was found. Ensure that a microphone is connected.');
//     } else if (event.error === 'not-allowed') {
//         console.error('Permission to use microphone was denied.');
//     }
// };

// recognition.onend = function() {
//     console.log('Speech recognition service disconnected');
//     // Automatically restart speech recognition if needed
//     // startRecording();
// };

// function appendMessage(sender, message) {
//     const messageElement = document.createElement("p");
//     messageElement.textContent = `${sender}: ${message}`;
//     chatBox.appendChild(messageElement);
//     chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to the bottom
// }

// async function sendMessage() {
//     const userInput = document.getElementById("user-input");
//     const message = userInput.value;
//     appendMessage("User", message);

//     userInput.value = "";

//     console.log(`Sending message: ${message}`);

//     try {
//         const response = await fetch("http://127.0.0.1:8000/chat", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({ question: message })
//         });

//         console.log('Response status:', response.status);  // Log the response status

//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }

//         const data = await response.json();
//         console.log('Received response:', data);

//         if (data && data.answer) {
//             appendMessage("Bot", data.answer);
//             speakResponse(data.answer);  // Speak the AI's response
//         } else {
//             appendMessage("Bot", "Sorry, I didn't understand that.");
//         }
//     } catch (error) {
//         console.error('There was a problem with the fetch operation:', error);
//         appendMessage("Bot", "Error: Could not get a response from the server.");
//     }
// }

// function speakResponse(text) {
//     const synth = window.speechSynthesis;
//     const utterance = new SpeechSynthesisUtterance(text);
//     utterance.lang = 'en-US';
//     synth.speak(utterance);
// }










































// const chatBox = document.getElementById("chat-box");

// // Initialize Speech Recognition
// const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
// recognition.lang = 'en-US';
// recognition.interimResults = false;
// recognition.maxAlternatives = 1;

// function startRecording() {
//     recognition.start();
// }

// recognition.onresult = function(event) {
//     const transcript = event.results[0][0].transcript;
//     document.getElementById('user-input').value = transcript;
//     sendMessage();  // Automatically send the transcribed message
// };

// recognition.onerror = function(event) {
//     console.error('Speech recognition error detected: ' + event.error);
//     if (event.error === 'network') {
//         console.error('Network error occurred during speech recognition.');
//     } else if (event.error === 'no-speech') {
//         console.error('No speech was detected. Please try again.');
//     } else if (event.error === 'audio-capture') {
//         console.error('No microphone was found. Ensure that a microphone is connected.');
//     } else if (event.error === 'not-allowed') {
//         console.error('Permission to use microphone was denied.');
//     }
// };

// recognition.onend = function() {
//     console.log('Speech recognition service disconnected');
//     // Automatically restart speech recognition if needed
//     // startRecording();
// };

// function appendMessage(sender, message) {
//     const messageElement = document.createElement("p");
//     messageElement.textContent = `${sender}: ${message}`;
//     chatBox.appendChild(messageElement);
//     chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to the bottom
// }

// async function sendMessage() {
//     const userInput = document.getElementById("user-input");
//     const message = userInput.value;
//     appendMessage("User", message);

//     userInput.value = "";

//     console.log(`Sending message: ${message}`);

//     try {
//         const response = await fetch("http://127.0.0.1:8000/chat", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({ question: message })
//         });

//         console.log('Response status:', response.status);  // Log the response status

//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }

//         const data = await response.json();
//         console.log('Received response:', data);

//         if (data && data.answer) {
//             appendMessage("Bot", data.answer);
//             speakResponse(data.answer);  // Speak the AI's response
//         } else {
//             appendMessage("Bot", "Sorry, I didn't understand that.");
//         }
//     } catch (error) {
//         console.error('There was a problem with the fetch operation:', error);
//         appendMessage("Bot", "Error: Could not get a response from the server.");
//     }
// }

// function speakResponse(text) {
//     const synth = window.speechSynthesis;
//     const utterance = new SpeechSynthesisUtterance(text);
//     utterance.lang = 'en-US';
//     synth.speak(utterance);
// }












































const chatBox = document.getElementById("chat-box");

// Initialize Speech Recognition
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

function startRecording() {
    recognition.start();
}

recognition.onresult = function(event) {
    const transcript = event.results[0][0].transcript;
    document.getElementById('user-input').value = transcript;
    sendMessage();  // Automatically send the transcribed message
};

recognition.onerror = function(event) {
    console.error('Speech recognition error detected: ' + event.error);
};

recognition.onend = function() {
    console.log('Speech recognition service disconnected');
    // Automatically restart speech recognition if needed
    // startRecording();
};

function appendMessage(sender, message) {
    const messageElement = document.createElement("p");
    messageElement.textContent = `${sender}: ${message}`;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to the bottom
}

async function sendMessage() {
    const userInput = document.getElementById("user-input");
    const message = userInput.value;
    appendMessage("User", message);

    userInput.value = "";

    console.log(`Sending message: ${message}`);

    try {
        const start_time = performance.now();  // Start timer for fetch operation

        const response = await fetch("http://127.0.0.1:8000/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ question: message })
        });

        const end_time = performance.now();  // End timer
        console.log('Fetch operation time:', (end_time - start_time).toFixed(2), 'milliseconds');
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log('Received response:', data);

        if (data && data.answer) {
            appendMessage("Bot", data.answer);
            speakResponse(data.answer);  // Speak the AI's response
        } else {
            appendMessage("Bot", "Sorry, I didn't understand that.");
        }
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        appendMessage("Bot", "Error: Could not get a response from the server.");
    }
}

function speakResponse(text) {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    synth.speak(utterance);
}
