import Login from './assets/components/login'
import Home from './assets/components/home'
import {Route, Routes } from 'react-router-dom'
import Details from './assets/components/Details'
import Photo from './assets/components/photo'


function App() {

  return (
    <>
      <div className='m-[3rem] mt-[3rem]'>

        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/Details' element={<Details />} />
          <Route path='/Photo' element={<Photo/>} />
        </Routes>
      </div>
    </>
  )
}

export default App
