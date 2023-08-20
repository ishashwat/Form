import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import data from './component/Data/data.json'
import DepartmentList from './component/checkbox/DepartmentList.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <DepartmentList data={data} />
  </React.StrictMode>,
)
