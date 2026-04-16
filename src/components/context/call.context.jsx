"use client"

import React, { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export const CallContext = createContext([])

const STORAGE_KEY = "calls";


const CallProvider = ({ children }) => {

  const [call, setCall] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);


  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);

      if (saved) {
        const parsedCalls = JSON.parse(saved);

        if (Array.isArray(parsedCalls)) {
          setCall(parsedCalls);
        }
      }
    } catch (error) {
      console.error("Failed to read saved calls", error);
      localStorage.removeItem(STORAGE_KEY);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(call));
  }, [call, isLoaded]);



  const handleCall = (expectedData, type) => {
    const newCall = {
      ...expectedData,
      type,
      time: new Date().toISOString()
    }
    setCall((prevCall) => [...prevCall, newCall]);
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
