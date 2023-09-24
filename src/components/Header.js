import { LOGO_URL } from "../utills/constant";
import { useState } from "react";



const Header = () => {
     
    const [btnName,setBtnName ]=useState("Login")

    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
          />
        </div>
        <div className="nav-item">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <button className="btn-login" onClick={()=>{
             btnName==="Login"? setBtnName("Logout"):setBtnName("Login")
             
            }}>{btnName }</button>
          </ul>
        </div>
      </div>
    );
  };
  
  export default Header;