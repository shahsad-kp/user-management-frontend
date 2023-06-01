import {useNavigate, useSearchParams} from "react-router-dom";
import {Fragment, useEffect, useState} from "react";
import {AdminEditUser, Navbar} from "../components";
import {useSelector} from "react-redux";

function AdminEditUserPage() {
    const [searchParams, setSearchParams] = useSearchParams()
    const userId = searchParams.get('user');
    const [user, setUser] = useState(null);
    const navigator = useNavigate();
    const users = useSelector(state => state.users.users);

    useEffect(() => {
        if (!userId) {
            return navigator('/admin');
        }
        users.forEach(user => {

            if (user.id === parseInt(userId)) {
                setUser(user);
            }
        })
    }, [navigator, userId, users]);

    return (
        <Fragment>
            <Navbar page={'edit'}/>
            {user && <AdminEditUser page={'edit'} user={user}/>}
        </Fragment>
    );
}

export default AdminEditUserPage;