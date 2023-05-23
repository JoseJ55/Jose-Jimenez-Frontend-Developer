import { createSlice } from "@reduxjs/toolkit";

export const RocketReducer = createSlice({
    name: 'rocket',
    initialState: {
        allData: [], // All Data is for all the data fetch from teh API.
        currentData: [], // Current Data is the data currently changed my filter and search.
        searchValue: '',
        filterValue: null,
        currentItem: null,
    },
    reducers: {
        setAllRocketData: (state, action) => {
            state.allData = [...action.payload];
            state.currentData = [...action.payload];
        },
        setCurrentData: (state, action) => {
            state.currentData = [...action.payload];
        },
        setSearchValue: (state, action) => {
            state.searchValue = action.payload;
        },
        setFilterValue: (state, action) => {
            state.filterValue = action.payload;
        },
        setCurrentItem: (state, action) => {
            state.currentItem = action.payload;
        }
    }
});

export const { setAllRocketData, setCurrentData, setSearchValue, setFilterValue, setCurrentItem } = RocketReducer.actions;

export default RocketReducer.reducer;