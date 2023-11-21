import React from 'react'
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'
import Apitask from './components/Apitask'
import FormData from './components/Formdata'
import Signup from './components/Signup'
import Counter from './components/Counter'
import Localapi from './components/Localapi';




function App() {
  return (
    <>
    <Localapi/>
    {/* <Counter/> */}
    {/* <Signup/> */}
     {/* <Apitask/> */}
     {/* <FormData/>
     <ToastContainer /> */}
       </>
   
  )
}

export default App
