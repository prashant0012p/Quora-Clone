import React from "react"
import './App.css';
import Nav from "./components/Nav"
import Home from "./pages/Home"
import Follow from "./pages/Follow";
import Answer from "./pages/Answer";
import Spaces from "./pages/Spaces";
import Notify from "./pages/Notify";
import Error  from "./pages/Error";
import {Routes,Route} from "react-router-dom"


function App() {
  return (
    <div className="App">
     
     <Nav/>


     <Routes>

      <Route path="/" element={<Home/>} />
      <Route path="/follow" element={<Follow/>}/>
      <Route path="/answer" element={<Answer/>}/>
      <Route path="/notify" element={<Notify/>}/>
      <Route path="/spaces" element={<Spaces/>}/>
      <Route path="*" element={<Error/>}/>

     </Routes>

    </div>
  );
}

export default App;
