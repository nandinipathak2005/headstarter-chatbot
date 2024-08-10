const input = document.querySelector("#user-input");
const sendButton = document.querySelector("#send-button");
const chatbox = document.querySelector(".chat-body");

const createChatDiv = (message, className) => {
    const chatDiv = document.createElement("div");
    chatDiv.classList.add("message", className);
    chatDiv.innerHTML = className === "user-message"
        ? `<p>${message}</p>`
        : `<p>${message}</p>`;
    return chatDiv;
};

const displayChat = () => {
    const userMessage = input.value.trim();
    if (!userMessage) return;

    // Append the user message
    chatbox.appendChild(createChatDiv(userMessage, "user-message"));
    input.value = "";  // Clear the input field
    chatbox.scrollTop = chatbox.scrollHeight;  // Scroll to the bottom

    // Simulate a delay for bot response
    setTimeout(() => {
        chatbox.appendChild(createChatDiv("Thinking....", "bot-message"));
        chatbox.scrollTop = chatbox.scrollHeight;  // Scroll to the bottom
    }, 600);
};

sendButton.addEventListener("click", displayChat);
