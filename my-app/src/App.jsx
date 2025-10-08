import React from 'react'
import routes from './routes.js'
import { useRoutes } from 'react-router-dom'
import './App.css'

function App() {

  let router =  useRoutes(routes)

  return (
    <>
    <h1>test</h1>
      {router}
    </>
  )
}

export default App
