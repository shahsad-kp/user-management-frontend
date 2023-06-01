import {Navbar, AdminEditUser} from "../components";
import {Fragment} from "react";

function AdminNewUserPage() {
    return (
        <Fragment>
            <Navbar page={'new'}/>
            <AdminEditUser page={'add'}/>
        </Fragment>
    );
}

export default AdminNewUserPage;