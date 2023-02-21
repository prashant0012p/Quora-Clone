import React, { createContext, useContext, useState } from "react";

let Context = createContext()

function ThemeValueProvider({children}){
    
let [theme,setThemeValue] = useState("white")    

return(<Context.Provider value={{theme,setThemeValue}}>{children}</Context.Provider>)    


}

let useToggleValue = () => useContext(Context);

export {useToggleValue,ThemeValueProvider}