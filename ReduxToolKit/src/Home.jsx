import { useState  } from "react";
import {useNavigate} from "react-router-dom"
import {login, logout} from "./store/UserSlice";
import {useDispatch, useSelector} from "react-redux";
import store from "./store/store";

export default function Home(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");

    const handleFormSubmit = (e)=>{
         e.preventDefault();
         dispatch(login({name: name, email: email}));
        navigate("/workout");
    }
    
    return (
        <>
         
         <form onSubmit={handleFormSubmit}>
            <input onChange={(e)=>setName(e.target.value)} type="text" name="name" placeholder="Enter Name" autoComplete="off" autoCorrect="off" />
            <input onChange={(e)=>setEmail(e.target.value)} type="email" name="email" placeholder="Enter Email" autoComplete="off" autoCorrect="off" />
            <button type="submit">Log in</button>
         </form>

        </>
    )
}