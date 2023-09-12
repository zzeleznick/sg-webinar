"use client";

import { useRouter } from "next/navigation";
import React from "react";

interface ButtonProps {
    title?: string;
    content?: string;
}


export default function Button(props: ButtonProps) {
    const router = useRouter();
    const { title = 'Click Me', content = 'javascript:alert("PWNED")' } = props;
    return (
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => router.push(content)}>
            { title }
        </button>
    )
}

export function SafeButton(props: ButtonProps) {
    const router = useRouter();
    const { title = 'Click Me', content = 'Click Me' } = props;
    const sanitize = (maybeUrl: string) => {
        try {
            const url = new URL(maybeUrl);
            if (url.protocol === 'http:' || url.protocol === 'https:') {
                return url.toString();
            }
        } catch (e) {
            // ignore
        }
        return "";
    }
    const safeContent = sanitize(content);
    const enabled = safeContent !== "";
    return (
        <button disabled={!enabled}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => router.push(safeContent)}>
            { title }
        </button>
    )
}