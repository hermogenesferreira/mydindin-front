import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PlusIcon, PencilIcon, TrashIcon } from '@heroicons/react/solid';

import DashboardLayout from '../../components/DashboardLayout';
import api from '../../services/api';
const Expense = () => {
  const [receitas, setReceitas] = useState([]);
  const [inputUpdate, setInputUpdate] = useState(false);
  const [inputCreate, setInputCreate] = useState(false);
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [id, setId] = useState('');

  const [data, setData] = useState({
    descricao: '',
    valor: '',
  });

  function popUp() {
    setInputUpdate(!inputUpdate);
  }

  function popUpCreate() {
    setInputCreate(!inputCreate);
  }

  async function edit(id) {
    popUp();
    await api.get(`receita/${id}`).then((response) => {
      setId(response.data.id);
      setDescricao(response.data.descricao);
      setValor(response.data.valor);
    });
  }

  let navigate = useNavigate();

  function update() {
    api
      .put(`receita/${id}`, {
        descricao: descricao,
        valor: valor,
      })
      .then((res) => {
        //console.log(res.data);
        alert('Receita Atualizada com Sucesso!');
        edit();
        window.location.reload(false);
      })
      .catch((err) => {
        alert('Erro interno!');
      });
  }

  function submit(e) {
    popUpCreate();
    e.preventDefault();
    api
      .post('receita/2', {
        descricao: data.descricao,
        valor: data.valor,
      })
      .then((res) => {
        //console.log(res.data);
        alert('Receita Adicionada com Sucesso!');
        window.location.reload(false);
      })
      .catch((err) => {
        alert('Erro interno!');
      });
  }

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    //console.log(newData);
  }

  async function deleteReceita(id) {
    if (window.confirm('Tem certeza que deseja deletar?')) {
      await api.delete(`receita/${id}`).then(() => {
        window.location.reload(false);
      });
    }
  }

  useEffect(() => {
    api.get('receita/user/1').then((response) => {
      setReceitas(response.data);
    });
  }, []);

  return (
    <DashboardLayout>
      <div className="grid grid-cols-none	px-16 py-20">
        <h1 className="text-4xl font-bold text-indigo-800">Receitas</h1>
        <div className="grid justify-items-center">
          <table class="table-auto text-2xl">
            <thead className="border">
              <tr>
                <th>Descrição</th>
                <th>Valor</th>
                <th>Editar</th>
                <th>Excluir</th>
              </tr>
            </thead>
            <tbody className="border">
              {receitas.map((receita, key) => {
                return (
                  <tr key={key}>
                    <td className="border">{receita.descricao}</td>
                    <td className="border">{receita.valor}</td>
                    <td className="border">
                      <button
                        className="bg-transparent border-none"
                        onClick={() => edit(receita.id)}
                      >
                        <PencilIcon className="w-8 fill-yellow-500" />
                      </button>
                    </td>
                    <td className="border">
                      <button
                        className="bg-transparent border-none"
                        onClick={() => deleteReceita(receita.id)}
                      >
                        <TrashIcon className="w-8 fill-red-500" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div
            style={{ display: inputUpdate ? 'flex' : 'none' }}
            className="bg-transparency fixed"
          >
            <div className="grid h-screen place-items-center">
              <div className="bg-white py-12 px-12 border-4 border-indigo-500 rounded-xl ">
                <div>
                  <h1> Atualizar Receita</h1>
                  <label htmlFor="nome" className="sr-only">
                    Nome
                  </label>
                  <input
                    id="nome"
                    name="{data.nome}"
                    type="text"
                    required
                    className="appearance-none w-96 rounded-none px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 "
                    placeholder="Nome"
                    value={descricao}
                    onInput={(e) => setDescricao(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="valor" className="sr-only">
                    Valor
                  </label>
                  <input
                    id="valor"
                    name="{data.valor}"
                    type="number"
                    required
                    className="appearance-none w-96 rounded-none px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 "
                    placeholder="Valor"
                    value={valor}
                    onInput={(e) => setValor(e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-2 px-4 py-2 gap-2 place-content-center">
                  <button
                    onClick={update}
                    className=" rounded px-2 py-2 text-white  bg-green-500 border-none "
                  >
                    Atualizar
                  </button>
                  <button
                    onClick={edit}
                    className="rounded px-2 py-2 text-white bg-red-500 border-none "
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{ display: inputCreate ? 'flex' : 'none' }}
            className="bg-transparency fixed"
          >
            <div className="grid h-screen place-items-center">
              <div className="bg-white py-12 px-12 border-4 border-indigo-500 rounded-xl ">
                <div>
                  <h1> Adicionar Receita</h1>
                  <label htmlFor="descricao" className="sr-only">
                    Descrição
                  </label>
                  <input
                    id="descricao"
                    name="{data.descricao}"
                    type="text"
                    required
                    className="appearance-none w-96 rounded-none px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 "
                    placeholder="Descrição"
                    onChange={(e) => handle(e)}
                  />
                </div>
                <div>
                  <label htmlFor="valor" className="sr-only">
                    Senha
                  </label>
                  <input
                    id="valor"
                    name="{data.valor}"
                    type="number"
                    required
                    className="appearance-none w-96 rounded-none px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 "
                    placeholder="Valor"
                    onChange={(e) => handle(e)}
                  />
                </div>
                <div className="grid grid-cols-2 px-4 py-2 gap-2 place-content-center">
                  <button
                    onClick={submit}
                    className=" rounded px-2 py-2 text-white  bg-green-500 border-none "
                  >
                    Adicionar
                  </button>
                  <button
                    onClick={popUpCreate}
                    className="rounded px-2 py-2 text-white bg-red-500 border-none "
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid justify-items-end px-10 py-10 hover:bg-white">
          <button className="rounded-full w-20 h-20" onClick={() => submit()}>
            <PlusIcon className="w-9 place-items-center" />
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Expense;