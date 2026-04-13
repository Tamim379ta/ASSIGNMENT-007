"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { IoHomeOutline } from 'react-icons/io5';
import { RiTimeLine } from 'react-icons/ri';
import { TfiStatsUp } from 'react-icons/tfi';

const NavbarPage = () => {

  const pathName = usePathname()
  return (
    <div className='bg-base-100 p-3  shadow-sm'>
      <div className="flex flex-col md:flex-row  container mx-auto ">
        <div className="flex-1">
          <Link href={'/'}>
          <p className='font-bold text-xl'>Keen<span className='text-green-800'>Keeper</span></p>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal gap-2 px-1">
            <Link  className= {pathName === "/" ? "btn font-semibold text-white bg-green-800" : "btn"} href={'/'}> <IoHomeOutline /> Home</Link>
            <Link className={pathName === "/timeline" ? "btn font-semibold text-white bg-green-800" : "btn"} href={'/timeline'}><RiTimeLine /> TimeLine</Link>
            <Link className={pathName === "/stats" ? "btn font-semibold text-white bg-green-800" : "btn"} href={'/stats'}><TfiStatsUp /> Stats</Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavbarPage;