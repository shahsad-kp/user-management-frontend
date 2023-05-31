import {Fragment} from "react";
import {Navbar, UserBody} from "../components";

function Homepage() {
    return (
        <Fragment>
            <Navbar/>
            <UserBody/>
        </Fragment>
    );
}

export default Homepage;