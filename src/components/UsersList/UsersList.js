import './UsersList.css';
import {useEffect} from "react";
import UserCard from "../UserCard/UserCard";
import person_add_icon from '../../Icons/person_add.svg'
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchUsers} from "../../redux/usersSlice";

function UsersList() {
    const navigator = useNavigate();
    const dispatch = useDispatch();

    const users = useSelector(state => state.users.users);

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);


    return (
        <div className={'users-list-body'}>
            <h1>Users</h1>
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