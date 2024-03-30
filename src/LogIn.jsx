import { useState } from 'react'
function LogIn(){
    const [email,setEmail] = useState('user4@email.com');
    const [password, setPassword] = useState('444');
    const [isLoading,setLoading] = useState(false);
    function getLogin(){
        setLoading(true)
        console.log(email, password);
        const queryParams = new URLSearchParams({
          email: email,
          password: password
        }).toString()
        fetch(`https://chatbison.onrender.com/userLogin?${queryParams}`).then(res=>{
          if(res.ok){
            setLoading(false)
            console.log("Login sucessfull")
            window.alert("Login successfull");
            window.alert("Updates on user data personalization are coming soon...")
            window.location.assign('https://chatbison.onrender.com/')
          }else if(res.status == 401){
            setLoading(false)
            window.alert("Incorrect password");
          }else if(res.status==404){
            setLoading(false)
            window.alert("User Not Found");
          }
        }). catch(err=>{
          setLoading(false)
          console.error(err);
          window.alert(err);
        })
      }
      function handleEmail(e){
        setEmail(e.target.value);
      }
      function handlePassword(e){
        setPassword(e.target.value);
      }
      
    return(
        <>
            <div className='container rounded-2xl p-5 w-1/2 backdrop-blur-md flex flex-col gap-2'>
                <div className="text-size-2xl text-white p-3 w-full text-align-center">ChatBison | LogIn</div>
                <input type='email' placeholder='Email' required className='bg-black text-white p-6 rounded-2xl' onChange={(e)=>handleEmail(e)} />
                <input type='password' placeholder='Password' required className='bg-black text-white p-6 rounded-2xl' onChange={(e)=>handlePassword(e)} />
                <button className='bg-purple-300 rounded-2xl p-6 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none' onClick={getLogin}>
                  {
                    isLoading?
                    "Logging you in..."
                    :
                    "Login"
                  }
                </button>
            </div>
        </>
    )
}

export default LogIn