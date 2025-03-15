interface OverlayLayoutProps {
    children: React.ReactNode;
};

function OverlayLayout ({children} : OverlayLayoutProps) {
    return(
        <div className="overlay-layout">
            {children}
        </div>
    )
};

export default OverlayLayout;