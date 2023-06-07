import "../components-cs/PostComp.css";
import React from "react";
import { usePostData } from "../CreateContext/PostContext";

export default function PostComp() {

  
  let { postData } = usePostData();

 console.log(postData)

  return (
    <div className="PostMain">
      {postData.map((e) => (
        <div className="PostCard" key={e.Id}>
          <div className="P1">
            <div className="P11">
              <img src={e.Profile} alt="net slow" />
            </div>

            <div className="P12">
              <div className="fw-bolder">{e.Name}</div>
              <div>{e.About}</div>
            </div>
          </div>

          <div className="P2">{e.Info}</div>

          <div className="P3">
            <img
              src={e.Post}
              alt="net slow"
            />
          </div>

          <div className="P4">
            <div className="P4B">
              <button className="P4B1">
                {" "}
                <i className="fa-solid fa-arrow-up"></i> Upvote {e.Upvote}
              </button>
              <button className="P4B2">
                <i className="fa-solid fa-arrow-down"></i>
              </button>
            </div>

            <div>
              <i className="fa-regular fa-comment"></i>
            </div>

            <div>
              <i className="fa-solid fa-rotate"></i>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
