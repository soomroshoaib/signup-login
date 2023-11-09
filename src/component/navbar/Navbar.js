import React from "react";
import Logo from "../../image/Logo.webp";
import { Link } from "react-scroll";
import "./Navbar.css";
import { useState } from "react";
import Manu from '../../image/manublack.jpg';

 const Navbar = () => {
  const [showManu, setshowmanu] = useState( false)
  return (
    <nav className="nav_bar">
      <img src={Logo} alt="logo " className="logo" />

      <div className="desktopmanu">
        <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="desktopmanuitem">Home</Link>
        <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className="desktopmanuitem">About</Link>
        <Link activeClass="active" to="Works" spy={true} smooth={true} offset={-50} duration={500} className="desktopmanuitem">Portfolio</Link>
        <Link activeClass="active" to="Client" spy={true} smooth={true} offset={-50} duration={500} className="desktopmanuitem">Clients</Link>
      </div>
      <button className="desktopmanubtn" onClick={() => {
        document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
      }}>
        <img className="desktopmanuimg" /> Contact me
      </button>  

      <img src={Manu} alt="manu" className="logo1" onClick={()=>{setshowmanu(!showManu)}} />

      <div className="mobmanu" style={{display: showManu? 'flex':'none'}} >
        <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setshowmanu(false)}>Home</Link>
        <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setshowmanu(false)}>About</Link>
        <Link activeClass="active" to="Works" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setshowmanu(false)}>Portfolio</Link>
        <Link activeClass="active" to="Client" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setshowmanu(false)}>Clients</Link>
        <Link activeClass="active" to="Contact" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setshowmanu(false)}>Contact</Link>
      </div>
    </nav>
  );
};


export default Navbar