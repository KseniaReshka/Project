import { createSlice } from "@reduxjs/toolkit";
import holidayService from "../services/holiday.service";
import localStorageService from "../services/localStorage.service";

const initialState = localStorageService.getAccessToken()
    ? {
          entities: null,
          isLoading: true,
          error: null,
          isLoggedIn: true,
          dataLoaded: false
      }
    : {
          entities: null,
          isLoading: false,
          error: null,
          isLoggedIn: false,
          dataLoaded: false
      };

const holidaySlice = createSlice({
    name: "holiday",
    initialState,
    reducers: {
        holidayRequested: (state) => {
            state.isLoading = true;
        },
        holidayReceived: (state, action) => {
            state.entities = action.payload;
            state.dataLoaded = true;
            state.isLoading = false;
        },
        holidayRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        }
    }
});

const { reducer: holidayReducer, actions } = holidaySlice;
const {
  holidayRequested,
  holidayReceived,
  holidayRequestFailed
  } = actions;

export const loadHolidayList = () => async (dispatch, getState) => {
    dispatch(holidayRequested());
    try {
        const content = await holidayService.get();
        dispatch(holidayReceived(content));
    } catch (error) {
        dispatch(holidayRequestFailed(error.message));
    }
};

export const getholidayList = () => (state) => state.holiday.entities;
export const getHolidaisData = () => (state) => {
    return state.holiday.entities
        ? state.holiday.entities.find((u) => u._id === state.holiday.auth.userId)
        : null;
};
export const getHolidayById = (userId) => (state) => {
    if (state.holiday.entities) {
        return state.holiday.entities.find((u) => u._id === userId);
    }
};

export default holidayReducer;
