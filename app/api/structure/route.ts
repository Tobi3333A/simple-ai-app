import { generateText, Output } from "ai";
import { personSchema } from "@/app/schema";

export async function POST(req: Request) {
    const body = await req.json();

    const { prompt } = body as { prompt: string };

    const { output } = await generateText({
        model: 'openai/gpt-6.1-sol',
        system: 'You are a tool to create a random age and gender for the object or person or whatever I tell you....that will be the name.',
        output: Output.object({
            schema: personSchema
        }),
        prompt
    });

    return Response.json(output);
}