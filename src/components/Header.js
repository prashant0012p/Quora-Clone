import React from "react";
import { NavLink } from "react-router-dom";
import "../components-cs/header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerSearch">

        <div className="head1">
          <img
           
            src="https://lh3.googleusercontent.com/iMCQwrqgZ_Q7bBCj_cSGvZqttePI1eEYU8TLkfQn2ZTth_tzGOzsmlaEeI1V_sn7HisS6Ygo0BhEPR6g7PAOvdoygoUKnzivU-MsW2UZc0tnFJ9qg2SZ6vr5NTQtkYndcCsN1tvMi1L67ie2O__3omKYYRQnHWAO-pF1-XtJr5NEL-XXqFXSftkdzlwb3O5IavykWjkA2S51rVwb568NyuokRFzwefo9-rzANs19FcuSt42z8DD1c15-p0SCuGBYLqdmgymW9APpu6WaRL5pO4WFrSPfxKVjPp1SqVzA1Xgh7OeO4PbfjIr8PhBWK6IKomGCHeZkTmSt4svCLsn1w7ewQs0ILRMs9x5tAUbKwzT9DBTi-qT4J8xokOr6SdgaF_aOfotA83PdD6QbnuvDVsie_Pt26KhwJ-NgOuyA4y5zDfkXriX-FzVH4xGjCFrBJTxzbBkI0FSDBvvhRRlp-4ZcLCjY3mtlJqZXyjEQse5WIJSWe4jCuq3n0O_Y5_BZ5rnqbLvrbxXNjXsGcV-D-61ov7XTs0eWHqXIkB7hUSQcx3g2JAGNrZp3bmDVXFD0gDdbNQBa4Nts2q7uaKAI0Jrr3AKKiVtKXEpsH-y92ywooDaTaEup_QkmGLQHeYLWRYNmNJ_51ySW-dSZkiJWlB0zz1Re718y_bJ8EBJUrV7S6MRu4vCM47w9La23YIzF-imiqPlK-tgs2V9XKSVoV2s1pGm14hENyd-ngFpM_RyUrK3rTlBc5FHhpNneDlZIO4vol6sdXV_xvV6HnV3uHLCYEEa4w1zwpllrJdXtvTQ47e8mZBAZX8wvO3wu9sCHqdvVaCI2UMV5z2nDLuGImPHfYa5wesi9HVZxnI3SO9M3UH6H_fPn2qhkW3pduQnGwjF0-8msdsUfaqzSQUJ5IgpxKIWPXJJDtEjJFC0wMReITT5xC21H8RS9XhHM7sd3hQI5EIfYzQxEBKsFj8HnQg=s635-no?authuser=0"
            alt="net slow"
          />
        </div>

        <div className="head2">
          <input placeholder="What do you to ask or share?" />
        </div>

      </div>

      <div className="postsection">
        <div>
        <i className="fa-solid fa-question mx-2"></i>  
          <NavLink className={"Linkh"}>Ask</NavLink>
        </div>

        <div>
        <i className="fa-regular fa-pen-to-square mx-2"></i>
          <NavLink className={"Linkh"} >Answer</NavLink>
        </div>

        <div style={{border:"none"}}>
        <i className="fa-solid fa-pencil mx-2"></i>
          <NavLink className={"Linkh"} >Post</NavLink>
        </div>
      </div>
    </div>
  );
}
