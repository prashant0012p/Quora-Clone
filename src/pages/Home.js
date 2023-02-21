import "../page-css/home.css";


import React from "react";

import Header from "../components/Header";
import IntrestComp from "../components/IntrestComp";
import PostComp from "../components/PostComp";


export default function Home() {



  return (
  
    <div className="home" id="homei">
    
    <div className="left" id="lefti">
      

   
    <IntrestComp/>            
  
           
      
    </div>



    <div className="middle" id="middlei">
      
      <Header/>
      
     
      <PostComp/>
      
      

    </div>

    <div className="right" id="righti">
  
    </div>
  

    </div>


  );
}
