import React from "react";
import { setLocalStorage } from "../utils/LocalStorage";

const  Header = (props)=>{

    const logOutUser=()=>{
    localStorage.setItem('loggedInUser','')

   props.changeUser('')
    // window.location.reload()
    }
    
    return (
        <div className=" w-[100%]  text-white flex items-start justify-between  m-0">
        <h1 className="text-2xl text-start font-medium">Hello <br/> <span className="text-5xl font-semibold">username👋</span> </h1>
         <button onClick={logOutUser} className="bg-red-500 border-2 border-amber-600 py-3 px-8 rounded-xl font-bold text-xl">Log Out</button>
        </div>
    )
}
export default Header
