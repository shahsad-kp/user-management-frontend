import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    currentUser: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducer: {
        loginUser(state, action) {
            state.currentUser = action.payload;
        },
        logoutUser(state) {
            state.currentUser = null;
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
export const {loginUser, logoutUser} = userSlice.actions;
