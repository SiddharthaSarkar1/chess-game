import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Landing } from './screens/Landing'
import { Game } from './screens/Game'

function App() {


  return (
    <>
    <div className='h-screen bg-slate-950'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} /> 
          <Route path='/game' element={<Game />} />
        </Routes>
      </BrowserRouter>
{/* 
      <button className='p-2 bg-red-200'>
        Join Room
      </button> */}
      </div>
    </>
  )
}

export default App
