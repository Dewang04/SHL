function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value.trim();
  if (!message) return;

  appendMessage("user", message);
  input.value = "";

  setTimeout(() => {
    const reply = getBotReply(message);
    appendMessage("bot", reply);
  }, 600);
}

function appendMessage(sender, message) {
  const chatMessages = document.getElementById("chat-messages");

  const msgDiv = document.createElement("div");
  msgDiv.classList.add("chat-message", sender);
  msgDiv.textContent = message;

  chatMessages.appendChild(msgDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getBotReply(userMessage) {
  const msg = userMessage.toLowerCase();
  if (msg.includes("hello") || msg.includes("hi"))
    return "Hello! How can I assist you?";
  if (msg.includes("help")) return "Sure, tell me what you need help with.";
  return "I'm here to help. Feel free to ask anything!";  //Replace this with the backend api response..
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
