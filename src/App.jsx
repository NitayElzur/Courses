import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import HomePage from './Components/HomePage/HomePage';
import Courses from './Components/Courses/Courses';
import ProductPage from './Components/ProductPage/ProductPage';
import json from './json/review.json'
import { useContext, useEffect, useState } from 'react';
import { MainContext } from './Contexts/MainContext';
import AdminLogin from './Components/AdminLogin/AdminLogin';
import AdminPage from './Components/AdminPage/AdminPage';
function App() {
  const [isAdmin, setIsAdmin] = useState(false)
  const [data, setData] = useState(useContext(MainContext))
  useEffect(() => {
    setData(json);
  }, [json])
  return (
    <>
      <MainContext.Provider value={{data, setData}}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='courses' element={<Courses />} />
            <Route path='ProductPage' element={<ProductPage />} />
            <Route path='ProductPage/:id' element={<ProductPage />} />
            <Route path='login' element={<AdminLogin isAdmin={isAdmin} setIsAdmin={setIsAdmin}/>}/>
            <Route path='admin' element={<AdminPage isAdmin={isAdmin}/>}/>
          </Route>
        </Routes>
      </MainContext.Provider>
    </>
  )
}

export default App
