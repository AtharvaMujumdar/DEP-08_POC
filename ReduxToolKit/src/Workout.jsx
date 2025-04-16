import {useState,useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {logout} from "./store/UserSlice";
import { addWorkout,cancelWorkout,logoutWorkout } from "./store/WorkoutSlice";
import store from "./store/store";
import { useDispatch, useSelector } from "react-redux";
import "./Workout.css";

const alldata = [{id:1,name:"Workout1"},{id:2,name:"Workout2"},{id:3,name:"Workout3"}];

function Workout(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const [workouts, setWorkouts] = useState([]);
    const user = useSelector((state)=>state.User);
    const workouts = useSelector((state) => state.Workout)
    // useEffect(()=>{
        

    // },[user])
   
    const handleLogout = ()=>{
         dispatch(logout());
         dispatch(logoutWorkout());
         navigate("/");
    }
    const handleLogIn = ()=>{
        navigate("/");
    }
    
    return(
        <>
        <header>
            {
                user ? <><h1>{`Hello ${user.name}!!`}</h1> <button onClick={handleLogout}>Log Out</button></> :<> <h1>Welcome!!</h1> <button onClick={handleLogIn}>Log In</button> </>
            }
        </header>

        <h1>Available Workouts</h1>
        <ul> 
        {
            user ? alldata.map((data)=>(
                
                <li key={data.id}>
                     {data.name}
                     <button onClick={(e)=>{
                          e.preventDefault();
                          dispatch(addWorkout(data));
                     }}>Add</button>
                </li>
                
            ))  : <p>Login first</p>
        }
        </ul>
        

        <h1>Booked Workouts</h1>
        <ul>
           {
               workouts ? workouts.map((workout) => (
                       <li key={workout.id}>
                            {workout.name}
                            <button onClick={(e)=>{
                                e.preventDefault();
                                dispatch(cancelWorkout(workout.id));
                            }} > Cancel</button>
                       </li>
               )) : <p>No Workouts Booked</p>
           }
        </ul>

        </>
    )
}

export default Workout;