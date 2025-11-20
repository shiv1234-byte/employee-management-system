import React, { useContext } from 'react';
import Header from '../other/header';
import TaskListNumbers from '../other/TaskListNumber';
import TaskList from '../TaskList/TaskList';
import { AuthContext } from '../../context/Authprovider';

const EmployeeDashboard = (props) => {
  const [userData, setUserData] = useContext(AuthContext);
  const employee = props.data;

  // Live-updating task and count
  const updateTaskStatus = (taskIndex, actionType) => {
    const updatedTasks = employee.tasks.map((task, idx) => {
      if (idx === taskIndex) {
        if (actionType === 'accept') return { ...task, active: true, newTask: false, completed: false, failed: false };
        if (actionType === 'complete') return { ...task, completed: true, active: false, newTask: false, failed: false };
        if (actionType === 'fail') return { ...task, failed: true, active: false, newTask: false, completed: false };
      }
      return task;
    });
    const newTaskCount = updatedTasks.filter(t => t.newTask).length;
    const activeTaskCount = updatedTasks.filter(t => t.active).length;
    const completedCount = updatedTasks.filter(t => t.completed).length;
    const failedCount = updatedTasks.filter(t => t.failed).length;

    const updatedEmployee = {
      ...employee,
      tasks: updatedTasks,
      taskCounts: {
        newTask: newTaskCount,
        active: activeTaskCount,
        completed: completedCount,
        failed: failedCount
      }
    };

    setUserData(prev =>
      prev.map(emp => emp.id === updatedEmployee.id ? updatedEmployee : emp)
    );
    props.data.tasks = updatedTasks;
    props.data.taskCounts = updatedEmployee.taskCounts;
    localStorage.setItem('employees', JSON.stringify(
      userData.map(emp => emp.id === updatedEmployee.id ? updatedEmployee : emp)
    ));
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-8 bg-gradient-to-br from-gray-900 to-gray-800">
      <Header changeUser={props.changeUser} data={props.data}/>
      <TaskListNumbers data={props.data} />
      <TaskList data={props.data} updateTaskStatus={updateTaskStatus} />
    </div>
  );
};

export default EmployeeDashboard;
