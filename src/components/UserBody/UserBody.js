import './UserBody.css'
import {useSelector} from "react-redux";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

function UserBody() {
    const user = useSelector(state => state.user.currentUser);
    const navigator = useNavigate();

    useEffect(() => {
        if (user === null){
            navigator('/login');
        }
    }, [user, navigator]);

    return (
        <div className={'user-body'}>
            <h1>Welcome {user ? user.name : ''}</h1>
        </div>
    );
}

export default UserBody;
