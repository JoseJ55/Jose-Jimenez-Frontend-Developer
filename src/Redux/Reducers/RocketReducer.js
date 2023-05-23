import { createSlice } from "@reduxjs/toolkit";

export const RocketReducer = createSlice({
    name: 'rocket',
    initialState: {
        allData: [],
        searchValue: '',
        filterValue: null,
    },
    reducers: {
        setAllRocketData: (state, action) => {
            state.allData = [...action.payload];
        },
        setSearchValue: (state, action) => {
            state.searchValue = action.payload;
        },
        setFilterValue: (state, action) => {
            state.filterValue = action.payload;
        }
    }
});

export const { setAllRocketData, setSearchValue, setFilterValue } = RocketReducer.actions;

export default RocketReducer.reducer;