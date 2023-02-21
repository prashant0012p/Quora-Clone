import { createContext, useContext, useState } from "react";
import {Question} from "../Data/Question"
import React from "react"
let QuestionContext  = createContext()

function QuestionDataProvider({children}){

let [questionData,setQuestionData] = useState([...Question])   

return(

<QuestionContext.Provider value={{questionData,setQuestionData}}>{children}</QuestionContext.Provider>


)

}

let useQuestionData = () => useContext(QuestionContext)

export {useQuestionData,QuestionDataProvider}