import React from "react";
import Header from "../../others/Header";
import AllTask from "../../others/AllTask";
import CreateTask from "../TaskList/Createtask";


const AdminDashboard =(props)=>{
    return(
        <div>
 <Header changeUser={props.changeUser}/>
<CreateTask/>
 <AllTask/>
 </div>
    )
}
export default AdminDashboard