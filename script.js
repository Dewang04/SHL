// Update sendMessage to be async so we can await the API response.
async function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value.trim();
  if (!message) return;

  appendMessage("user", message);
  input.value = "";

  // Call the asynchronous getBotReply function to get the backend's response.
  const reply = await getBotReply(message);
  appendMessage("bot", reply);
}

function appendMessage(sender, message) {
  const chatMessages = document.getElementById("chat-messages");

  const msgDiv = document.createElement("div");
  msgDiv.classList.add("chat-message", sender);
  msgDiv.textContent = message;

  chatMessages.appendChild(msgDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Asynchronous function that sends a POST request to your backend API endpoint
async function getBotReply(userMessage) {
  try {
    // http://localhost:8000
    const response = await fetch("https://dewang04.github.io/SHL_BACKEND/recommend", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ query: userMessage })
    });
    if (response.ok) {
      const data = await response.json();
      return data.recommendations;
    } else {
      console.error("Response error:", response.status);
      return "I'm sorry, something went wrong with the server.";
    }
  } catch (error) {
    console.error("Fetch error:", error);
    return "I'm sorry, I couldn't reach the server.";
  }
}

const themeToggle = document.getElementById("theme-toggle");
const toggleLabel = document.querySelector(".switch");

function updateTooltip() {
  toggleLabel.title = themeToggle.checked ? "Light Mode" : "Dark Mode";
}

themeToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode", themeToggle.checked);
  updateTooltip();
});

document.getElementById("user-input").addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    event.preventDefault();
    sendMessage();
  }
});

updateTooltip();
