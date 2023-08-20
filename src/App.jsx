import React from 'react'
import Form from './component/Form.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import  Api  from './component/API/Api.jsx'

export const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Form/>}/>
      <Route path = "/api" element={<Api/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}
export default App