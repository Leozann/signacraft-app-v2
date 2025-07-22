import {useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import NavbarComponent from "../components/NavbarComponent";
import BlurredBackground from "../layout/app/BlurredBackground";
import CenteredLayout from "../layout/ui/CenteredLayout";
import MainPageStyles from "../assets/styles/MainPage.module.scss";
import FooterComponent from "../components/FooterComponent";
import CursorEffectLayout from "../layout/ui/CursorEffectLayout";

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

function MainPage() {
    return(
    <BlurredBackground>
        <CursorEffectLayout>
            <NavbarComponent/>
            <CenteredLayout>
                <div className={MainPageStyles.wrapper}>
                        <div className={`${MainPageStyles.heading} user-select-none`}>
                            <ResponsiveHeading/>
                        </div>
                        <div className={`${MainPageStyles.description} user-select-none`}>
                            <p>Your trusted platform for crafting personalized, professional communications. Our simple yet powerful tools help you leave a lasting impression with email signatures, branding, and messages. Start with our template today and elevate your communication with ease and creativity.</p>
                        </div>
                    <div className={MainPageStyles.callToAction}>
                        <Outlet/>
                    </div>
                </div>
                
            </CenteredLayout>
            <FooterComponent/>
        </CursorEffectLayout>
    </BlurredBackground>
    )
};
export default MainPage;