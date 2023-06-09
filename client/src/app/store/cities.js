import { createAction, createSlice } from "@reduxjs/toolkit";
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
        },
        cityCreated: (state, action) => {
            // if (!Array.isArray(state.entities)) {
            //     state.entities = [];
            // }
            state.entities.push(action.payload);
        },
        cityRemoved: (state, action) => {
            state.entities.filter((c) => c.id !== action.payload);
        }
        // cityUpdate: (state, action) => {
        //     state.entities[
        //         state.entities.findIndex((u) => u._id === action.payload._id)
        //     ] = action.payload;
        // }
    }
});

const { reducer: cityReducer, actions } = citySlice;
const { cityRequested, cityReceived, cityRequestFailed, cityCreated, cityRemoved } =
    actions;
const cityCreateRequested = createAction("city/cityCreateRequested");
const removeCityRequested = createAction("city/removeCityRequested");
const createCityFailed = createAction("City/createCityFailed");
const removeCityFailed = createAction("City/removeCityFailed");

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

 export const createCity = (payload) => async (dispatch) => {
        dispatch(cityCreateRequested());
        try {
            const content = await cityService.create(payload);
            dispatch(cityCreated(content));
            history.push("/city");
        } catch (error) {
            dispatch(createCityFailed(error.message));
        }
    };

export const removeCity = (cityId) => async (dispatch) => {
    dispatch(removeCityRequested());
    try {
        const city = await cityService.remove(cityId);
        dispatch(cityRemoved(city));
    } catch (error) {
        dispatch(removeCityFailed(error.message));
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
