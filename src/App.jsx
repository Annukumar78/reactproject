import React, { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import authService from './appwrite/auth'
import {login, logout} from './store/authSlice';
import Header from './componets/Header/Header'
import Footer from './componets/Footer/Footer'


import './App.css'

function App() {
  const [loading, setloading] = useState(true)
  const dispatch = useDispatch()

  useEffect(()=>{

    authService.getCurrentUser()
    .then((userData)=>{
        if(userData){
          dispatch(login({userData}))
        }else{
          dispatch(logout())
        }
    })
    .finally(()=>
      setloading(false)
    )
  },)


  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-600 '>
      <div className='w-full block'>
        <Header />
        <main >
        <h1> Prograce are the on the way</h1>
        </main>
        <Footer />
      </div>
    </div>
  ) : (null)
}

export default App
