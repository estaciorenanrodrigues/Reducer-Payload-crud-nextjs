'use client';
import { FormEvent, useReducer, useState } from "react";
import ReducerCrud from "./reducer";
import { Aluno } from './types';


export default function Home() {

  const [name, setName] = useState<string>('')
  const [state, dispatch] = useReducer(ReducerCrud, [] as Aluno[])

  const handleName = (e: FormEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value)
  }

  const handleAdd = () => {
    dispatch({
      type: 'add',
      payload: {
        id: state.length + 1,
        name: name
      }
    })
    setName('')
  }

  const handleEdit = (payload: Aluno) => {
    const resultado = window.prompt("Informe o novo nome", payload.name);
    if (resultado) {
      dispatch({
        type: 'edit',
        payload: {
          id: payload.id,
          name: resultado
        }
      })
    }
  }

  const handleDel = (id: number) => {
    dispatch({
      type: 'del',
      payload: { id: id }
    })
  }

  return (
    <div className="container min-h-lvh bg-blue-950">
      <div className="flex flex-col justify-center w-2xl m-auto ">
        <div className="flex flex-col text-center">
          <h1 className="text-amber-50 font-bold text-3xl my-5">Cadastro de Nomes</h1>
          <div className="mb-4">
            <input type="text" value={name} onChange={handleName} className="bg-amber-50 rounded-md h-8 mx-2" />
            <button onClick={handleAdd} className="bg-blue-400 rounded-md px-3 py-1 text-amber-50">Cadastrar</button>
          </div>

        </div>
        <div>
          {state?.length ? (
            <ul>
              {
                state.map((i) =>
                  <div className="flex justify-between">
                    <li className="text-amber-50 text-2xl">{i?.id + " - " + i?.name}</li>
                    <div>
                      <button onClick={() => handleEdit(i)}>✍</button>
                      <button onClick={() => handleDel(i.id)}>❌</button>
                    </div>
                  </div>
                )
              }
            </ul>
          )
            :
            <div className=" text-amber-50 text-center">
              <p>Nenhuma nome foi encontrado</p>
            </div>
          }
        </div>
      </div>
    </div>
  );
}
