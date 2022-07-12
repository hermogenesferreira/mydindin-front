import React from 'react';
import DashboardLayout from '../../components/DashboardLayout';
const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="flex flex-col pl-8 pt-20">
        <h1 className="font-bold text-4xl pb-8 text-indigo-800">
          Olá Usuário,
        </h1>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 overflow-hidden md:grid-cols-2 sm:grid-cols-1 gap-3 w-4/5 text-white text-2xl font-bold text-center">
          <div className="rounded shadow-lg bg-indigo-500 py-4 px-4">
            Receita:
            <p>R$ 2000,00</p>
          </div>
          <div className="rounded shadow-lg bg-indigo-500 py-4 px-4">
            Despesas:
            <p>R$1500,00</p>
          </div>
          <div className="rounded shadow-lg bg-indigo-500 py-4 px-4">
            Meta:
            <p>R$1600,00</p>
          </div>
          <div className="rounded shadow-lg bg-indigo-500 py-4 px-4">
            Saldo Atual:
            <p>R$500,00</p>
          </div>
          <div className="rounded shadow-lg bg-indigo-500 py-4 px-4">
            Despesas Cadastradas:
            <p>10</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
