import React from 'react';
import { Link } from 'react-router-dom';

import imagem from '../assets/imagem.jpg';
const Home = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-between">
      <div className="grid md:grid-cols-2 m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-40 py-8">
          <h1 className="sm:text-2xl xl:text-3xl font-bold py-3">
            Tenha controle de suas despesas!
          </h1>
          <div className="sm:text-1xl xl:text-2xl py-2">
            Você tem dificuldades para organizar suas despesas? Com o
            <strong> MyDindin</strong>, seus problemas estão resolvidos! informe
            sua receita e controle seus gastos.
          </div>
          <Link to="/register">
            <button className="sm:px-2 xl:py-3 xl:px-6 my-4 font-bold">
              Cadastre-se
            </button>
          </Link>
        </div>
        <div>
          <img className="hidden sm:block" src={imagem} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default Home;
