const userInput = document.querySelector("#user-input");
const sendButton = document.querySelector("#send-button");
const chatbox = document.querySelector(".chat-body");

const adjustTextAreaHeight = () => {
    userInput.style.height = 'auto'; // Reset height to auto to calculate scrollHeight
    userInput.style.height = `${userInput.scrollHeight}px`; // Set height to scrollHeight
};

const createChatDiv = (message, className) => {
    const chatDiv = document.createElement("div");
    chatDiv.classList.add("message", className);
    chatDiv.innerHTML = `<p>${message}</p>`;
    return chatDiv;
};

const generateResponse = () => {
    // This function will be used to generate the bot's response
};

const displayChat = () => {
    const userMessage = userInput.value.trim();
    if (!userMessage) return;

    chatbox.appendChild(createChatDiv(userMessage, "user-message"));
    userInput.value = "";  
    adjustTextAreaHeight(); // Adjust height after clearing the input
    chatbox.scrollTo(0, chatbox.scrollHeight);  

    setTimeout(() => {
        chatbox.appendChild(createChatDiv("Thinking....", "bot-message"));
        chatbox.scrollTo(0, chatbox.scrollHeight);  
        generateResponse();
    }, 600);
};

userInput.addEventListener("input", adjustTextAreaHeight);

sendButton.addEventListener("click", displayChat);
