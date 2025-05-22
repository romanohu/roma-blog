"use client";

import { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);

    return(
        <div>
            <p>---------------------------------------↓</p>
            <p>カウント:{count}</p>
            <button onClick={() => setCount(count + 1)}>カウントアップ</button>
            <p>---------------------------------------↑</p>
        </div>
    )
}