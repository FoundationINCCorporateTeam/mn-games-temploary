document.addEventListener("DOMContentLoaded", () => {
    // DOM elements
    const chatButton = document.getElementById("chat-button");
    const chatBox = document.getElementById("chat-box");
    const closeChatButton = document.getElementById("close-chat");
    const sendButton = document.getElementById("send-button");
    const userInput = document.getElementById("user-input");
    const chatMessages = document.getElementById("chat-messages");
    const aiCallout = document.getElementById("ai-callout");
    const slideMenu = document.getElementById("slide-menu");
    // Add predefined messages for startup buttons
    const predefinedMessages = [
        "I need support! 💬",
        "I want to help expand! 📈",
        "Partnerships! 🤝",
        "Can you connect me to an agent? 🏢",
        "Something else! ❓"
    ];
    const startupButtonsContainer = document.getElementById("startup-buttons");

    // Create startup buttons dynamically
    const createStartupButtons = () => {
        predefinedMessages.forEach(message => {
            const button = document.createElement("button");
            button.className = "startup-button";
            button.textContent = message;
            button.addEventListener("click", () => {
                // Submit the message as if it were typed by the user
                userInput.value = message;
                sendMessage();
                // Hide the startup buttons after the first message is sent
                startupButtonsContainer.style.display = "none";
            });
            startupButtonsContainer.appendChild(button);
        });
    };

    // Function to initialize chat
    const openChatBox = () => {
        chatBox.style.display = "flex";
        chatButton.style.display = "none";
        aiCallout.style.display = "none";

        if (chatMessages.children.length === 2 && 
            chatMessages.firstElementChild.id === 'bot-message' && 
            !chatMessages.children[1].classList.contains('message')) {
            startupButtonsContainer.style.display = "block";
        } else {
            startupButtonsContainer.style.display = "none";
        }        
    };
 // Function to close the chat box
 const closeChatBox = () => {
    chatBox.style.display = "none";
    chatButton.style.display = "flex";
    aiCallout.style.display = "block";
    slideMenu.classList.remove("show");
};
    // Call the function to generate startup buttons
    createStartupButtons();

    // Rest of the event listeners remain the same
    chatButton.addEventListener("click", openChatBox);
    aiCallout.addEventListener("click", openChatBox);
    closeChatButton.addEventListener("click", closeChatBox);

    const apiUrl = "https://publicmowing.site.blueastroid.com/mncares/chat";  // Your backend API for chatting
    let botMessageCount = 0;

    // Send message to the bot
    const sendMessage = async () => {
        const userMessage = userInput.value.trim();
        if (!userMessage) return; // Don't send empty messages

        // Add user message to the chat with avatar
        const userMessageDiv = document.createElement("div");
        userMessageDiv.className = "message user-message";
        const userAvatar = document.createElement("img");
        userAvatar.className = "avatar";
        userAvatar.src = "user_avatar.png";  // Your user avatar image
        userMessageDiv.appendChild(userAvatar);
        userMessageDiv.textContent = userMessage;
        chatMessages.appendChild(userMessageDiv);

        // Scroll to the bottom of the chat
        chatMessages.scrollTop = chatMessages.scrollHeight;
        userInput.value = ""; // Clear input field

        // Show loading spinner
        const loadingDiv = document.createElement("div");
        loadingDiv.className = "message bot-message loading";
        const loadingSpinner = document.createElement("div");
        loadingSpinner.className = "loading-spinner";
        loadingDiv.appendChild(loadingSpinner);
        const loadingText = document.createElement("span");
        loadingText.textContent = "AI is typing...";
        loadingDiv.appendChild(loadingText);
        chatMessages.appendChild(loadingDiv);

        // Scroll to the bottom of the chat after loading spinner
        chatMessages.scrollTop = chatMessages.scrollHeight;

        try {
            // Fetch response from API
            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ message: userMessage })
            });

            // If the response is not OK, throw an error
            if (!response.ok) {
                throw new Error("Failed to fetch response from the server.");
            }

            const data = await response.json();
            const botMessage = data.response || "Sorry, I couldn't understand that.";

            // Remove loading spinner
            loadingDiv.remove();

            // Add bot message to the chat
            const botMessageDiv = document.createElement("div");
            botMessageDiv.className = "message bot-message";
            botMessageDiv.id = "bot-message"
            const botAvatar = document.createElement("img");
            botAvatar.className = "avatar";
            botAvatar.src = "bot_avatar.jpg";  // Your bot avatar image
            botMessageDiv.appendChild(botAvatar);
            botMessageDiv.textContent = botMessage;
            chatMessages.appendChild(botMessageDiv);

            // Check if the bot response indicates the need for an agent
            const needsAgent = userMessage.toLowerCase().includes("agent") ||
                userMessage.toLowerCase().includes("talk to agent") ||
                userMessage.toLowerCase().includes("need help");
                botMessageCount++; // Increment the bot message counter

           // Add "Connect to Agent" button after the third AI message
           if (botMessageCount === 3) {
               const connectButton = document.createElement("button");
               connectButton.className = "connect-button";
               connectButton.textContent = "🤝 Need more help? Connect to an Agent";
               connectButton.addEventListener("click", () => {
                   window.open("/chat", "_blank"); // URL to connect to an agent
               });
               chatMessages.appendChild(connectButton);
           }

            if (needsAgent) {
                const connectButton = document.createElement("button");
                connectButton.className = "message-connect-button";
                connectButton.innerHTML = "🔗 Connect to Agent";
                connectButton.addEventListener("click", () => {
                    window.open("/chat", "_blank");
                });
                botMessageDiv.appendChild(connectButton);
            }

            // Scroll to the bottom of the chat
            chatMessages.scrollTop = chatMessages.scrollHeight;
        } catch (error) {
            console.error("Error:", error);

            // Remove loading spinner
            loadingDiv.remove();

            // Add error message to the chat
            const errorMessageDiv = document.createElement("div");
            errorMessageDiv.className = "message bot-message";
            errorMessageDiv.textContent = "An error occurred. Please try again.";
            chatMessages.appendChild(errorMessageDiv);

            // Scroll to the bottom of the chat
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    };

    // Event listeners for sending messages
    sendButton.addEventListener("click", sendMessage);
    userInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            sendMessage();
        }
    });
});
