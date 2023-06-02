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


    return (
        <div className={'users-list-body'}>
            <div className={'users-list'}>
                <div className={'new-user'} onClick={() => navigator('new-user')}>
                    <img src={person_add_icon} alt={'Add new user'}/>
                </div>
                {users.map(user => <UserCard key={user.id} user={user}/>)}
            </div>
        </div>
    );
}

export default UsersList;