// Handle sending messages
document.getElementById("chatForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const chatMessages = document.getElementById("chatMessages");
    const messageInput = document.getElementById("chatMessageInput");

    if (messageInput.value.trim() !== "") {
        // Create new message element
        const newMessage = document.createElement("div");
        newMessage.className = "message sender";
        newMessage.innerHTML = `<p>${messageInput.value}</p><span class="timestamp">${new Date().toLocaleTimeString()}</span>`;

        chatMessages.appendChild(newMessage);

        // Clear input field
        messageInput.value = "";

        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
});
