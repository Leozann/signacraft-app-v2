import LayoutStyles from "../../assets/styles/CenteredLayout.module.scss"

interface CenteredLayoutProps {
    children: React.ReactNode;
};

function CenteredLayout({children}: CenteredLayoutProps) {
    return(
        <div className={LayoutStyles.containerCentered} >
            {children}
        </div>
    )
}

export default CenteredLayout;