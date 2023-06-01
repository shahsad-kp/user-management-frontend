import './Navbar.css';
import {Link} from "react-router-dom";
import AccountCircle from  "../../Icons/account_circle.svg"
import Logout from "../../Icons/logout.svg"
import HomeIcon from "../../Icons/home.svg"

function Navbar({ page }) {
    let homeIcon = null;

    if (page === "home") {
        homeIcon = (<img src={AccountCircle} alt="Profile"/>)
    } else if (page === "edit") {
        homeIcon = (<img src={HomeIcon} alt="HomeIcon"/>)
    } else {
        homeIcon = (<i></i>)
    }

    return (
        <header>
            <Link to={ page === "home" ? '/profile/' : '/'}>
                {homeIcon}
            </Link>
            <h1>User Management System</h1>
            <Link to={'/'}>
                {/*TODO: Add logout functionality */}
                <img src={Logout} alt="Logout"/>
            </Link>
        </header>
    );
}

export default Navbar;
