"use client";

import { useState } from 'react';

export default function UserMessageForm() {
    const[name, setName] = useState("");
    const[message, setMessage] = useState("");
    const[reply, setReply] = useState("");

    const handleSubmit = async(e: React.FormEvent) => {
        e.preventDefault();

        const res = await fetch("/api/greet", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, message }),
        });

        const data = await res.json();
        setReply(data.reply);
    };

    return(
        <>
        <p>------------------------------↓</p>
         <form onSubmit={handleSubmit} >
      <div>
        <label >名前：</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          
        />
      </div>

      <div>
        <label>メッセージ：</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          
        />
      </div>

      <button type="submit" >
        送信
      </button>

      {reply && <p>{reply}</p>}
    </form>
        <p>------------------------------↑</p>
    </>
    );
}