import { createSlice } from "@reduxjs/toolkit";

export const RocketReducer = createSlice({
    name: 'rocket',
    initialState: {
        allData: []
    },
    reducers: {
        setAllRocketData: (state, action) => {
            state.allData = [...action.payload];
        }
    }
});

export const { setAllRocketData } = RocketReducer.actions;

export default RocketReducer.reducer;