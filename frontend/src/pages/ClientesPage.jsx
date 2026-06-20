import { useEffect, useState } from 'react'
import { listarClientes, deletarCliente } from '../services/clienteService'

function ClientesPage() {
  const [clientes, setClientes] = useState([])

  useEffect(() => {
    carregarClientes()
  }, [])

  const carregarClientes = async () => {
    const response = await listarClientes()
    setClientes(response.data)
  }

  const handleDeletar = async (id) => {
    await deletarCliente(id)
    carregarClientes()
  }

  return (
    <div>
      <h1>Clientes</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>CPF</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map(cliente => (
            <tr key={cliente.id}>
              <td>{cliente.id}</td>
              <td>{cliente.nome}</td>
              <td>{cliente.email}</td>
              <td>{cliente.telefone}</td>
              <td>{cliente.cpf}</td>
              <td>
                <button onClick={() => handleDeletar(cliente.id)}>
                  Deletar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ClientesPage