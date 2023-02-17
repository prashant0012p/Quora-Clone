import { Post } from "../Data/Post";
import "../components-cs/PostComp.css"
import React from "react";

export default function PostComp() {
  return (
    <div className="PostMain">
      {Post.map((e) => (
        <div className="PostCard">
       
           <div className="P1">

            <div className="P11"><img src={e.Profile} alt="net slow" /></div>

            <div className="P12">
              <div>{e.Name}</div><div>{e.About}</div>
            </div>


           </div>

           <div className="P2">{e.Info}</div>

           <div className="P3"><img src="https://www.conserve-energy-future.com/wp-content/uploads/2016/08/nature-environment-conservation.jpg" alt="net slow" /></div>

           <div className="P4">

           <div className="P4B">
              <button className="P4B1" > <i class="fa-solid fa-arrow-up"></i> Upvote</button>
              <button className="P4B2" >
              <i class="fa-solid fa-arrow-down"></i>
              </button>
            </div>

             <div>

             <i class="fa-regular fa-comment"></i>   
 
             </div>   
               
               <div>

               <i class="fa-solid fa-rotate"></i>

               </div>

           </div>

        </div>
      ))}

    
    </div>
  );
}
