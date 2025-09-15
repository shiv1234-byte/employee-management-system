<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
=======
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
![Screenshot_6-9-2025_19434_localhost](https://github.com/user-attachments/assets/c44872f4-ca98-4908-9bcc-166d48f06b02)
<img width="800" height="601" alt="image" src="https://github.com/user-attachments/assets/21560cad-ec66-4085-9870-ddd5d49d3ffe" />
<img width="1901" height="911" alt="image" src="https://github.com/user-attachments/assets/a318ea93-6e9f-4f03-ad34-c0bae9fcdad8" />




>>>>>>> 34e5977c8718e7d1bddeb1f845e13bda0cbe7a9b
