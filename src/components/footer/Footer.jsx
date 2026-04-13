import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const FooterPage = () => {
  return (
    <div className='bg-green-800 pt-20 pb-10'>

      <div className='container mx-auto'>
        <div className='text-center'>
          <h1 className='text-4xl font-bold text-white'>KneeKeeper</h1>
          <p className='text-gray-300'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
        </div>

        <div className='text-center text-white py-3'>
          <p className='text-2xl font-semibold'>Social Links</p>
          <div className='flex justify-center  mt-2 gap-2 text-2xl'>
            <FaInstagram />
            <FaFacebook />
            <FaXTwitter />
          </div>
        </div>

        <div className='divider'></div>

        <div className='flex justify-between'>
          <p className='text-gray-300'>© 2026 KeenKeeper. All rights reserved.</p>

          <div className='flex gap-4 text-gray-300'>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Cookies</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default FooterPage;