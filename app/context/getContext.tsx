"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the type for the context
interface UserContextType {
 
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  

}

// Create context with default values
const UserContext = createContext<UserContextType | undefined>(undefined);

// Create a provider component
export const UserProvider = ({ children }: { children: ReactNode }) => {

  const [isOpen,setIsOpen] = useState<boolean>(false)


  return (
    <UserContext.Provider value={{ isOpen,setIsOpen}}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook for consuming the UserContext
export const useContextApi = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useContextApi must be used within a UserProvider');
  }
  return context;
};