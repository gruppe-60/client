// import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout/Layout'
import routes from './routes/routes'
import "./styles/App.css"

function App() {


  return (
    <div className="App">
     <Layout>
      <Routes>
        {routes.map((route) => {
          return <Route key={route.id} {...route} />;
        })}
      </Routes>
    </Layout>
    </div>
  )
}

export default App
