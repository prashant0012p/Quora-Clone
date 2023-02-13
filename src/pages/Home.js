
import Follow from "./Follow";
import Answer from "./Answer";

import Notify from "./Notify";



import React  from "react";

export default function Home(){

return(

<>
<h1>home</h1>

<div className="flex" style={{display:"flex"}}>
     <div><Follow/></div>      
     <div><Notify/></div>
     <div><Answer/></div>  
    </div>

</>
)
}
