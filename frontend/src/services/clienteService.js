import axios from 'axios'

const API_URL = 'http://localhost:8080/clientes'

export const listarClientes = () => {
    return axios.get(API_URL)
}

export const buscarClientePorId = (id) => {
    return axios.get(`${API_URL}/${id}`)
}

export const cadastrarCliente = (cliente) => {
    return axios.post(API_URL, cliente)
}

export const atualizarCliente = (id, cliente) => {
    return axios.put(`${API_URL}/${id}`, cliente)
}

export const deletarCliente = (id) => {
    return axios.delete(`${API_URL}/${id}`)
}