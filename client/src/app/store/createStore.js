import { combineReducers, configureStore } from "@reduxjs/toolkit";
import qualitiesReducer from "./qualities";
import professionsReducer from "./professions";
import usersReducer from "./users";
import commentsReducer from "./comments";
import cityReducer from "./cities";
import eventReducer from "./events";
import holidayReducer from "./holiday";

const rootReducer = combineReducers({
    qualities: qualitiesReducer,
    city: cityReducer,
    professions: professionsReducer,
    users: usersReducer,
    comments: commentsReducer,
    event: eventReducer,
    holiday: holidayReducer
});

export function createStore() {
    return configureStore({
        reducer: rootReducer
    });
}
