import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Home } from './ScreenComponents'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FormPostTask } from './ScreenComponents/FormPostTask'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path={"/"} element={ <Home /> } />
          <Route path={"/createTask"} element={ <FormPostTask /> } />
        </Routes>
      </BrowserRouter>
  
    </>
  )
}

export default App
