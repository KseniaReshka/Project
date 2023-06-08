import { createSlice } from "@reduxjs/toolkit";
import cityService from "../services/city.service";
import isOutdated from "../utils/isOutdated";

const citySlice = createSlice({
    name: "city",
    initialState: {
        entities: null,
        isLoading: true,
        error: null,
        lastFetch: null
    },
    reducers: {
        cityRequested: (state) => {
            state.isLoading = true;
        },
        cityReceived: (state, action) => {
            state.entities = action.payload;
            state.lastFetch = Date.now();
            state.isLoading = false;
        },
        cityRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        }
    }
});

const { reducer: cityReducer, actions } = citySlice;
const { cityRequested, cityReceived, cityRequestFailed } =
    actions;

export const loadCitiesList = () => async (dispatch, getState) => {
    const { lastFetch } = getState().city;
     if (isOutdated(lastFetch)) {
        dispatch(cityRequested());
        try {
            const content = await cityService.get();
            dispatch(cityReceived(content));
        } catch (error) {
            dispatch(cityRequestFailed(error.message));
        }
    }
 };

export const getCities = () => (state) => state.city.entities;
export const getCitiesLoadingStatus = () => (state) =>
    state.city.isLoading;
export const getCitiesById = (id) => (state) => {
    if (state.city.entities) {
        return state.city.entities.find((p) => p._id === id);
    }
};

export default cityReducer;
