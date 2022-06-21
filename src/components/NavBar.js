import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div>
      <div className="w-screen h-[80px] z-10 text-indigo-800 fixed drop-shadlow-lg mt-8">
        <div className="px-10 flex justify-between items-center w-full h-full">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold mr-4 sm:text-3xl">
              <Link to="/">MyDinDin</Link>
            </h1>
          </div>
          <div className="text-2xl font-bold hidden md:flex pr-4">
            <ul className="hidden  md:flex">
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/list">
                <li>Listar</li>
              </Link>
              <Link to="/about">
                <li>Sobre</li>
              </Link>
            </ul>
            <Link to="/login">
              <button className="py-3 px-6 ">Acessar</button>
            </Link>
          </div>
          <div className="md:hidden" onClick={handleClick}>
            {!nav ? <MenuIcon className="w-8" /> : <XIcon className="w-8" />}
          </div>
        </div>
        <ul className={!nav ? 'hidden' : 'absolute font-bold w-full px-8'}>
          <li className="border-b-2 border-zinc-200 w-full">Home</li>
          <li className="border-b-2 border-zinc-200 w-full">Utilização</li>
          <li className="border-b-2 border-zinc-200 w-full">Sobre Nós</li>
          <li className="border-b-2 border-zinc-200 w-full">Acessar</li>
          <div className="flex flex-col my-4">
            <button className="border-none px-8 py-3 mb-4">Acessar</button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
