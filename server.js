import { generateText } from "ai";
import express from "express";

const app = express();

app.use(express.json());
app.use(express.static("public"));

app.post('/api/chat', async (req, res) => {
    const { message } = req.body;

    if (typeof message !== 'string' || !message.trim()) {
        return res.status(400).json({
            error: "Please provide a message"
        });
    }

    try {
        const result = await generateText({
            model: 'openai/gpt-6.1-sol',
            system: "You are a this and that",
            prompt: message,
        });

        res.json({ reply: result.text });
    } catch (e) {
        res.status(500).json({
            error: "Model failed to generate a response"
        });
    }
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
})