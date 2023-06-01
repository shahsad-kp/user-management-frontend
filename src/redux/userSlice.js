import {createSlice} from "@reduxjs/toolkit";

const accessToken = 'accessToken';
const refreshToken = 'refreshToken';

const initialState = {
    currentUser: null,
}


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginUser: (state, action) => {
            state.currentUser = action.payload.user;
        },
        logoutUser: (state) =>{
            state.currentUser = null;
            localStorage.removeItem(accessToken);
            localStorage.removeItem(refreshToken)
        },
        updateUser: (state, action)=> {
            const {name, username, password, profilePicture} = action.payload;
            state.currentUser.name = name;
            state.currentUser.username = username;
            state.currentUser.password = password;
            state.currentUser.profilePicture = profilePicture;
        }
    },
    extraReducers: {
        ['users/editUser']: (state, action) => {
            const {id, name, username, profilePicture} = action.payload;
            if (state.currentUser.id === id) {
                state.currentUser.name = name;
                state.currentUser.username = username;
                state.currentUser.profilePicture = profilePicture;
            }
        }
    }
})

export default userSlice.reducer;
export const {loginUser, logoutUser, updateUser} = userSlice.actions;
