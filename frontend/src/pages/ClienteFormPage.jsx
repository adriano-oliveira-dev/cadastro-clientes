import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { cadastrarCliente, buscarClientePorId, atualizarCliente } from '../services/clienteService'

function ClienteFormPage() {
  const navigate = useNavigate()
  const { id } = useParams()

  const [form, setForm] = useState({
    nome: '',
    email: '',
    telefone: '',
    cpf: ''
  })

  useEffect(() => {
    if (id) {
      buscarClientePorId(id).then(response => {
        setForm(response.data)
      })
    }
  }, [id])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (id) {
      await atualizarCliente(id, form)
    } else {
      await cadastrarCliente(form)
    }
    navigate('/')
  }

  return (
    <div className="container">
      <h1>{id ? 'Editar Cliente' : 'Novo Cliente'}</h1>
      <div className="form-card">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nome</label>
            <input name="nome" value={form.nome} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input name="email" value={form.email} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Telefone</label>
            <input name="telefone" value={form.telefone} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>CPF</label>
            <input name="cpf" value={form.cpf} onChange={handleChange} />
          </div>
          <div className="form-actions">
            <button type="submit" className="btn-save">Salvar</button>
            <button type="button" className="btn-cancel" onClick={() => navigate('/')}>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ClienteFormPage