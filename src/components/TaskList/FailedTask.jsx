import React from "react";

const FailedTask = ()=>{
    return(
        <div className="w-[300px] h-full bg-green-400 rounded-xl shrink-0 ">
        <div className="flex justify-between">
     <h2 className="bg-red-600 w-[80px] rounded-md m-3 font-bold">High</h2>
     <h3 className="m-3 font-bold text-base">15 feb 2025</h3>
     </div>
     <h2 className="mt-5 text-2xl font-semibold">Make a project by react js</h2>
     <p className="text-sm mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur corrupti voluptas quod, magni fuga ullam?</p>
     <div className=" mt-4">
        <button className="bg-red-700 font-bold py-1 px-2 text-sm rounded-md w-full">failed</button>
        
    </div>
    </div>
    )
}
export default FailedTask