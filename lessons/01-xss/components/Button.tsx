"use client";

import { useRouter } from "next/navigation";
import React from "react";

interface ButtonProps {
    title?: string;
    content?: string;
}

const payload = [
`css = 'body {display: flex;align-items: center;justify-content: center;font-size: 16px;height: 100vh;background-image: radial-gradient(circle at 12px 55px, rgba(255, 255, 255, 0.6), transparent 2px), radial-gradient(circle at 119px 9px, rgba(255, 255, 255, 0.7), transparent 1px), radial-gradient(circle at 34px 85px, rgba(255, 255, 255, 0.8), transparent 2px), radial-gradient(circle at 126px 27px, rgba(255, 255, 255, 0.7), transparent 2px), radial-gradient(circle at 10px 13px, rgba(255, 255, 255, 0.5), transparent 1px), radial-gradient(circle at 120px 60px, rgba(255, 255, 255, 0.4), transparent 1px), radial-gradient(circle at 128px 73px, rgba(255, 255, 255, 0.6), transparent 2px), radial-gradient(circle at 78px 75px, rgba(255, 255, 255, 0.4), transparent 2px), radial-gradient(circle at 11px 114px, rgba(255, 255, 255, 0.5), transparent 1px), radial-gradient(circle at 122px 81px, rgba(255, 255, 255, 0.7), transparent 2px);background-size: 128px 128px;background-color: #020107;overflow: hidden;}.space-jam {position: relative;margin: 0;width: 720px;height: 471px;font-family: "Luckiest Guy", cursive;font-weight: normal;line-height: 1;text-transform: uppercase;opacity: 1;transform: scale(1);animation: introAnim 1s forwards reverse;will-change: transform, opacity;cursor: pointer;}.space-jam span {position: absolute;display: inline-block;text-shadow: 0.03em 0.03em #11192f;transform: translateY(0);-webkit-animation: letterAnim 0.9s forwards ease-in-out;animation: letterAnim 0.9s forwards ease-in-out;will-change: transform;}.space-jam span:after {content: attr(data-text);position: absolute;top: 0;left: 0;text-shadow: none;background: radial-gradient(circle at center, #cede73 0%, #a5cd63 21%, #3ab473 36%, #036ba5 54%);-webkit-background-clip: text;-webkit-text-fill-color: transparent;-webkit-text-stroke-color: white;-webkit-text-stroke-width: 4px;}.space-jam span:nth-of-type(2) {-webkit-animation-delay: 1.1s;animation-delay: 1.1s;}.space-jam span:nth-of-type(3) {-webkit-animation-delay: 1.2s;animation-delay: 1.2s;}.space-jam span:nth-of-type(4) {-webkit-animation-delay: 1.3s;animation-delay: 1.3s;}.space-jam span:nth-of-type(5) {-webkit-animation-delay: 1.4s;animation-delay: 1.4s;}.space-jam span:nth-of-type(6) {-webkit-animation-delay: 1.5s;animation-delay: 1.5s;}.space-jam span:nth-of-type(7) {-webkit-animation-delay: 1.6s;animation-delay: 1.6s;}.space-jam span:nth-of-type(8) {-webkit-animation-delay: 1.7s;animation-delay: 1.7s;}.space-jam span:nth-of-type(9) {-webkit-animation-delay: 1.8s;animation-delay: 1.8s;}.space-jam span:first-of-type, .space-jam span:last-of-type {-webkit-animation-delay: 1.6s;animation-delay: 1.6s;}.space-jam span[data-text=x] {font-size: 155px;top: 123px;left: 116px;z-index: 2;}.space-jam span[data-text=x]:after {background-position: -20px 25px;}.space-jam span[data-text=s]#s1 {font-size: 140px;top: 138px;left: 197px;z-index: 3;}.space-jam span[data-text=s]#s1:after {background-position: 8px 25px;}.space-jam span[data-text=s]#s2 {font-size: 140px;top: 125px;left: 258px;z-index: 2;}.space-jam span[data-text=s]#s2:after {background-position: -10px 25px;}.space-jam .j-j {top: -60px;left: 228px;font-size: 500px;font-family: "Paytone One";display: inline-block;}.space-jam .j-j:after {background-position: -20px 25px;}.space-jam .j-j:not(:first-child):not(:last-child) {clip: rect(388px, 62px, 453px, -10px);}.space-jam .j-j:last-child {clip: rect(0px, 350px, 224px, 0px);}.space-jam span[data-text=u] {top: 70px;left: 450px;font-size: 180px;z-index: 3;}.space-jam span[data-text=u]:after {background-position: 10px 20px;}.space-jam span[data-text=l] {top: 76px;left: 555px;font-size: 180px;z-index: 3;}.space-jam span[data-text=l]:after {background-position: 30px 25px;}.space-jam span[data-text=n] {top: 70px;left: 645px;font-size: 180px;z-index: 2;}.space-jam span[data-text=n]:after {background-position: 30px 25px;}.space-jam .rings {position: absolute;top: -10px;left: 187px;width: 400px;height: 400px;transform: rotate(8deg) skewX(-33deg);}.space-jam .rings [class^=xss-ring-] {position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);}.space-jam .rings [class^=xss-ring-]:after {content: "";display: block;position: absolute;border-radius: 50%;}.space-jam .rings .xss-ring-1 {width: 400px;height: 400px;}.space-jam .rings .xss-ring-1:after {width: 400px;height: 400px;background: radial-gradient(circle closest-side, transparent 85%, #f6eb16 85%, #ed2224 88%, #35469d 100%);}.space-jam .rings .xss-ring-2 {width: 340px;height: 340px;}.space-jam .rings .xss-ring-2:after {width: 340px;height: 340px;background: radial-gradient(circle closest-side, transparent 82.3529411765%, #f6eb16 82.3529411765%, #ed2224 88%, #35469d 100%);}.space-jam .rings .xss-ring-3 {width: 280px;height: 280px;}.space-jam .rings .xss-ring-3:after {width: 280px;height: 280px;background: radial-gradient(circle closest-side, transparent 78.5714285714%, #f6eb16 78.5714285714%, #ed2224 88%, #35469d 100%);}.space-jam .rings .xss-ring-4 {width: 220px;height: 220px;}.space-jam .rings .xss-ring-4:after {width: 220px;height: 220px;background: radial-gradient(circle closest-side, transparent 72.7272727273%, #f6eb16 72.7272727273%, #ed2224 88%, #35469d 100%);}@-webkit-keyframes introAnim {100% {opacity: 0;transform: scale(3);}}@keyframes introAnim {100% {opacity: 0;transform: scale(3);}}@-webkit-keyframes letterAnim {0% {transform: translateY(0px);}25% {transform: translateY(-10px);}60% {transform: translateY(20px);}100% {transform: translateY(0px);}}@keyframes letterAnim {0% {transform: translateY(0px);}25% {transform: translateY(-10px);}60% {transform: translateY(20px);}100% {transform: translateY(0px);}}'`,
`style = document.createElement('style'); style.setAttribute("id", "xss-style"); style.innerHTML = css`,
`!document.getElementById("xss-style") && document.head.appendChild(style)`,
`function addSpaceJamHeader(){const t=document.createElement("div");t.setAttribute("id", "xss-container");t.style.position="absolute";const e=document.createElement("h1");e.className="space-jam";const n=document.createElement("span");n.className="j-j",n.setAttribute("data-text","V"),n.setAttribute("aria-hidden","true"),n.textContent="V";const a=document.createElement("div");a.className="rings";for(let t=1;t<=4;t++){const e=document.createElement("div");e.className="xss-ring-"+t,a.appendChild(e)}const d=document.createElement("span");d.setAttribute("data-text","x"),d.textContent="x";const s=document.createElement("span");s.setAttribute("data-text","s"),s.setAttribute("id","s1"),s.textContent="s";const c=document.createElement("span");c.setAttribute("data-text","s"),c.setAttribute("id","s2"),c.textContent="s";const i=document.createElement("span");i.setAttribute("data-text","u"),i.textContent="u";const o=document.createElement("span");o.setAttribute("data-text","l"),o.textContent="l";const p=document.createElement("span");p.setAttribute("data-text","n"),p.textContent="n";const m=document.createElement("span");m.className="j-j",m.setAttribute("data-text","V"),m.setAttribute("aria-hidden","true"),m.textContent="V",e.appendChild(n),e.appendChild(a),e.appendChild(d),e.appendChild(s),e.appendChild(c),e.appendChild(i),e.appendChild(o),e.appendChild(p),e.appendChild(m),t.appendChild(e),document.body.appendChild(t)}`,
`!document.getElementById("xss-container") && addSpaceJamHeader();`,
].join("; ");

const xss_content = `javascript:${payload}`;

export default function Button(props: ButtonProps) {
    const router = useRouter();
    const { title = 'Click Me', content = xss_content } = props;
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