import React from "react";

import { DiscoverSpace } from "../Data/DiscoveSpace";

import "../page-css/Space.css";

export default function Spaces() {
  return (
    <div className="home" id="homei">
      <div className="left" id="lefti"></div>

      <div className="middle" id="middlei">


        <div className="DS">
          <h5>Discover Spaces</h5>
          <p>Spaces you might like</p>
        </div>

        <div className="DisSpace">

          {DiscoverSpace.map((e) => (

            <div className="DisCard">

              <div className="Dis1">
                <img  src={e.CoverImg} alt="net slow" />
              </div>

              <div className="Dis2">

                <div className="Dis21">
                  {" "}
                  <img style={{width:"30%",marginTop:"-30px"}} src={e.Logo} alt="net slow" />{" "}
                </div>

                <div className="Dis22">
                  {" "}
                  <h7 className="fw-bold    ">{e.Title}</h7>
                  <p>{e.Description}</p>{" "}
                </div>


              </div>

            </div>

          ))}

        </div>


      </div>

      <div className="right" id="righti"></div>
    </div>
  );
}
