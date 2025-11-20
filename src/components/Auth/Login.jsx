import React, { useState } from 'react';
import logo from '../../assets/react.svg'; // Change path & file as per your app

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-tr from-[#022c25] via-[#011b25] to-[#e8eaf6]">
      <div className="w-full max-w-md bg-grey shadow-2xl rounded-2xl px-10 py-12 flex flex-col items-center border border-gray-200">
       
        <h2 className="text-3xl font-extrabold text-gray-700 mb-4 tracking-wide text-center">Employee Management</h2>
        <p className="text-gray-500 mb-8 text-center text-sm">Sign in to your account</p>
        {/* Form */}
        <form
          onSubmit={submitHandler}
          className="flex flex-col gap-4 w-full"
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoFocus
            className="outline-none bg-gray-900 border border-gray-300 text-gray-900 font-medium text-base py-3 px-5 rounded-lg placeholder:text-gray-400 focus:border-emerald-500 transition-all"
            type="email"
            placeholder="Email address"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="outline-none bg-gray-900 border border-gray-800 text-gray-700 font-medium text-base py-3 px-5 rounded-lg placeholder:text-gray-400 focus:border-emerald-500 transition-all"
            type="password"
            placeholder="Password"
          />
          <button
            type="submit"
            className="mt-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-lg py-3 rounded-lg shadow transition-all"
          >
            Sign In
          </button>
        </form>
        {/* Extra */}
        
      </div>
    </div>
  );
};

export default Login;
