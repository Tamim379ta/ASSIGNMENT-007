import React from 'react';

const HeroStat = () => {
  return (
    <div className=' bg-base-200  border border-t-0 border-r-0 border-l-0 border-b-gray-300'>
      <div className="grid grid-cols-2  md:grid-cols-2 lg:grid-cols-4  gap-4 container mx-auto px-5 pbe-10 md:px-20">


        <div className="text-center shadow-2xl rounded-2xl py-10 border border-gray-200">
          <h1 className="font-bold text-3xl">10</h1>
          <p className="text-gray-400">Total Friends</p>
        </div>

        <div className="text-center shadow-2xl rounded-2xl py-10 border border-gray-200">
          <h1 className="font-bold text-3xl">3</h1>
          <p className="text-gray-400">On Track</p>
        </div>

        <div className="text-center shadow-2xl rounded-2xl py-10 border border-gray-200">
          <h1 className="font-bold text-3xl">6</h1>
          <p className="text-gray-400">Need Attention</p>
        </div>

        <div className="text-center shadow-2xl rounded-2xl py-10 border border-gray-200">
          <h1 className="font-bold text-3xl">10</h1>
          <p className="text-gray-400">Interactions This Month</p>
        </div>
      </div>
    </div>
  );
};

export default HeroStat;