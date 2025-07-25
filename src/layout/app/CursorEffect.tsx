import { Fragment, useEffect, useRef, useState } from "react";

interface CursorProps {
    children: React.ReactNode;
};

function CursorEffect({ children }: CursorProps) {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [visible, setVisible] = useState(false);
    const [intensity, setIntensity] = useState(0.5);
    const [radius, setRadius] = useState(75);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const startTimeRef = useRef<number>(Date.now());

    useEffect(()=> { // track mouse movement
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

    useEffect(() => {
        const AnimateGlow = () => {
            const elapsed = (Date.now() - startTimeRef.current) / 1000;
            const wave = Math.sin(elapsed * 2);
            const newIntensity = 0.8 + wave * 0.2;
            const newRadius = 95 + wave * 20;
            
            setIntensity(newIntensity);
            setRadius(newRadius);
            requestAnimationFrame(AnimateGlow);
        };
        AnimateGlow();
    }, []);


    return (
        <Fragment>
            <div style={{position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", pointerEvents: "none", opacity: visible ? 1 : 0, transition: "opacity 0.3s ease", background: `radial-gradient(circle ${radius}px at ${position.x}px ${position.y}px, rgba(239, 61, 171, ${intensity}), transparent 90%)`, mixBlendMode: "overlay", filter: "blur(15px)"}}/>
            {children}
        </Fragment>
    );
};

export default CursorEffect;