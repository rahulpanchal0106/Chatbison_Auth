import { useState } from 'react'
import './App.css'

function App() {
  const [email,setEmail] = useState('user4@email.com');
  const [password, setPassword] = useState('444');
  function getLogin(){
    console.log(email, password);
    const queryParams = new URLSearchParams({
      email: email,
      password: password
    }).toString()
    fetch(`http://localhost:3000/userLogin?${queryParams}`).then(res=>{
      if(res.ok){
        console.log("Login sucessfull")
        window.location.assign('https://rahulpanchal0106.github.io/25React/')
      }else{
        console.log("Login failed")
      }
    }). catch(err=>{
      console.error(err);
    })
  }
  function handleEmail(e){
    setEmail(e.target.value);
  }
  function handlePassword(e){
    setPassword(e.target.value);
  }

  return (
    <>
      <div className='container rounded-2xl p-5 w-1/2 backdrop-blur-md flex flex-col gap-2'>
        <input type='email' placeholder='Email' required className='bg-black text-white p-6 rounded-2xl' onChange={(e)=>handleEmail(e)} />
        <input type='password' placeholder='Password' required className='bg-black text-white p-6 rounded-2xl' onChange={(e)=>handlePassword(e)} />
        <button className='bg-purple-300 rounded-2xl p-6 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none' onClick={getLogin}>Login</button>
      </div>
    </>
  )
}

export default App
