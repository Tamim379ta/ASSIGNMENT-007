"use client"

import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const CallContext = createContext([])


const CallProvider = ({ children }) => {

  const [call, setCall] = useState([])

  const handleCall = (expectedData , type) => {
    const newCall = {
      ...expectedData,
      type,
      time: new Date()
    }
    setCall([...call, newCall]);
    toast.success(`${expectedData.name} ${type} Successfull`)
  }
  
  const data = {
    handleCall,
    call,
    setCall
  }
  return (
    <CallContext.Provider value={data}>
      {children}
    </CallContext.Provider>

  );
};

export default CallProvider;