import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {
  const [userData] = useContext(AuthContext);

  return (
    <div className='bg-[#232a36] p-6 rounded-xl mt-5 shadow-lg'>
      <div className='bg-gradient-to-r from-emerald-600 via-blue-800 to-indigo-700 mb-3 py-3 px-4 flex justify-between rounded-lg'>
        <h2 className='text-lg font-bold w-1/5 text-white'>Employee Name</h2>
        <h3 className='text-lg font-bold w-1/5 text-blue-200 text-center'>New Task</h3>
        <h5 className='text-lg font-bold w-1/5 text-yellow-200 text-center'>Active Task</h5>
        <h5 className='text-lg font-bold w-1/5 text-green-200 text-center'>Completed</h5>
        <h5 className='text-lg font-bold w-1/5 text-red-300 text-center'>Failed</h5>
      </div>
      <div>
        {userData && userData.length > 0 ? userData.map((elem, idx) => (
          <div key={idx} className='border-2 border-emerald-500 mb-2 py-3 px-4 flex justify-between items-center rounded-lg bg-[#2b3341] hover:bg-[#19202c] transition'>
            <h2 className='text-lg font-medium w-1/5 text-white'>{elem.firstName}</h2>
            <h3 className='text-lg font-semibold w-1/5 text-blue-400 text-center'>{elem.taskCounts.newTask}</h3>
            <h5 className='text-lg font-semibold w-1/5 text-yellow-400 text-center'>{elem.taskCounts.active}</h5>
            <h5 className='text-lg font-semibold w-1/5 text-green-400 text-center'>{elem.taskCounts.completed}</h5>
            <h5 className='text-lg font-semibold w-1/5 text-red-500 text-center'>{elem.taskCounts.failed}</h5>
          </div>
        )) : (
          <div className="text-center text-gray-400 py-4">No employees found.</div>
        )}
      </div>
    </div>
  );
};

export default AllTask;
