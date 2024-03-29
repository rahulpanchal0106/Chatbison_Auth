import { useState } from "react";

function SignUp(){
    const [email,setEmail] = useState('user4@email.com');
    const [password, setPassword] = useState('444');
    function getLogin(){
        console.log(email, password);
        const signUpData={
            'email':email,
            'password':password
        }
       
        fetch(`http://localhost:3000/signup`,{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(signUpData)
        }).then(res=>{
          if(res.ok){
            console.log("Registation successfull")
            window.location.assign('http://localhost:3000/userLogin')
          }else{
            console.log("User Already Exists")
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
                <div className="text-size-2xl text-white p-3 w-full text-align-center">SignUp</div>
                <input type='email' placeholder='Email' required className='bg-black text-white p-6 rounded-2xl' onChange={(e)=>handleEmail(e)} />
                <input type='password' placeholder='Password' required className='bg-black text-white p-6 rounded-2xl' onChange={(e)=>handlePassword(e)} />
                <button className='bg-purple-300 rounded-2xl p-6 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none' onClick={getLogin}>SignUp</button>
            </div>
        </>
    )
}


export default SignUp