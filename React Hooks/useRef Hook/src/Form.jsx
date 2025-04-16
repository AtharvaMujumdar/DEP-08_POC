import React from "react";
import { useState } from "react";
import {useRef} from "react";

function Home(){
    const dataRef = useRef({id:"",name:"",email:""});
    const [data,setData] = useState([]);

    const idref = useRef(null);
    const nameref = useRef(null);
    const emailref=useRef(null);
    
    const handleIdChange = (e)=>{
        idref.current.value = e.target.value;
    }
    const handleNameChange = (e)=>{
        nameref.current.value= e.target.value;
    }
    const handleEmailChange = (e)=>{
       emailref.current.value = e.target.value;
    }
   
    const handleSubmit = ()=>{

        setData((prev)=>[...prev,{id:idref.current.value,name:nameref.current.value,email:emailref.current.value}]);
        
        emailref.current.value ="";
        nameref.current.value="";
        idref.current.value="";

    }
    

    return( 
        
       <>

        
       <input type="text" onChange={handleIdChange} placeholder="Enter ID" ref={idref} /> 
       <input type="text" onChange={handleNameChange} placeholder="Enter Name" ref={nameref}/>
       <input type="email" onChange={handleEmailChange} placeholder="Enter Email" ref={emailref}/>
       <button type="submit" onClick={handleSubmit}>Submit</button>
       <ul>
          {
              data.map((user)=>(
                  <li key={user.id}>{user.name} {user.email}</li>
              ))
          }
       </ul>
       
       </> 
    )
}

export default Home;