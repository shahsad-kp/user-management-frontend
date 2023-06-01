import './UserCard.css'
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {deleteUser} from "../../redux/usersSlice";

function UserCard({user}) {
    const {username, name, profilePicture} = user;
    const navigator = useNavigate();
    const dispatch = useDispatch()

    const deleteUserHandler = () => {
        if (!window.confirm(`Are you sure you want to delete ${username}?`)) {
            return;
        }
        dispatch(deleteUser(user.id))
        // TODO: Delete user from database
    }

    return (
        <div className={'user-card'}>
            <img src={profilePicture} alt={username}/>
            <div className={'user-info'}>
                <h3>@{username}</h3>
                <p>{name}</p>
            </div>
            <div className={'user-actions'}>
                <button onClick={() => navigator(`edit-user?user=${user.id}`)}>Edit</button>
                <button onClick={deleteUserHandler}>Delete</button>
            </div>
        </div>
    );
}

export default UserCard;