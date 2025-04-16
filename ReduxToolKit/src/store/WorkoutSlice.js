import {createSlice} from "@reduxjs/toolkit";


const initialState = [];

const WorkoutSlice = createSlice({
    name: "Workout",
    initialState,
    reducers: {
        addWorkout : (state,action) =>{
            state.push(action.payload);
        },
        cancelWorkout : (state,action) => {
            return state.filter(workout => workout.id !== action.payload);
        },
        logoutWorkout : (state,action) =>{
            return [];
        }
    }
})


export default WorkoutSlice.reducer;
export const {addWorkout,cancelWorkout,logoutWorkout} = WorkoutSlice.actions;