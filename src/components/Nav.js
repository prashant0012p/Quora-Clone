import React from "react";
import "../components-cs/nav.css";
import { NavLink } from "react-router-dom";



export default function Nav() {

  return (
    <div className="navbar">
      <div className="mid">
        <div className="imgbox" id="imgboxi">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/1200px-Quora_logo_2015.svg.png"
            alt="slow network"
          />
        </div>

        <div className="iconcontent" id="iconcontenti">
          <div className="iconbox" id="iconboxi">
            <NavLink
              to="/"
              className={({ isActive, isPanding }) =>
                isActive ? "redish" : "gray"
              }
            >
              <i className="fa-solid fa-house"></i>
            </NavLink>
            <NavLink
              to="/follow"
              className={({ isActive, idPanding }) =>
                isActive ? "redish" : "gray"
              }
            >
              {" "}
              <i className="fa-solid fa-table-list"></i>
            </NavLink>
            <NavLink
              to="/answer"
              className={({ isActive, isPending }) =>
                isActive ? "redish" : "gray"
              }
            >
              {" "}
              <i className="fa-solid fa-pen-to-square"></i>
            </NavLink>
            <NavLink
              to="/spaces"
              className={({ isActive, isPanding }) =>
                isActive ? "redish" : "gray"
              }
            >
              {" "}
              <i className="fa-solid fa-people-group"></i>
            </NavLink>
            <NavLink
              to="/notification"
              className={({ isActive, isPanding }) =>
                isActive ? "redish" : "gray"
              }
            >
              {" "}
              <i className="fa-regular fa-bell"></i>
            </NavLink>
          </div>
           
          <div className="searchbox" id="sb">
            <div className="searchinput">
              <div className="sicon">
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>

              <div className="ibox">
                <input placeholder="Search Quora" />
              </div>
            </div>
          </div>

          <div className="profilebox" id="profileboxi">
            <div className="b1" id="b1i">
              <button>Try Quora+</button>
            </div>

            <div className="b2">
              <div className="dropdown">
                <img
                  style={{ width: "30px",borderRadius:"50px" }}
                  className=" dropdown-toggle "
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false" 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7CmxTp8CjjxdVdKVWwKfsSTGk53gGodvV6MIvIsZXtg&usqp=CAU&ec=48600112"
                  alt="net slow "
                />
                <div className="dropdown-menu" id="dropdown-menuI">
                  <div className="one">
                    <NavLink className="LP" style={{textDecoration:"none"}}>
                    <img
                      style={{ width: "30px",borderRadius:"50px" }}
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7CmxTp8CjjxdVdKVWwKfsSTGk53gGodvV6MIvIsZXtg&usqp=CAU&ec=48600112"
                      alt=""
                    />
                    <h3>Prashant Parmar</h3>
                    </NavLink>
                  </div>

                  <hr />
                  <div className="two">

                    <NavLink className="Link">
                      <span className="s1" >
                        <i className="fa-regular fa-comment-dots"></i>
                      </span>
                      <span className="s2">Messages</span>
                    </NavLink>

                    <NavLink className="Link">
                      <span className="s1">
                        <i className="fa-solid fa-bullhorn"></i>
                      </span>
                      <span  className="s2">Create Ad</span>
                    </NavLink>

                    <NavLink className="Link">
                      <span  className="s1">
                        <i className="fa-solid fa-dollar-sign"></i>
                      </span>
                      <span  className="s2"> Monetization</span>
                    </NavLink>

                    <NavLink className="Link">
                      <span  className="s1">
                        <i className="fa-solid fa-chart-simple"></i>
                      </span>
                      <span  className="s2"> Your content & stats</span>
                    </NavLink>

                    <NavLink className="Link">
                      <span  className="s1">
                        <i className="fa-regular fa-bookmark"></i>
                      </span>
                      <span  className="s2"> Bookmarks </span>
                    </NavLink>

                    <NavLink className="Link">
                      <span  className="s1">
                        <i className="fa-regular fa-pen-to-square"></i>
                      </span>
                      <span  className="s2">Drafts </span>
                    </NavLink>

                    <NavLink className="Link">
                      <span  className="s1">
                        <i className="fa-solid fa-wand-sparkles"></i>{" "}
                      </span>
                      <span  className="s2">Try Quora+</span>
                    </NavLink>
                  </div>
                  <hr />

                  <div className="three">

                    <div className="LH">
                    <NavLink className="Link">Dark mode</NavLink>
                    
                    </div>

                    <div className="LH">
                   
                      <NavLink className="Link">Settings </NavLink>
                    </div>
                    <div className="LH">
                     
                      <NavLink className="Link">Language </NavLink>
                    </div>
                    <div className="LH">
                    
                      <NavLink className="Link">Help</NavLink>
                    </div>
                    <div className="LH">
                 
                      <NavLink className="Link">Logout</NavLink>
                    </div>
                  </div>
                  <hr />

                  <div className="four">
                   
                    <NavLink className="Linkh">-Careers</NavLink>
                    <NavLink className="Linkh">-Terms</NavLink>
                    <NavLink className="Linkh">-Privacy</NavLink>
                    <NavLink className="Linkh">-Acceptable Use</NavLink>
                    <NavLink className="Linkh">-Businesses</NavLink>
                    <NavLink className="Linkh">-Press</NavLink>
                    <NavLink className="Linkh">-Your Ad Choice</NavLink>
                    <NavLink className="Linkh">-Grievance Officer</NavLink>

                  </div>
                </div>
              </div>
            </div>

            <div className="b3" id="b3i">
              <i className="fa-solid fa-globe"></i>
            </div>

            <div className="b4" id="b4i">
          
              <button className="plus">Add question</button>
              <button className="drop">
                <i className="fa-solid fa-caret-down"></i>
              </button>
            </div>
            

          
  
             
             

  
           
            
          </div>
        </div>
      </div>

    </div>
  
  );
}
