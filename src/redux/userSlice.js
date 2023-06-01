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
        },
    }
})

export default userSlice.reducer;
export const {loginUser, logoutUser} = userSlice.actions;
