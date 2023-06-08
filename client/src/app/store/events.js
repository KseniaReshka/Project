import { createSlice } from "@reduxjs/toolkit";
import eventService from "../services/event.service";
import isOutdated from "../utils/isOutdated";

const eventSlice = createSlice({
    name: "event",
    initialState: {
        entities: null,
        isLoading: true,
        error: null,
        lastFetch: null
    },
    reducers: {
        eventRequested: (state) => {
            state.isLoading = true;
        },
        eventReceived: (state, action) => {
            state.entities = action.payload;
            state.lastFetch = Date.now();
            state.isLoading = false;
        },
        eventRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        }
    }
});

const { reducer: eventReducer, actions } = eventSlice;
const { eventRequested, eventReceived, eventRequestFailed } =
    actions;

export const loadeventList = () => async (dispatch, getState) => {
    const { lastFetch } = getState().event;
    if (isOutdated(lastFetch)) {
        dispatch(eventRequested());
        try {
            const content = await eventService.get();
            dispatch(eventReceived(content));
        } catch (error) {
            dispatch(eventRequestFailed(error.message));
        }
    }
};

export const getevent = () => (state) => state.event.entities;
export const geteventLoadingStatus = () => (state) =>
    state.event.isLoading;
export const getEventById = (eventsIds) => (state) => {
    if (state.event.entities) {
        if (eventsIds) {
        const eventsArray = [];
        for (const eventId of eventsIds) {
            for (const event of state.event.entities) {
                if (event.name === eventId) {
                    eventsArray.push(event);
                    break;
                }
            }
        }
        return eventsArray;
    }
    }
    return [];
};

export default eventReducer;
