import React from 'react'
import Header from '../other/header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

const AdminDashboard = (props) => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#232526] via-[#395C6B] to-[#2c3e50] flex flex-col items-center py-8">
      {/* Header */}
      <div className="w-full max-w-4xl mb-8">
        <Header changeUser={props.changeUser} />
      </div>
      {/* Create Task Card */}
      <div className="w-full max-w-4xl bg-[#263344] rounded-2xl shadow-lg p-8 mb-8 flex flex-col items-center">
        <CreateTask />
      </div>
      {/* All Tasks Card */}
      <div className="w-full max-w-4xl bg-[#263344] rounded-2xl shadow-lg p-8 flex flex-col items-center overflow-y-auto" style={{ maxHeight: '45vh' }}>
        <AllTask />
      </div>
    </div>
  );
}

export default AdminDashboard
