'use client'

import { useState } from "react";
import { useChat } from "@ai-sdk/react";
import Link from "next/link";

export default function Home() {
  const [input, setInput] = useState('');
  const { messages, sendMessage } = useChat();

  return (
    <div className="">
      <h1 className="text-3xl font-bold text-center my-12">Simple AI App</h1>
      <div className="flex justify-center items-center min-h-100">
        <div className="w-200">
          {messages.map((m, idx) => (
            <p key={idx}>
              {m.role}: {m.parts.map(part => part.type === 'text' ? part.text : null)}</p>
          ))}
        </div>
      </div>
      <div className="flex items-end justify-center gap-8">
        <textarea
          className="rounded-md border-green-700 border-2 w-120 h-32 p-4"
          value={input}
          onChange={({target}) => setInput(_prev => target.value)}
        />
        <button
          className="bg-slate-600 rounded-md p-2 text-lg cursor-pointer"
          onClick={() => {
            sendMessage({text: input});
            setInput("");
          }}
        >
          Send
        </button>
      </div>
      <Link href="/structure" className="bg-slate-600 rounded-md p-2 text-lg cursor-pointer mx-40">
          Go to Structured Output
        </Link>
    </div>
  );
}
