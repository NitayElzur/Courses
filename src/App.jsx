import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import HomePage from './Components/HomePage/HomePage';
import Courses from './Components/Courses/Courses';
import ProductPage from './Components/ProductPage/ProductPage';
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage/>}/>
          <Route path='courses' element={<Courses/>}/>
          <Route path='ProductPage' element={<ProductPage/>}/>
          <Route path='ProductPage/:id' element={<ProductPage/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
