# SHL Frontend
This repository contains the frontend for the SHL Chatbot. I built this simple HTML, CSS, and JavaScript application to create an interactive chat interface that communicates with the backend service to retrieve assessment recommendations.
# Project Overview
+ index.html <br>
This is the main HTML file that defines the structure of the chatbot interface. It sets up the chat container, header with a dark mode toggle, chat messages area, and input field.<br>
+ styles.css <br>
This file contains all the styling for the application. It ensures the chat interface looks clean and modern, and includes support for a dark mode toggle.<br>
+ script.js<br>
This JavaScript file manages the logic of the chatbot. When a user types a message and presses “Send” (or Enter), it sends a POST request to the backend’s /recommend endpoint. It then processes the backend’s response and displays it in the chat interface. The script also handles the dark mode toggle feature.
# Live Deployed Version

You can view and interact with the frontend at (Please make sure to run the backend in your local environment first, fue to the backend deployment issues):
https://dewang04.github.io/SHL_FRONTEND/
