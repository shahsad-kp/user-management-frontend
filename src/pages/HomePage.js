import {Fragment} from "react";
import {Navbar, UserBody} from "../components";

function HomePage() {
    return (
        <Fragment>
            <Navbar page={'home'}/>
            <UserBody/>
        </Fragment>
    );
}

export default HomePage;