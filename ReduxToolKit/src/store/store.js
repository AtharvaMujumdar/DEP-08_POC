import {configureStore} from "@reduxjs/toolkit";

import UserReducer from "./UserSlice";
import WorkoutReducer from "./WorkoutSlice"




const store = configureStore({
    reducer : {
        User : UserReducer,
        Workout: WorkoutReducer,
    }
})

export default store;