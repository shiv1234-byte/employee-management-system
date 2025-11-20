
📋 Employee Management System
A responsive and role-based employee management system built using React, Vite, and Context API. It supports user authentication, task assignment, and dynamic dashboards for both admin and employee roles.

🚀 Features
🔐 Login System with role-based redirection (Admin vs Employee)

👥 Context API for global state management (employees, logged-in user)

📋 Task Creation by Admin with assignment to specific employees

📊 Employee Dashboard showing assigned tasks

💾 LocalStorage Integration for persistent user and task data

⚡️ Vite for fast development and hot module replacement

🧱 Tech Stack
Layer	Tools Used
Frontend	React, Vite
State Mgmt	Context API
Routing	React Router DOM
Styling	CSS / Tailwind (optional)
Persistence	LocalStorage
📁 Folder Structure
Code
src/
├── components/
│   ├── auth/             # Login component
│   ├── TaskList/         # CreateTask, AllTask components
├── context/
│   └── AuthProvider.jsx  # Global context for user & employee state
├── utils/
│   └── localStorage.js   # Helper functions for localStorage
├── App.jsx
├── main.jsx
🛠️ Setup Instructions
Clone the repo

bash
git clone https://github.com/your-username/employee-management-system.git
cd employee-management-system
Install dependencies

bash
npm install
Run the app

bash
npm run dev
Access the app

Open http://localhost:5173 in your browser.

🔑 Default Credentials (for testing)
Role	Email	Password
Admin	admin@example.com	admin123
User	user@example.com	user123
(You can modify these in localStorage.js or via the UI)

🧠 Developer Notes
Context is initialized in AuthProvider.jsx and wrapped around the app in main.jsx.

All task logic is handled in CreateTask.jsx, with dynamic updates to employee state.

LocalStorage is used to simulate backend persistence—ideal for mock rounds and demos.
<img width="1823" height="1089" alt="image" src="https://github.com/user-attachments/assets/89d02059-fcb9-48e4-86d2-28843f6bc134" />
<img width="979" height="753" alt="image" src="https://github.com/user-attachments/assets/58ed0ef1-3a81-40bf-b67c-ae9553f4672c" />
<img width="1818" height="784" alt="image" src="https://github.com/user-attachments/assets/2ddc581f-f605-4051-99f5-21f9cecf1f60" />






>>>>>>> 34e5977c8718e7d1bddeb1f845e13bda0cbe7a9b
