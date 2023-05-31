import './App.css'
import { Routes, Route } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import HomePage from './Components/HomePage/HomePage'
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
