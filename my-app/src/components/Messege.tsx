"use client";

type Props = {
    name: string;
    text: string;
};

export default function Messege( props : Props) {
    return(
        <div>
            <p>---------------------------------------↓</p>
            <h2>{props.name}さんへのメッセージ</h2> {/* サブタイトルのような挨拶 */}
            <p>{props.text}</p>
            <p>---------------------------------------↑</p>
        </div>
    );
    }
