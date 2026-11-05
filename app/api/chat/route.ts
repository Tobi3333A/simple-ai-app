import { convertToModelMessages, streamText } from "ai";

export async function POST(req: Request) {
    const body = await req.json();

    const { messages } = body;

    const result = streamText({
        model: 'openai/gpt-6.1-sol',
        system: 'You are a general chatbot',
        messages: await convertToModelMessages(messages)
    });

    return result.toUIMessageStreamResponse();
}