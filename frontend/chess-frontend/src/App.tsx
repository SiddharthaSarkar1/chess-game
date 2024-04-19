import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {


  return (
    <>
      <BrowserRouter basename='/app'>
        <Routes>
          <Route path='/' /> { /* Renders at /app/  */} 
        </Routes>
      </BrowserRouter>

      <button className='p-2 bg-red-200'>
        Join Room
      </button>
    </>
  )
}

export default App
