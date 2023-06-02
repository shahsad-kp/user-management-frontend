import './UsersList.css';
import {useEffect} from "react";
import UserCard from "../UserCard/UserCard";
import person_add_icon from '../../Icons/person_add.svg'
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import axiosInstance from "../../api/api";
import {setUsers} from "../../redux/usersSlice";

function UsersList() {
    const navigator = useNavigate();
    const dispatch = useDispatch();

    const users = useSelector(state => state.users.users);
    const user = useSelector(state => state.user.currentUser);

    useEffect(() => {
        if (user && user.isAdmin) {
            axiosInstance.get(
                `users/`
            ).then(response => {
                dispatch(setUsers(response.data));
            }).catch(error => {
                console.log(error);
            })
        } else {
            navigator('/')
        }
    }, [user, navigator, dispatch]);

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

    const randomColor = () => cardColors[Math.floor(Math.random() * cardColors.length)];

    return (
        <div className={'users-list-body'}>
            <div className={'users-list'}>
                <div className={'new-user'} onClick={() => navigator('new-user')} style={{borderColor: randomColor()}}>
                    <img src={person_add_icon} alt={'Add new user'}/>
                </div>
                {users.map(user => <UserCard key={user.id} user={user} backgroundColor={randomColor()}/>)}
            </div>
        </div>
    );
}

export default UsersList;