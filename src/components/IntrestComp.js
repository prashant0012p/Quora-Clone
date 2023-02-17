
import React from "react";
import { NavLink } from "react-router-dom";
import { Intrest } from "../Data/Intrest";
import "../components-cs/IntrestComp.css"

export default function IntrestComp() {
    return (
      <div className="IntrestBox">
        <div className="cp">
          <div>
            <i className="fa-solid fa-plus"></i>
          </div>
          <div>CreateSpace</div>
        </div>
  
        {Intrest.map((e) => {
 
       let url = `/intrestdetail/${e.id}`
          
       return(   <NavLink to={url} className="IntrestCard" key={e.id} >
            <div className="IntrestImgBox">
              <img src={e.Img} alt="slow net" />
            </div>
  
            <div className="IntrestNameBox">
              <p>{e.Name}</p>
            </div>
          </NavLink>
       )   
})}
  
        <NavLink className="Linkh">-Careers</NavLink>
        <NavLink className="Linkh">-Terms</NavLink>
        <NavLink className="Linkh">-Privacy</NavLink>
        <NavLink className="Linkh">-Acceptable Use</NavLink>
        <NavLink className="Linkh">-Businesses</NavLink>
        <NavLink className="Linkh">-Press</NavLink>
        <NavLink className="Linkh">-Your Ad Choice</NavLink>
        <NavLink className="Linkh">-Grievance Officer</NavLink>
      </div>
    );
  }
  