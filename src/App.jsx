import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.module.scss';
import Home from './components/Home/Home'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
