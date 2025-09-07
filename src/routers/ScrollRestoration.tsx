import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

// scroll behavior on route change

function ScrollRestoration() {
    const {pathname} = useLocation();
    const isFirstLoad = useRef(true);

    useEffect( ()=> {
        if ("scrollRestoration" in window.history) {
            window.history.scrollRestoration = "manual";
        }
        if (isFirstLoad.current) {
            // skip scrolling on first load / refresh
            isFirstLoad.current = false;
            return;
        }
        // Scroll to top only on navigation
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

export default ScrollRestoration;