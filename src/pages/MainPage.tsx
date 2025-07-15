import {useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import NavbarComponent from "../components/NavbarComponent";
import BlurredBackground from "../layout/app/BlurredBackground";
import CenteredLayout from "../layout/ui/CenteredLayout";
import MainPageStyles from "../assets/styles/MainPage.module.scss";
import FooterComponent from "../components/FooterComponent";

const ResponsiveHeading = () => {
    const [isMobileLayout, setIsMobileLayout] = useState(false);
    useEffect(()=> {
        const resizeHandler = () => {
            setIsMobileLayout(window.innerWidth < 480);
        };
        resizeHandler();
        window.addEventListener("resize", resizeHandler);

        return () => window.removeEventListener("resize", resizeHandler);

    }, []);
    return isMobileLayout? <h3>#ElevateYourPresence</h3> : <h1>#ElevateYourPresence</h1>
};

// const CursorEffectContainer = ({children}: {children: React.ReactNode}) => {
//     const [position, setPosition] = useState({ x: 0, y: 0 });

//     useEffect(() => {
//         const moveHandler = (event: MouseEvent) => {
//             setPosition({ x: event.clientX, y: event.clientY });
//         };
//         window.addEventListener("mousemove", moveHandler);
//         return () => window.removeEventListener("mousemove", moveHandler);
//     }, []);

//     return(
//         <div className="wrapper" style={{ position: "relative", overflow: "hidden" }}>
//             <div 
//                 style={{
//                     position: "fixed",
//                     top: 0,
//                     left: 0,
//                     width: "100%",
//                     height: "100%",
//                     pointerEvents: "none",
//                     background: `radial-gradient(circle 75px at ${position.x}px ${position.y}px, rgba(96, 76, 195, 0.3), transparent)`,
//                     transition: "background 0.1s ease-out"
//                 }}
//             />
//             {children}
//         </div>
//     );
// };


function MainPage() {
    return(
    <BlurredBackground>
        <NavbarComponent/>
        <CenteredLayout>
            {/* <CursorEffectContainer>
                <div className={`${MainPageStyles.heading} user-select-none`}>
                    <ResponsiveHeading/>
                </div>
                <div className={`${MainPageStyles.description} user-select-none`}>
                    <p>Your trusted platform for crafting personalized, professional communications. Our simple yet powerful tools help you leave a lasting impression with email signatures, branding, and messages. Start with our template today and elevate your communication with ease and creativity.</p>
                </div>
            </CursorEffectContainer> */}
            <div className={MainPageStyles.wrapper}>
                {/* <div className="mouseHover"> */}
                    <div className={`${MainPageStyles.heading} user-select-none`}>
                        <ResponsiveHeading/>
                    </div>
                    <div className={`${MainPageStyles.description} user-select-none`}>
                        <p>Your trusted platform for crafting personalized, professional communications. Our simple yet powerful tools help you leave a lasting impression with email signatures, branding, and messages. Start with our template today and elevate your communication with ease and creativity.</p>
                    </div>
                {/* </div> */}
                <div className={MainPageStyles.callToAction}>
                    <Outlet/>
                </div>
            </div>
            
        </CenteredLayout>
        <FooterComponent/>
    </BlurredBackground>
    )
};
export default MainPage;