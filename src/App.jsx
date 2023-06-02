import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import HomePage from './Components/HomePage/HomePage';
import Courses from './Components/Courses/Courses';
import ProductPage from './Components/ProductPage/ProductPage';
import json from './json/review.json'
import { useContext, useEffect, useState } from 'react';
import { MainContext } from './Contexts/MainContext';
import Admin from './Components/Admin/Admin';
function App() {
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
            <Route path='admin' element={<Admin/>}/>
          </Route>
        </Routes>
      </MainContext.Provider>
    </>
  )
}

export default App
