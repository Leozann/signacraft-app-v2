import FooterStyles from "../assets/styles/FooterComponent.module.scss"

function FooterComponent() {
    return(
        <div className={`${FooterStyles.footer} user-select-none`}>
            <div className={FooterStyles.displayFlex}>
                <div className="splitLeft">
                    <p>© 2024 PT. Augustea Intcrews Indonesia. All rights reserved. </p>
                </div>
                <div className={FooterStyles.splitRight}>
                    <a href="https://github.com/leozann" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                    <span id="divider">|</span>
                    <a href="https://leozanworks.vercel.app" target="_blank" rel="noopener noreferrer">
                        LeozanWorks
                    </a>
                </div>
            </div>
        </div>
    );
};

export default FooterComponent;