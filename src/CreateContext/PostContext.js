import { createContext, useContext, useState } from "react";

import React from "react";
import { Post } from "../Data/Post.js";
let PostContext = createContext();

function PostDataProvider({ children }) {
  let [postData, setPostData] = useState(Post);

  return (
    <PostContext.Provider value={{ postData, setPostData }}>
      {children}
    </PostContext.Provider>
  );
}

let usePostData = () => useContext(PostContext);

export { usePostData, PostDataProvider };
