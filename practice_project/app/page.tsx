"use client";


import Image from "next/image";
import { useState } from "react";
import {generationTextAction} from "@/app/actions/aiAction";
import ReactMarkdown from "react-markdown"; // for better formating we have to use npm install react -markdown .

export default function Home() {

  const [prompt, setPrompt] = useState<string>("");
  const[output,setOutput] = useState<string>("");
  const handleSendPrompt= async () =>{

    const response = await generationTextAction(prompt);
    setOutput(response);


    

  }

  return (
    <div className="flex flex-col  items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-col items-center justify-between py-6 px-5
      bg-white dark:bg-black sm:items-start overflow-bottom pb-30">

        {
          output && (
            <div>
              <h1 className="text-2xl font-bold mb-4">AI RESPONSE</h1>
              <ReactMarkdown>{output}</ReactMarkdown>
            </div>
          )
        }

        <div className="input-area fixed bottom-6 py-6 px-5 flex items-center justify-between w-200">
          
          <input className=" border p-2 rounded-md w-[80%] outline-none" 
          placeholder="Ask Anything"
          value={prompt}
          onChange={(data)=>setPrompt(data.target.value)}
          ></input>
          <button 
          onClick={handleSendPrompt}
          className="w-25 h-10 bg-white text-black rounded-md cursor-pointer">Send</button>

       </div>


      </main>
    </div>
  );
}
