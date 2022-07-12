import React, { useState } from 'react';
import image from '../assets/control.png';
import logo from '../assets/logo.png';

import {
  CurrencyDollarIcon,
  HomeIcon,
  ArrowCircleLeftIcon,
  LogoutIcon,
  StarIcon,
} from '@heroicons/react/outline';
import { Link } from 'react-router-dom';

const SideBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex float-left">
      <div
        className={`${
          open ? 'w-72' : 'w-20'
        } duration-200 h-screen p-5 pt-8 bg-indigo-500 relative`}
      >
        <img
          src={image}
          alt="/"
          className={`duration-300 absolute overflow-scroll cursor-pointer rounded-full -right-3 top-9 w-7 border-2 border-indigo-500 ${
            !open && 'rotate-180'
          }`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src={logo}
            alt="logo"
            className={`cursor-pointer duration-500 ${
              open && 'rotate-[360deg]'
            }`}
          />
          <h1
            className={`text-white origin-left text-2xl duration-300 font-bold border-black ${
              !open && 'scale-0'
            }`}
          >
            My Dindin
          </h1>
        </div>
        <ul className="pt-6">
          <Link to="/dashboard">
            <li
              className={`flex rounded-md p-2 cursor-pointer hover:bg-indigo-300 text-white font-medium items-center gap-x-4 mt-2`}
            >
              <HomeIcon className="w-8" />
              <span className={`${!open && 'hidden'} origin-left duration-200`}>
                Página Inicial
              </span>
            </li>
          </Link>
          <Link to="/dashboard/expense">
            <li
              className={`flex rounded-md p-2 cursor-pointer hover:bg-indigo-300 text-white font-medium items-center gap-x-4 mt-2`}
            >
              <ArrowCircleLeftIcon className="w-8" />
              <span className={`${!open && 'hidden'} origin-left duration-200`}>
                Despesas
              </span>
            </li>
          </Link>
          <Link to="/dashboard/revenue">
            <li
              className={`flex rounded-md p-2 cursor-pointer hover:bg-indigo-300 text-white font-medium items-center gap-x-4 mt-2`}
            >
              <CurrencyDollarIcon className="w-8" />
              <span className={`${!open && 'hidden'} origin-left duration-200`}>
                Receitas
              </span>
            </li>
          </Link>
          <Link to="/dashboard/goal">
            <li
              className={`flex rounded-md p-2 cursor-pointer hover:bg-indigo-300 text-white font-medium items-center gap-x-4 mt-2`}
            >
              <StarIcon className="w-8" />
              <span className={`${!open && 'hidden'} origin-left duration-200`}>
                Metas
              </span>
            </li>
          </Link>
          <Link to="/">
            <li
              className={`flex rounded-md p-2 cursor-pointer hover:bg-indigo-300 text-white font-medium items-center gap-x-4 mt-2`}
            >
              <LogoutIcon className="w-9" />
              <span className={`${!open && 'hidden'} origin-left duration-200`}>
                Sair
              </span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
