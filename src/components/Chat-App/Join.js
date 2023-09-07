import React, { useState } from "react";
import "./Join.css";
import logo from './favicon.png';
import { NavLink } from "react-router-dom";

let user ;
function Join() {
    const [name, setname] = useState('')

    const sendUser = ()=>{
        user = document.getElementById('joininput').value;
        document.getElementById('joininput').value = " ";

    }
  return (
    <div className="joinPage">
      <div className="Container">
        <img  src={logo} />
        <h1> Chat Application  </h1>
        <input onChange={(e)=> setname(e.target.value)} type="text" name="" id="joininput" />
        <NavLink to='/Chat' onClick={(e)=> !name ?e.preventDefault():null}><button onClick={sendUser} className="btn"> Login </button></NavLink> 
      </div>
    </div>
  );
}

export default Join;
export {user}