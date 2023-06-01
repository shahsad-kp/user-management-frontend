import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    users: []
}


const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers(state, action) {
            state.users = action.payload;
        },
        editUser(state, action) {
            const {id, name, username, profilePicture} = action.payload;
            const user = state.users.find(user => user.id === id);
            if (user) {
                user.name = name;
                user.username = username;
                user.profilePicture = profilePicture;
            }
        },
        deleteUser(state, action) {
            const id = action.payload;
            state.users = state.users.filter(user => user.id !== id);
        },
        addUser(state, action) {
            state.users.push(action.payload);
        }
    }
});


export default usersSlice.reducer;
export const {setUsers, editUser, deleteUser, addUser} = usersSlice.actions;
