import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'

function App() {

  return (
    <div className='page'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
      </Routes>
    </div>
  )
}

export default App
