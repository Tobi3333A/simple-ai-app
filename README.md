# Simple AI App
This is a very simple app with a very basic chatbot and a little demo to show how to connect AI to an app using the AI SDK.

## Contents
- A simple chatbot
- A simple demonstration of using AI to generate structured output/responses.

## Setup
First, you have to download nodejs if you don't already have it. You can download it [here](https://nodejs.org/en/download).<br/>
After that, you should download [pnpm](https://pnpm.io/installation). You could also just ask AI how to set it up.

## Running the App
To run the app, just follow these commands
```bash
pnpm i
pnpm dev
```

## API Key
You can create an account on [Vercel](https://vercel.com) to get an AI Gateway API Key.<br/>
After that, create a `.env.local` file in your root folder and put this there:
```env
AI_GATEWAY_API_KEY=
```

After starting the dev server, you can just go to the port it gives you and try the app!.

The link to the AI SDK: [AI SDK](https://ai-sdk.dev)