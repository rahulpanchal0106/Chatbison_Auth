import { useState } from 'react'
import LogIn from './LogIn.jsx';
import SignUp from './SignUp.jsx';
import './App.css'

function App() {
  
  const [account,setAccount] = useState(true);

  function handleAccount(e){

    setAccount(!account)
  }

  return (
    <>
      <div className='bg-red-600 text-white p-6 rounded-2xl mb-5'>Currently under development</div>
      {
        account?
        <LogIn/>:
        <SignUp/>
      }
      <div className='p-6 text-white rounded-2xl bg-black mt-5'>{account?"Not an account? ":"Already an Account? "} <button onClick={(e)=>handleAccount(e)} className='text-blue-500 decoration-blue-500 underline underline-offset-2' >{account?"SignUp":"LogIn"}</button></div>
    </>
  )
}

export default App
