import './Navbar.css';
import {Link, useNavigate} from "react-router-dom";
import AccountCircle from  "../../Icons/account_circle.svg"
import Logout from "../../Icons/logout.svg"
import HomeIcon from "../../Icons/home.svg"
import {useDispatch} from "react-redux";
import {logoutUser} from "../../redux/userSlice";

function Navbar({ page }) {
    let homeIcon = null;
    const dispatch = useDispatch();
    const navigator = useNavigate();

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
            <img
                onClick={() => {
                    dispatch(logoutUser())
                    navigator('/login')
                }}
                src={Logout}
                alt="Logout"
            />
        </header>
    );
}

export default Navbar;
