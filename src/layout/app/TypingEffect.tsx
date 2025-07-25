import { useEffect, useState,  ReactElement, isValidElement, ReactNode, cloneElement, useMemo, Fragment, useRef } from "react";
import MainPageStyles from "../../assets/styles/MainPage.module.scss";

interface TypingEffectProps {
    typingSpeed?: number;
    typoChance: number; // 0.5 for 50% chance of typo
    children: ReactElement;
};

function GetTextHelper(element: ReactElement<unknown>): string {
    const children = (element.props as { children?: ReactNode }).children;

    if (typeof children === "string" || typeof children === "number") {
        return children.toString();
    }

    if (Array.isArray(children)) {
        return children.map((child) => {
            if (typeof child === "string" || typeof child === "number") {
                return child.toString();
            } else if (isValidElement(child)) {
                return GetTextHelper(child);
            }
            return "";
        }).join("");
    }

    if (isValidElement(children)) {
        return GetTextHelper(children);
    }

    console.warn("Unsupported child type in TypingEffect:", children);
    return "";
}


function TypingEffect({ children, typingSpeed = 150, typoChance = 0 }: TypingEffectProps) {
    const [displayedText, setDisplayedText] = useState("");
    const [showCursor, setShowCursor] = useState(true);
    const [isTyping, setIsTyping] = useState(true);
    const fullText = useMemo(() => GetTextHelper(children), [children]);
    const textRef = useRef<HTMLSpanElement>(null);
    const cursorRef = useRef<HTMLSpanElement>(null);
    
    useEffect(() => {
        let index = 0;
        let timeoutId: ReturnType<typeof setTimeout>;

        const SetTypingDelay = (baseSpeed: number, currentChar: string, prevWord: string) => {
            const variance = baseSpeed * 0.4;
            let randomFactor = baseSpeed + (Math.random() * variance * 2- variance);
            
            if (/[.,!?]/.test(currentChar)) {
                randomFactor += baseSpeed * 2;
            } else if (/\s/.test(currentChar)) {
                randomFactor += baseSpeed * 0.5;
            } else if ( /[A-Z]/.test(currentChar) && prevWord && /[a-z]/.test(prevWord)) {
                randomFactor += baseSpeed * 0.5;
            }
            return randomFactor;
        };

        const SetTypoHandler = () => {
            const chars = "abcdefghijklmnopqrstuvwxyz";
            return chars[Math.floor(Math.random() * chars.length)];
        };

        const TypeNewText = () => {
            const fullSentence = fullText.charAt(index);
            const isInLastWord = index === fullText.length - 1;

            const typoProbability = typoChance > 0 && isInLastWord && Math.random() < typoChance && /[a-zA-Z]/.test(fullSentence);

            if (typoProbability) {
                const wrongChar = SetTypoHandler();
                setDisplayedText((prev) => prev + wrongChar);
                timeoutId = setTimeout(() => { // simulate backspace
                    setDisplayedText((prev) => prev.slice(0, -1));
                    timeoutId = setTimeout(() => { // continue typing the correct character
                        setDisplayedText(fullText.slice(0, index + 1));
                        index++;
                        if (index< fullText.length) {
                            const nextWord = fullText.charAt(index);
                            const prevWord = fullText.charAt(index - 1);
                            timeoutId = setTimeout(TypeNewText, SetTypingDelay(typingSpeed, nextWord, prevWord));
                        } else {
                            setIsTyping(false);
                        }
                    }, typingSpeed * 1.2);
                }, typingSpeed * 10); // pause a bit longer after typo
            } else {
                setDisplayedText(fullText.slice(0, index + 1));
                index++;
                if (index< fullText.length) {
                    const nextWord = fullText.charAt(index);
                    const prevWord = fullText.charAt(index - 1);
                    timeoutId = setTimeout(TypeNewText, SetTypingDelay(typingSpeed, nextWord, prevWord));
                } else {
                    setIsTyping(false);
                }
            }
        };

        setDisplayedText("");
        timeoutId = setTimeout(TypeNewText, SetTypingDelay(typingSpeed, fullText.charAt(0), ""));

        return () => {
            clearTimeout(timeoutId);
        };

    }, [fullText, typingSpeed, typoChance]);

    useEffect(() => {
        let cursorInterval: ReturnType<typeof setInterval>;
        let cursorTimeout: ReturnType<typeof setTimeout>;

        if (isTyping) {
            cursorInterval = setInterval(() => {
                setShowCursor((prev) => !prev);
            }, 500);
        } else {
            cursorInterval = setInterval(() => {
                setShowCursor((prev) => !prev);
            }, 500);
            cursorTimeout = setTimeout(() => {
                clearInterval(cursorInterval);
                setShowCursor(false);
            }, 3000);
        }

        return () => {
            clearInterval(cursorInterval);
            clearTimeout(cursorTimeout);
        };
    }, [isTyping]);

    useEffect(() => {
        if (!textRef.current || !cursorRef.current) return;
        const textWidth = textRef.current.offsetWidth;
        cursorRef.current.style.left = `${textWidth}px`;
    }, [displayedText]);

    // const displayWithCursor = displayedText + (showCursor ? "|" : "");
    const displayWithCursor = () => {
        return(
            <Fragment>
                <span ref={textRef}>{displayedText}</span>
                {showCursor && <span ref={cursorRef} className={MainPageStyles.cursorEffect} style={{visibility: showCursor ? "visible" : "hidden"}}>|</span>}
            </Fragment>
        )
    };

    return cloneElement(children, {}, displayWithCursor());
};

export default TypingEffect;