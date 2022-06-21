import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { TrashIcon, PencilIcon } from '@heroicons/react/outline';
const List = () => {
  const [users, setUsers] = useState([]);
  const [inputVisbility, setInputVisility] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  function popUp() {
    setInputVisility(!inputVisbility);
  }

  function update() {
    api
      .put(`users/${id}`, {
        nome: name,
        senha: password,
        email: email,
      })
      .then((res) => {
        //console.log(res.data);
        alert('Usuário Atualizado com Sucesso!');
        edit();
        window.location.reload(false);
      })
      .catch((err) => {
        alert('Erro interno!');
      });
  }

  async function edit(id) {
    popUp();
    await api.get(`users/${id}`).then((response) => {
      setId(response.data.id);
      setName(response.data.nome);
      setEmail(response.data.email);
      setPassword(response.data.senha);
    });
  }

  useEffect(() => {
    api.get('users').then((response) => {
      setUsers(response.data);
    });
  }, []);

  async function deleteUser(id) {
    await api.delete(`users/${id}`).then(() => {
      alert('Usuário Deletado com Sucesso!');
      window.location.reload(false);
    });
  }

  return (
    <div className="grid h-screen place-items-center hover:bg-white">
      <table className="table-auto bg-white-400 border-collapse border border-slate-400">
        <thead>
          <tr className="border">
            <th>Nome</th>
            <th>Email</th>
            <th>Editar</th>
            <th>Excluir</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, key) => {
            return (
              <tr key={key}>
                <td className="border">{user.nome}</td>
                <td className="border">{user.email}</td>
                <td className="border">
                  <button
                    className="bg-transparent border-none"
                    onClick={() => edit(user.id)}
                  >
                    <PencilIcon className="w-8 fill-yellow-500" />
                  </button>
                </td>
                <td className="border">
                  <button
                    className="bg-transparent border-none"
                    onClick={() => deleteUser(user.id)}
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
        style={{ display: inputVisbility ? 'flex' : 'none' }}
        className="bg-transparency fixed"
      >
        <div className="grid h-screen place-items-center">
          <div className="bg-white py-12 px-12 border-4 border-indigo-500 rounded-xl ">
            <div>
              <h1> Atualizar Usuário</h1>
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
                value={name}
                onInput={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="senha" className="sr-only">
                Senha
              </label>
              <input
                id="senha"
                name="{data.senha}"
                type="text"
                required
                className="appearance-none w-96 rounded-none px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 "
                placeholder="Senha"
                onInput={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="{data.email}"
                type="email"
                autoComplete="email"
                required
                className="appearance-none w-96 rounded-none px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 "
                placeholder="Email"
                value={email}
                onInput={(e) => setEmail(e.target.value)}
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
    </div>
  );
};

export default List;
