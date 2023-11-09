import React, { useContext } from "react";
import Avatar from "@mui/material/Avatar";
import "./Header.css";
import { LoginContext } from "./ContextProvider/Context";




function Header() {
  const { loginData, setloginData } = useContext(LoginContext);
  // console.log(loginData)



  return (
    <div style={{background:'#fff'}}>
      <header>
        <nav>
          <h1>Strugbits Cloud</h1>
          <div className="avatar">
            {
              loginData?.validuserOne ? <Avatar style={{ backgroundColor: 'black', fontWeight: 'bold', textTransform: 'capitalize' }}>{loginData?.validuserOne.fname[0].toUpperCase()} </Avatar> :
                <Avatar style={{ backgroundColor: 'black' }} 
               
                />
            }

          </div>
          

        </nav>
      </header>
    </div>
  );
}

export default Header;
