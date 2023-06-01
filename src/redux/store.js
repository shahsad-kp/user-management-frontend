import {configureStore} from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import usersReducer from "./usersSlice";
import userReducer from "./userSlice";

const persistConfig={
    key:'root',
    storage
}

export const store = configureStore({
    reducer: {
        users: persistReducer(persistConfig, usersReducer),
        user: persistReducer(persistConfig, userReducer)
    }
})

export const PersistStore = persistStore(store);
