import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    users: [],
    loading: false,
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        getUsersStart(state) {
            state.loading = true;
        },
        getUsersSuccess(state, action) {
            state.users = action.payload;
            state.loading = false;
        },
        getUsersFailure(state) {
            state.loading = false;
        }
    }
});

export default usersSlice.reducer;
export const {getUsersStart, getUsersSuccess, getUsersFailure} = usersSlice.actions;
