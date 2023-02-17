import React from "react";
import { useParams } from "react-router-dom";
import IntrestComp from "../components/IntrestComp";
import {Intrest} from "../Data/Intrest"
import "../page-css/IntrestDetail.css"

export default function IntrestDetail() {

const { id } = useParams();


const {Name,Follow,Img} =  Intrest.find( (e) => e.id === id)



  return (
    <div className="home">
      <div className="left">
        <IntrestComp />
      </div>

      <div className="middle">
        <div className="IBOX">

          <div className="I1">
            <img src={Img} alt="net slow"  />
          </div>

          <div className="I2">
            <div className="IName">{Name}</div>
            <div className="IFollow"><button> <i className="fa-regular fa-square-plus"></i> Follow {Follow} </button><div><i className="fa-solid fa-ellipsis"></i></div></div>
          </div>

        </div>
      </div>

      <div className="right"></div>
    </div>
  );
}
