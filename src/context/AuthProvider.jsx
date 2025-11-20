import React, { createContext, useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    // Seed localStorage if empty
    if (!localStorage.getItem('employees')) {
      setLocalStorage();
    }
    const { employees } = getLocalStorage();
    setUserData(employees || []);
  }, []);

  // Sync changes in context to localStorage automatically
  useEffect(() => {
    if (userData && userData.length > 0) {
      localStorage.setItem('employees', JSON.stringify(userData));
    }
  }, [userData]);

  return (
    <AuthContext.Provider value={[userData, setUserData]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
