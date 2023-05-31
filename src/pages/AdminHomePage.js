import {Fragment} from "react";
import {Navbar, UsersList} from "../components";

function AdminHomePage() {
    return (
        <Fragment>
            <Navbar page={'home'}/>
            <UsersList/>
        </Fragment>
    );
}

export default AdminHomePage;