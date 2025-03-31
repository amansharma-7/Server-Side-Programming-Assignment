function sendMessage() {
  const userInput = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");
  const userMessage = userInput.value.trim();

  if (userMessage) {
    // Add user message to the chat
    const userDiv = document.createElement("div");
    userDiv.classList.add("user-message");
    userDiv.innerHTML = `<p>${userMessage}</p>`;
    chatBox.appendChild(userDiv);

    // Clear the input field
    userInput.value = "";

    // Scroll to the bottom of the chat
    chatBox.scrollTop = chatBox.scrollHeight;

    // Simulate bot response after a short delay
    setTimeout(() => {
      const botDiv = document.createElement("div");
      botDiv.classList.add("bot-message");
      botDiv.innerHTML = `<p>Sorry, I didn't quite get that. Can you ask something else?</p>`;
      chatBox.appendChild(botDiv);

      // Scroll to the bottom of the chat again
      chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);
  }
}
