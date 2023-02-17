import "../page-css/home.css";


import React from "react";

import Header from "../components/Header";
import IntrestComp from "../components/IntrestComp";
import PostComp from "../components/PostComp";

export default function Home() {
  return (
  
    <div className="home">
    
    <div className="left">
      

   
    <IntrestComp/>            

           
      
    </div>



    <div className="middle">
      
      <Header/>
      <PostComp/>
     

    </div>

    <div className="right">
  
    </div>
  

    </div>


  );
}
