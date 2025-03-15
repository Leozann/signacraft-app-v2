import { Link, useNavigate } from "react-router-dom";
import NavbarStyles from "../assets/styles/NavbarComponent.module.scss"
function NavbarComponent() {
    const navigate = useNavigate();

    const MoveIntoMainRoute = () => {
        navigate("/");
    }

    return(
    <div className={NavbarStyles.navbar}>
        <div className={`${NavbarStyles.logo} user-select-none`} onClick={MoveIntoMainRoute}>
            <p className={NavbarStyles.titleAtTop}>Signacraft</p>
            <p className={NavbarStyles.titleAtBottom}>by Augustea</p>
        </div>

        <ul className={NavbarStyles.navLinks}>
            <li><Link to="/signature">SignatureX</Link></li>
            <li><Link to="/">GiftWave</Link></li>
            {/* <li><Link to="/">Docs</Link></li> */}
        </ul>
    </div>
    )
};

export default NavbarComponent;