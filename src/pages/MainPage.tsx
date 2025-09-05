import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import NavbarComponent from "../components/NavbarComponent";
import BlurredBackground from "../layout/app/BlurredBackground";
import CenteredLayout from "../layout/ui/CenteredLayout";
import MainPageStyles from "../assets/styles/MainPage.module.scss";
import FooterComponent from "../components/FooterComponent";
import CursorEffect from "../layout/app/CursorEffect";
import TypingEffect from "../layout/app/TypingEffect";

const ResponsiveHeading = () => {
    const [isMobileLayout, setIsMobileLayout] = useState(false);
    useEffect(() => {
        const resizeHandler = () => {
            setIsMobileLayout(window.innerWidth < 480);
        };
        resizeHandler();
        window.addEventListener("resize", resizeHandler);

        return () => window.removeEventListener("resize", resizeHandler);

    }, []);
    return isMobileLayout ? <TypingEffect typingSpeed={100} typoChance={0.5}><h3 style={{ textAlign: "left" }}>#ElevateYourPresence</h3></TypingEffect> : <TypingEffect typingSpeed={100} typoChance={0.5}><h1 style={{ textAlign: "left" }}>#ElevateYourPresence</h1></TypingEffect>
};

function MainPage() {
    return (
        <BlurredBackground>
            <CursorEffect>
                <NavbarComponent />
                <CenteredLayout>
                    <div className={MainPageStyles.Container}>
                        <div className={`${MainPageStyles.heading} user-select-none`}>
                            <div className={MainPageStyles.wrapper}>
                                <ResponsiveHeading />
                            </div>
                        </div>
                        <div className={`${MainPageStyles.description} user-select-none`}>
                            <p>Your trusted platform for crafting personalized, professional communications. Our simple yet powerful tools help you leave a lasting impression with email signatures, branding, and messages. Start with our template today and elevate your communication with ease and creativity.</p>
                        </div>
                        <div className={MainPageStyles.callToAction}>
                            <Outlet />
                        </div>
                    </div>

                </CenteredLayout>
                <FooterComponent />
            </CursorEffect>
        </BlurredBackground>
    )
};
export default MainPage;