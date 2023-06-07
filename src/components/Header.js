import React from "react";
import { NavLink } from "react-router-dom";
import "../components-cs/header.css";
import PostModal from "./PostModal";

export default function Header() {


  return (

     

    <div className="header">

     <PostModal/>

      <div className="headerSearch">

        <div className="head1">
          <img
           
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7CmxTp8CjjxdVdKVWwKfsSTGk53gGodvV6MIvIsZXtg&usqp=CAU&ec=48600112"
          />
        </div>

        <div className="head2">
          <input placeholder="What do you to ask or share?" />
        </div>

      </div>

      <div className="postsection">

        <div data-bs-toggle="modal" data-bs-target="#staticBackdrop"> 
        <i className="fa-solid fa-question mx-2"></i>  
          <NavLink className={"Linkh"}>Ask</NavLink>
        </div>

        <div>
        <i className="fa-regular fa-pen-to-square mx-2"></i>
          <NavLink className={"Linkh"} >Answer</NavLink>
        </div>

        <div style={{border:"none"}} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        <i className="fa-solid fa-pencil mx-2"></i>
          <NavLink className={"Linkh"} >Post</NavLink>
        </div>

      </div>
    </div>
  );
}
