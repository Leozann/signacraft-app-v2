import { useEffect, useState } from "react";

import BackgroundStyles from "../../assets/styles/BlurredBackground.module.scss";
import imageForDesktop from "../../assets/images/blur-effect-desktop.png";
import imageForMobile from "../../assets/images/blur-effect-mobile.png";

function BlurredBackground({children} : {children: React.ReactNode}) {
    const [image, setImage] = useState(imageForDesktop);
    useEffect(() => {
        const resizeHandler = () => {
            setImage(window.innerWidth < 480 ? imageForMobile : imageForDesktop);
        };

        window.addEventListener("resize", resizeHandler);
        return () => window.removeEventListener("resize", resizeHandler);
    }, []);

    return(
        <div className={BackgroundStyles.blurBackgroundDesktop} style={{backgroundImage: `url(${image})`}} id="wrapper">
            {children}
        </div>
    )
};

export default BlurredBackground;