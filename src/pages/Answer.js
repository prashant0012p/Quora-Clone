import React from "react";
import Question from "../components/Question";
import "../page-css/Answer.css"

export default function Answer() {
  return (
    <div className="home" id="homei">
      <div className="left" id="lefti">

        <div className="Questions">
         
         <div className="Q1">
          <p>Questions</p>
         </div> 


          <div className="Q2">
            <p>Question for you</p>
            <p>Answer requests</p>
            <p>Drafts</p>
          </div>

        </div>

      </div>

      <div className="middle" id="middlei"><Question/></div>

      <div className="right" id="righti"></div>
    </div>
  );
}
