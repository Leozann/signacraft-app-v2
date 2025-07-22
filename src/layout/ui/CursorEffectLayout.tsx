import { Fragment, useEffect, useRef, useState } from "react";

interface CursorProps {
    children: React.ReactNode;
};

function CursorEffectLayout({ children }: CursorProps) {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [visible, setVisible] = useState(false);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(()=> {
        const MouseMoveHandler = (event: MouseEvent) => {
            setPosition({ x: event.clientX, y: event.clientY });
            setVisible(true);

            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
                timeoutRef.current = setTimeout(() => {
                    setVisible(false);
                }, 150);
            }
        };

        window.addEventListener("mousemove", MouseMoveHandler);
        return () => {
            window.removeEventListener("mousemove", MouseMoveHandler);
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);


    return (
        <Fragment>
            <div style={{position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", pointerEvents: "none", opacity: visible ? 1 : 0, transition: "opacity 0.3s ease", background: `radial-gradient(circle 75px at ${position.x}px ${position.y}px, rgba(239, 61, 171, 1), transparent 90%)`, mixBlendMode: "overlay", filter: "blur(15px)"}}/>
            {children}
        </Fragment>
    );
};

export default CursorEffectLayout;