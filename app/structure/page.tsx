'use client'

import { useState } from "react";
import { Person } from "../schema";

export default function Home() {
  const [input, setInput] = useState('');
  const [error, setError] = useState<String | null>(null);
  const [output, setOutput] = useState<Person | null>(null);

  const fetchRes = async () => {
    const res = await fetch('/api/structure', {
        method: 'POST',
        body: JSON.stringify({ prompt: input })
    });
    if (!res.ok) {
        setError("Error fetching structured output");
    }
    const data = await res.json();
    setOutput(data);
  }

  return (
    <div className="">
      <h1 className="text-3xl font-bold text-center my-12">Simple AI App</h1>
      <div className="flex justify-center items-center min-h-100">
        <div className="w-200">
          {output && (
            <p>
                Name: {output.name}<br/>
                Age: {output.age}<br/>
                Gender: {output.gender}
            </p>
          )}
        </div>
      </div>
      <div className="flex items-end justify-center gap-8">
        <textarea
          className="rounded-md border-green-700 border-2 w-120 h-32 p-4"
          value={input}
          onChange={({target}) => setInput(prev => target.value)}
        />
        <button
          className="bg-slate-600 rounded-md p-2 text-lg cursor-pointer"
          onClick={() => {
            fetchRes();
            setInput("");
          }}
        >
          Send
        </button>
        {error}
      </div>
    </div>
  );
}
