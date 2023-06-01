import {useState} from "react";
import * as React from "react";
import './AdminEditUser.css';

function AdminEditUser({page, user}) {
    const [profilePicture, setProfilePicture] = useState(null);
    const [fullname, setFullname] = useState(page === 'edit' ? user.fullName : '');
    const [username, setUsername] = useState(page === 'edit' ? user.username : '');
    const [password, setPassword] = useState(page === 'edit' ? user.password : '');
    const [fullnameError, setFullnameError] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');

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
        if (fullname.trim() === '' || username.trim() === '' || password.trim() === '') {
            if (fullname.trim() === '') {
                setFullnameError('Fullname is required');
            }
            if (username.trim() === '') {
                setUsernameError('Username is required');
            }
            if (password.trim() === '') {
                setPasswordError('Password is required');
            }

        } else {
            // TODO: Add new user to database or edit user
        }
    }

    return (
        <div className={'add-user'}>
            <form>
                <div className={'form'}>
                    <h1>Add new user</h1>
                    <input
                        type="file"
                        id="profile-picture"
                        accept="image/png, image/jpeg"
                        onChange={event => setProfilePicture(event.target.files[0])}
                    />
                    <img
                        src={profilePicture? URL.createObjectURL(profilePicture) : 'https://www.w3schools.com/howto/img_avatar.png'}
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
                    <button type="submit" onClick={handleSubmit}>Add New User</button>
                </div>
            </form>
        </div>
    );
}

export default AdminEditUser;
