import React from "react";
import { useQuestionData } from "../CreateContext/QuestionContext";
import "../components-cs/Question.css";

export default function Question() {
  let { questionData } = useQuestionData();

  return (
    <div className="QuestionMain" > 
      {questionData.map((e) => (
        <div className="QuestionCard" key={e.Id}>
          <div className="DQ1">
            <div className="h6">{e.Ques}</div>
            <div>
              <i class="fa-solid fa-xmark"></i>
            </div>
          </div>

          <div>
            <div>
              {e.Ans.map((e) => (
                <p>{e.Answer}</p>
              ))}
            </div>
          </div>

          <div className="DQ3">

            <div className="DQ31">
              <button>
                <i className="px-2 fa-regular fa-pen-to-square"></i>Answer
              </button>
              <button style={{ backgroundColor: "transparent" }}>
                <i className="px-2 fa-solid fa-wifi"></i>Follow
              </button>
              <button style={{ backgroundColor: "transparent" }}>
                <i className="px-2  fa-solid fa-pencil"></i>Pass
              </button>
            </div>

            <div className="DQ32">
              <button className="mx-3" style={{ backgroundColor: "transparent" }}>
                <i className="  fa-solid fa-arrow-down"></i>
              </button>
              <button className="mx-3" style={{ backgroundColor: "transparent" }}>
                <i className="fa-solid fa-ellipsis"></i>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
