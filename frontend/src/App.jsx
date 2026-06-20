import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ClientesPage from './pages/ClientesPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClientesPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App