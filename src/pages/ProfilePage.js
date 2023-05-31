import {Fragment} from "react";
import {Navbar, UserProfile} from "../components";

function ProfilePage() {
    return (
        <Fragment>
            <Navbar page={'profile'}/>
            <UserProfile/>
        </Fragment>
    );
}

export default ProfilePage;
