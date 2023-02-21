import React, { useState,useEffect } from "react";
import "../components-cs/Postmodal.css";
import { usePostData } from "../CreateContext/PostContext";
import { Post } from "../Data/Post";

export default function PostModal() { 
  let { setPostData } = usePostData();

  let [inputName, setInputName] = useState("");
  let [inputAbout, setInputAbout] = useState("");
  let [inputProfile, setInputProfile] = useState("");
  let [inputPost, setInputPost] = useState("");
  let [inputInfo, setInputInfo] = useState("");

   useEffect(() => {
    var data = JSON.parse(localStorage.getItem("datapost"));
    setPostData(data) 
  }, [])     

  function createPost() {

  if(!inputName || !inputAbout || !inputPost || !inputProfile ){

   alert("Please fill")

  }
  else{

    let newObj = {
      Id: new Date().getTime().toString(),
      Name: inputName,
      About: inputAbout,
      Profile: inputProfile,
      Post: inputPost,
      Info: inputInfo,
      Upvote: 0,
    };  

    let updateObj = [newObj,...Post ];

    setPostData(updateObj);         

    localStorage.setItem("datapost", JSON.stringify(updateObj))

    setInputName("")
    setInputInfo("")
    setInputAbout("")
    setInputPost("")
    setInputProfile("")

  }


  }

  return (
    <div
      className="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              Create Post/Add Question
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div>
              <h3>Post</h3>

              <input
                value={inputName}
                placeholder="Enter your Name"
                onChange={(e) => setInputName(e.target.value)}
                required
              />

              <input
                value={inputAbout}
                className="mt-3"
                placeholder="Enter your About"
                onChange={(e) => setInputAbout(e.target.value)}
                required
              />

              <input
                value={inputProfile}
                className="mt-3"
                placeholder="Enter your Profile"
                onChange={(e) => setInputProfile(e.target.value)}
                required
              />

              <input
                value={inputPost}
                className="mt-3"
                placeholder="Enter your Post (Image)"
                onChange={(e) => setInputPost(e.target.value)}
                required
              />

              <input
                value={inputInfo}
                onChange={(e) => setInputInfo(e.target.value)}
                className="mt-3"
                style={{ height: "4rem" }}
                placeholder="Enter your  Info...."
              />

              <button
                onClick={createPost}
                type="button"
                className="btn btn-primary mt-3"
              >
                Submit
              </button>
            </div>

            <div>
              <h3>Question</h3>

              <input placeholder="Enter your Name" />
              <input className="mt-3" placeholder="Enter your About" />
              <input className="mt-3" placeholder="Enter your Profile" />
              <input className="mt-3" placeholder="Enter your Question" />

              <button type="button" className="btn btn-primary mt-3">
                Submit
              </button>
            </div>
          </div>
          <div className="modal-footer">
            {/* <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
