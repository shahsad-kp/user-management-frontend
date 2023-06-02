import './UserCard.css'
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {deleteUser} from "../../redux/usersSlice";
import axiosInstance, {baseURL, imageBaseUrl} from "../../api/api";

function UserCard({user}) {
    const {username, name, profilePicture} = user;
    const navigator = useNavigate();
    const dispatch = useDispatch()

    const cardColors = [
        '#FFC107', // Amber
        '#4CAF50', // Green
        '#2196F3', // Blue
        '#FF4081', // Pink
        '#9C27B0', // Purple
        '#FF5722', // Deep Orange
        '#00BCD4', // Cyan
        '#FF9800', // Orange
        '#3F51B5', // Indigo
        '#E91E63', // Pink
    ];

    const randomColor = cardColors[Math.floor(Math.random() * cardColors.length)];

    const deleteUserHandler = () => {
        if (!window.confirm(`Are you sure you want to delete ${username}?`)) {
            return;
        }
        axiosInstance.delete(
            `users/delete/${user.id}/`
        ).then(response => {
            dispatch(deleteUser(user.id));
        }).catch(error => {
            console.log(error)
        })
    }

    return (
        <div className={'user-card'} style={{backgroundColor: randomColor}}>
            <img src={imageBaseUrl + profilePicture} alt={username}/>
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