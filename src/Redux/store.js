import { configureStore } from "@reduxjs/toolkit";

import RocketReducer from "./Reducers/RocketReducer";

export default configureStore({
    reducer: {
        rocket: RocketReducer,
    }
});