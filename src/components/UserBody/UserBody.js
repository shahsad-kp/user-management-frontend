import './UserBody.css'
import {useSelector} from "react-redux";

function UserBody() {
    const user = useSelector(state => state.user.currentUser);

    return (
        <div className={'user-body'}>
            <h1>Welcome {user.name}</h1>
        </div>
    );
}

export default UserBody;
