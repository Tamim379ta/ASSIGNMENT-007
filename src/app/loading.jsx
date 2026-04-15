import React from 'react';
import { PacmanLoader } from 'react-spinners';

const LoadingPage = () => {
  return (
    <div className='py-20 flex justify-center items-center'>


      <PacmanLoader />

      
    </div>
  );
};

export default LoadingPage;