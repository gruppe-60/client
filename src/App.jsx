// import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'

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
