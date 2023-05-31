import './Navbar.css';
import {Link} from "react-router-dom";
import AccountCircle from  "../../Icons/account_circle.svg"
import Logout from "../../Icons/logout.svg"

function Navbar() {
    return (
        <header>
            <Link to={'/profile/'}>
                <img src={AccountCircle} alt="AccountCircle"/>
            </Link>
            <h1>User Management System</h1>
            <Link to={'/'}>
                <img src={Logout} alt="Logout"/>
            </Link>
        </header>
    );
}

export default Navbar;
