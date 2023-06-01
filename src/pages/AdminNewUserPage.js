import {Navbar, AdminEditUser} from "../components";
import {Fragment} from "react";

function AdminNewUserPage() {
    return (
        <Fragment>
            <Navbar page={'home'}/>
            <AdminEditUser page={'new'}/>
        </Fragment>
    );
}

export default AdminNewUserPage;