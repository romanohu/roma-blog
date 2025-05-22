"use client";

import { useState } from 'react';

export default function ApiCaller(){
    const[message, setMessage] = useState("");

    const handleFetch = async() => {
        try{
            const res = await fetch('/api/hello');
            const data = await res.json();
            setMessage(data.message);
        } catch (error) {
            console.error("API通信エラー:", error);
            setMessage("API通信エラー");
    }
};
    return (
        <div>
            <p>--------------------------↓</p>
            <button onClick={handleFetch}>
                APIからのメッセージを取得
            </button>
            {message && <p>{message}</p>}
            <p>--------------------------↑</p>
        </div>  
    );
}