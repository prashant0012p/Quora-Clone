import React from "react";
import IntrestComp from "../components/IntrestComp";
import "../page-css/Follow.css";
import { SpaceData } from "../Data/SpaceData";

export default function Follow() {
  return (
    <div className="home" id="homei">
      <div className="left" id="lefti">
        <IntrestComp />
      </div>

      <div className="middle" id="middlei">
        <div className="imgbox">
          <img
            src="https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.empty_states.all_caught_up_feed_lightmode.png-26-1b95f406729630f5.png"
            alt="no network"
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h4>Build your new following feed</h4>
          <p>Build your new following feed</p>
        </div>

        <div className="spacebox">
          <h4>Discover Spaces</h4>
          <p>Spaces You Might Like</p>

          {SpaceData.map((e) => (
            <div className="spacecard">

            <div className="sp1"><img   src={e.logo} alt="net slow"/></div>  

            <div className="sp2">
             <p className="fw-bolder" >{e.name}</p>
             <p className="text-secondary">{e.followers}</p> 
             <p>{e.decription}</p>
            </div>    

           
            </div>
          ))}
        </div>


      </div>

      <div className="right" id="righti"></div>
    </div>
  );
}
