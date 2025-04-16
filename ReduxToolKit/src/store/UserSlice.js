import {createSlice} from "@reduxjs/toolkit";

const initialState = null;
const UserSlice = createSlice({
    name: "User",
    initialState,
    reducers : {
        login: (state,action) => {
            return action.payload;
        },
        logout: (state,_action) =>{
             return null;
        }
    }
}) 

export default UserSlice.reducer;
export const {login,logout} = UserSlice.actions;