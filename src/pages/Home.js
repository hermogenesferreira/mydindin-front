import React from 'react';
import { Link } from 'react-router-dom';

import imagem from '../assets/imagem.jpg';
const Home = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-between">
      <div className="grid md:grid-cols-2 m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-40 py-8">
          <h1 className="text-4xl font-bold py-3">
            Tenha controle de suas despesas!
          </h1>
          <div className="text-2xl py-2">
            <p>Você tem dificuldades para organizar suas despesas?</p>
            <p>
              Com o <strong>MyDIndin</strong>, seus problemas estão resolvidos!
            </p>
            <p>informe sua receita e controle seus gastos.</p>
          </div>
          <Link to="/register">
            <button className="py-3 px-6 my-4 font-bold">Cadastre-se</button>
          </Link>
        </div>
        <div>
          <img
            className="h-56 w-full object-right sm:h-72 md:h-96 lg:w-full lg:h-full"
            src={imagem}
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
