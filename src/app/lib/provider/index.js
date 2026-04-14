import CallProvider from '@/components/context/call.context';
import React from 'react';

const Provider = ({ children }) => {
  return (
    <CallProvider>
      {children}
    </CallProvider>
  );
};

export default Provider;