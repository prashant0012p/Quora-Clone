import React from "react"
import "../components-cs/nav.css"
import {NavLink} from "react-router-dom"

export default function Nav() {

    return (

        <div className="navbar">

            <div className="mid">

                <div className="imgbox">
                   
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/1200px-Quora_logo_2015.svg.png" alt="slow network" />

                </div>  

                <div className="iconcontent">


                    <div className="iconbox">

                     <NavLink to="/" ><i class="fa-solid fa-house"></i></NavLink>   
                     <NavLink to="/follow" > <i class="fa-solid fa-table-list"></i></NavLink>  
                     <NavLink to="/answer"> <i class="fa-solid fa-pen-to-square"></i></NavLink>   
                      <NavLink to="/spaces">  <i class="fa-solid fa-people-group"></i></NavLink>
                     <NavLink to="/notify">   <i class="fa-regular fa-bell"></i></NavLink>


                    </div>
                    <div className="searchbox">

                        <div className="searchinput">

                            <div className="sicon">
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </div>

                            <div className="ibox">
                                <input placeholder="Search Quora" />
                            </div>

                        </div>

                    </div>


                    <div className="profilebox">

                        <div className="b1">

                            <button>Try Quora+</button>

                        </div>

                        <div className="b2">

                            <i class="fa-regular fa-user"></i>

                        </div>

                        <div className="b3">

                            <i class="fa-solid fa-globe"></i>

                        </div>

                        <div className="b4">

                            <button className="plus">Add question</button>
                            <button className="drop">
                                <i class="fa-solid fa-caret-down"></i>
                            </button>

                        </div>

                    </div>

                </div>

            </div>


        </div>




    )


}