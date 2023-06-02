import * as React from 'react';
import "./UserProfile.css"
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import axiosInstance from "../../api/api";
import {editUser} from "../../redux/usersSlice";

function UserProfile() {
    const [profilePicture, setProfilePicture] = useState(null);
    const [fullname, setFullname] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');


    const [usernameError, setUsernameError] = useState('');
    const [repeatPasswordError, setRepeatPasswordError] = useState('');

    const navigator = useNavigate()
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.currentUser)

    useEffect(() => {
        if (user == null) {
            navigator('/login/')
        }
    }, [user, navigator]);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (password !== repeatPassword) {
            setRepeatPasswordError('Passwords do not match');
        } else {
            const formData = new FormData()
            formData.append('id', user.id)
            formData.append('name', fullname);
            formData.append('username', username);
            formData.append('password', password);
            formData.append('profilePicture', profilePicture)
            axiosInstance.put(
                '/users/update/',
                formData
            ).then(response => {
                dispatch(editUser(response.data));
                navigator('/admin')
            }).catch(error => {
                console.log(localStorage.getItem('accessToken'))
            })
        }
    }

    const updateRepeatPassword = (event) => {
        setRepeatPassword(event.target.value);
        if (password !== event.target.value) {
            setRepeatPasswordError('Passwords do not match');
        } else {
            setRepeatPasswordError('');
        }
    }

    const updatePassword = (event) => {
        setPassword(event.target.value);
        if (repeatPassword !== event.target.value) {
            setRepeatPasswordError('Passwords do not match');
        } else {
            setRepeatPasswordError('');
        }
    }

    const validateUsername = (event) => {
        setUsername(event.target.value);
        if (event.target.value !== '' && event.target.value.length < 5) {
            setUsernameError('Username must be at least 5 characters long');
        } else {
            setUsernameError('');
        }
    }

    return (<div className={'update-profile'}>
        <form>
            <div className={'form'}>
                <h1>Update Profile</h1>
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
                    onChange={event => setFullname(event.target.value)}
                />
                <input
                    type="text"
                    id="username"
                    placeholder={'USERNAME'}
                    value={username}
                    onChange={validateUsername}
                    className={usernameError ? 'error' : ''}
                />
                {usernameError && <p className={'error-message'}>{usernameError}</p>}
                <input
                    type="password"
                    id="password"
                    placeholder={'PASSWORD'}
                    value={password}
                    onChange={updatePassword}
                />
                <input
                    type="password"
                    id="repeat-password"
                    placeholder={'REPEAT PASSWORD'}
                    value={repeatPassword}
                    onChange={updateRepeatPassword}
                    className={repeatPasswordError ? 'error' : ''}
                />
                {repeatPasswordError && <p className={'error-message'}>{repeatPasswordError}</p>}
            </div>
            <div className={'buttons'}>
                <button type="submit" onClick={handleSubmit}>Update Profile</button>
            </div>
        </form>
    </div>);
}

export default UserProfile;