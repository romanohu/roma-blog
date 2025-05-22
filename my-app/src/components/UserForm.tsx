"use client";

import React, { useState } from 'react';

export default function UserForm() {
    const [name, setName] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Hello, ${name}!`);
    };

    return (
        <>
        <p>------------------------------↓</p>
        <form onSubmit={handleSubmit}>
            <label>
                お名前を入力してください:
                <input 
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
            </label>
            <button type='submit'>送信</button>

            {name && <p>こんにちわ，{name}さん!</p>}
        
        </form>
        <p>------------------------------↑</p>
        </>
    );
}