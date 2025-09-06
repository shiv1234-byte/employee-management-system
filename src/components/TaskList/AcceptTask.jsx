import React from "react";

const AcceptTask=({data})=>{
    console.log(data);
    
    return(
        
            <div className="w-[300px] h-full bg-green-400 rounded-xl shrink-0 ">
        <div className="flex justify-between">
     <h2 className="bg-red-600 w-auto rounded-md m-3 font-bold">{data.category}</h2>
     <h3 className="m-3 font-bold text-base">{data.taskDate}</h3>
     </div>
     <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
     <p className="text-sm mt-5">{data.taskDescription}</p>
    
    <div className="flex justify-between mt-4">
        <button className="bg-green-700 font-bold py-1 px-2 text-sm rounded-md">Mark as Completed</button>
        <button className="bg-red-700 font-bold py-1 px-2 text-sm rounded-md">Mark as Failed</button>
    </div>

        </div>
    )
}
export default AcceptTask