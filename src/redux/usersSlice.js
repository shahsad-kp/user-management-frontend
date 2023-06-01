import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    users: [],
    loading: false,
}

const fetchUsers =  createAsyncThunk('users/fetchUsers', async () => {
    return axios.get('https://jsonplaceholder.typicode.com/users').then(res => res.data);
});

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
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
    },
    extraReducers: {
        [fetchUsers.pending]: (state, action) => {
            state.loading = true;
        },
        [fetchUsers.fulfilled]: (state, action) => {
            state.loading = false;
            state.users = action.payload;
        },
        [fetchUsers.rejected]: (state, action) => {
            state.loading = false;
            state.users = [];
        }
    }
});


export default usersSlice.reducer;
export {fetchUsers};
export const {editUser, deleteUser, addUser} = usersSlice.actions;
