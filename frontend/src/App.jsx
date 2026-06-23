import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ClientesPage from './pages/ClientesPage'
import ClienteFormPage from './pages/ClienteFormPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClientesPage />} />
        <Route path="/novo" element={<ClienteFormPage />} />
        <Route path="/editar/:id" element={<ClienteFormPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App