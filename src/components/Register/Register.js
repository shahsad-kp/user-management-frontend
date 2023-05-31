import * as React from 'react';
import "./Register.css"
import {useNavigate} from "react-router-dom";
import {useState} from "react";

function Register() {
    const navigator = useNavigate();
    const [fullname, setFullname] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');


    const [fullnameError, setFullnameError] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [repeatPasswordError, setRepeatPasswordError] = useState('');

    const changeFullname = (event) => {
        setFullname(event.target.value);
        setFullnameError('');
    }

    const changeUsername = (event) => {
        setUsername(event.target.value);
        setUsernameError('');
    }

    const changePassword = (event) => {
        setPassword(event.target.value);
        setPasswordError('');
    }

    const changeRepeatPassword = (event) => {
        setRepeatPassword(event.target.value);
        setRepeatPasswordError('');
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (fullname.trim() === '' || username.trim() === '' || password.trim() === '' || repeatPassword.trim() === '') {
            if (fullname.trim() === '') {
                setFullnameError('Fullname is required');
            }
            if (username.trim() === '') {
                setUsernameError('Username is required');
            }
            if (password.trim() === '') {
                setPasswordError('Password is required');
            }
            if (repeatPassword.trim() === '') {
                setRepeatPasswordError('Repeat password is required');
            }
        } else if (password !== repeatPassword) {
                setRepeatPasswordError('Passwords do not match');
        }
    }

    return (
        <div className={'register'}>
            <form>
                <div className={'form'}>
                    <h1>Register</h1>
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
                    <input
                        type="password"
                        id="repeat-password"
                        placeholder={'REPEAT PASSWORD'}
                        value={repeatPassword}
                        onChange={changeRepeatPassword}
                        className={repeatPasswordError ? 'error' : ''}
                    />
                    {repeatPasswordError && <p className={'error-message'}>{repeatPasswordError}</p>}
                </div>
                <div className={'buttons'}>
                    <button type="submit" onClick={handleSubmit}>Register</button>
                    <button type="button" onClick={() => navigator('/login/')}>Login</button>
                </div>
            </form>
        </div>
    );
}

export default Register;