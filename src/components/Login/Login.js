import * as React from 'react';
import "./Login.css"
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loginUser} from "../../redux/userSlice";
import axios from "axios";
import {baseURL} from "../../api/api";


function Login() {
    const navigator = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.currentUser);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (username.trim() === '' || password.trim() === '') {
            if (username.trim() === '') {
                setUsernameError('Username is required');
            }
            if (password.trim() === '') {
                setPasswordError('Password is required');
            }

        } else {
            axios.post(
                `${baseURL}login/`,
                {
                    username,
                    password
                }
            ).then((response) => {
                const user = response.data.user;
                localStorage.setItem('accessToken', response.data.access)
                localStorage.setItem('refreshToken', response.data.refresh)
                dispatch(loginUser({user}));
                navigator('/');
            }).catch((error) => {
                if (error.response.status === 400){
                    setPasswordError('Username or password is incorrect');
                    setPassword('');
                }
                else{
                    setPasswordError('Something went wrong')
                }
            })
        }
    }

    useEffect(() => {
        if (user !== null) {
            navigator('/');
        }
    }, [user, navigator]);


    const updateUsername = (event) => {
        setUsername(event.target.value);
        setUsernameError('');
    }

    const updatePassword = (event) => {
        setPassword(event.target.value);
        setPasswordError('');
    }


    return (
        <div className={'login'}>
            <form>
                <div className={'form'}>
                    <h1>Login</h1>
                    <input
                        type="text"
                        id="username"
                        placeholder={'USERNAME'}
                        value={username}
                        onChange={updateUsername}
                        className={usernameError ? 'error' : ''}
                    />
                    {usernameError && <p className={'error-message'}>{usernameError}</p>}
                    <input
                        type="password"
                        id="password"
                        placeholder={'PASSWORD'}
                        value={password}
                        onChange={updatePassword}
                        className={passwordError ? 'error' : ''}
                    />
                    {passwordError && <p className={'error-message'}>{passwordError}</p>}
                </div>
                <div className={'buttons'}>
                    <button
                        type="button"
                        onClick={() => navigator('/register/')
                    }>Register</button>
                    <button
                        type="submit"
                        onClick={handleSubmit}
                    >Login</button>
                </div>
            </form>
        </div>
    );
}

export default Login;
