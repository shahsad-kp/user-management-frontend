import {useEffect, useState} from "react";
import * as React from "react";
import './AdminEditUser.css';
import {useDispatch, useSelector} from "react-redux";
import {addUser, editUser} from "../../redux/usersSlice";
import {useNavigate} from "react-router-dom";
import axiosInstance from "../../api/api";

function AdminEditUser({page, user}) {
    const [profilePicture, setProfilePicture] = useState(null);
    const [fullname, setFullname] = useState(page === 'edit' ? user.name : '');
    const [username, setUsername] = useState(page === 'edit' ? user.username : '');
    const [password, setPassword] = useState('');
    const [fullnameError, setFullnameError] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const dispatch = useDispatch();
    const navigator = useNavigate();
    const loggedUser = useSelector(state => state.user.currentUser)

    useEffect(() => {
        if (loggedUser === null) {
            navigator('/login')
        }
    }, [loggedUser, navigator]);

    const changeFullname = (event) => {
        setFullname(event.target.value);
        setFullnameError('');
    }

    const changeUsername = (event) => {
        setUsername(event.target.value);
        if (event.target.value.length < 5) {
            setUsernameError('Username must be at least 5 characters long');
        } else {
            setUsernameError('');
        }
    }

    const changePassword = (event) => {
        setPassword(event.target.value);
        setPasswordError('');
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        if (fullname.trim() === '' || username.trim() === '' || (password.trim() === '' && page === 'add')) {
            if (fullname.trim() === '') {
                setFullnameError('Fullname is required');
            }
            if (username.trim() === '') {
                setUsernameError('Username is required');
            }
            if (password.trim() === '' && page === 'add') {
                setPasswordError('Password is required');
            }
            console.log('empty')
        } else {
            if (page === 'add') {
                axiosInstance.post(
                    '/users/create/',
                    {
                        name: fullname,
                        username: username,
                        password: password,
                    }
                ).then(response => {
                    dispatch(addUser(response.data));
                    navigator('/admin')
                }).catch(error => {
                    console.log(error);
                })
            } else {
                axiosInstance.put(
                    `/users/update/${user.id}/`,
                    {
                        id: user.id,
                        name: fullname,
                        username: username,
                        password: password,
                    },
                ).then(response => {
                    dispatch(editUser(response.data));
                    navigator('/admin')
                }).catch(error => {
                    console.log(error)
                })
            }
        }
    }

    return (<div className={'add-user'}>
        <form>
            <div className={'form'}>
                <h1>{page === 'edit' ? 'Edit user' : 'Add new user'}</h1>
                <input
                    type="file"
                    id="profile-picture"
                    accept="image/png, image/jpeg"
                    onChange={event => setProfilePicture(event.target.files[0])}
                />
                <img
                    src={profilePicture ? URL.createObjectURL(profilePicture) : 'https://www.w3schools.com/howto/img_avatar.png'}
                    alt={'Profile'}
                    onClick={() => document.getElementById('profile-picture').click()}
                />
                <input
                    type="text"
                    id="fullname"
                    placeholder={'FULL NAME'}
                    value={fullname}
                    onChange={changeFullname}
                    className={fullnameError ? 'error' : ''}
                />
                {fullnameError && <p className={'error-message'}>{fullnameError}</p>}
                <input
                    type="text"
                    id="username"
                    placeholder={'USERNAME'}
                    value={username}
                    onChange={changeUsername}
                    className={usernameError ? 'error' : ''}
                />
                {usernameError && <p className={'error-message'}>{usernameError}</p>}
                <input
                    type="password"
                    id="password"
                    placeholder={'PASSWORD'}
                    value={password}
                    onChange={changePassword}
                    className={passwordError ? 'error' : ''}
                />
                {passwordError && <p className={'error-message'}>{passwordError}</p>}
            </div>
            <div className={'buttons'}>
                <button
                    type="submit"
                    onClick={handleSubmit}
                >{page === 'edit' ? 'Update user' : 'Add New User'}</button>
            </div>
        </form>
    </div>);
}

export default AdminEditUser;
