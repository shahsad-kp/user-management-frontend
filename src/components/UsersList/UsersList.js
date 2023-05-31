import './UsersList.css';
import {useState} from "react";
import UserCard from "../UserCard/UserCard";
import person_add_icon from '../../Icons/person_add.svg'

function UsersList() {
    const [users, setUsers] = useState([
        {
            id: 1,
            username: 'john',
            fullName: 'John Doe',
            profilePicture: 'https://i.pravatar.cc/300?img=2'
        },
        {
            id: 2,
            username: 'jane',
            fullName: 'Jane Doe',
            profilePicture: 'https://i.pravatar.cc/300?img=3'
        },
        {
            id: 3,
            username: 'bob',
            fullName: 'Bob Doe',
            profilePicture: 'https://i.pravatar.cc/300?img=4'
        },
        {
            id: 4,
            username: 'jill',
            fullName: 'Jill Doe',
            profilePicture: 'https://i.pravatar.cc/300?img=5'
        },
        {
            id: 5,
            username: 'james',
            fullName: 'James Doe',
            profilePicture: 'https://i.pravatar.cc/300?img=6'
        }
    ]);
    // TODO: Add useEffect hook to fetch users here

    const addUser = () => {
        const newUser = {
            id: 6,
            username: 'newuser',
            fullName: 'New User',
            profilePicture: 'https://i.pravatar.cc/300?img=1'
        };
        setUsers([...users, newUser]);

        // TODO: Add POST request to add user here
    }

    return (
        <div className={'users-list-body'}>
            <h1>Users</h1>
            <div className={'users-list'}>
                <div className={'new-user'} onClick={addUser}>
                    <img src={person_add_icon} alt={'Add new user'}/>
                </div>
                {users.map(user => <UserCard key={user.id} user={user}/>)}
            </div>
        </div>
    );
}

export default UsersList;