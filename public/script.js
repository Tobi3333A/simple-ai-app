const form = document.getElementById('chat-form');
const input = document.getElementById('message');
const chat = document.getElementById('chat');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const message = input.value.trim();

    if (!message) return;

    addMessage("You", message);
    input.value = "";

    try {
        const res = await fetch('/api/chat', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ message })
        })

        const data = await res.json();

        if (!res.ok) {
            throw new Error(data.error || "Error getting response from model");
        }

        addMessage("AI", data.reply);
    } catch (e) {
        console.log("error: " + e);
    }
});

const addMessage = (sender, text) => {
    const paragraph = document.createElement('p');
    paragraph.textContent = `${sender}: ${text}`;
    chat.appendChild(paragraph);
    chat.scrollTop = chat.scrollHeight;
}