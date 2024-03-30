import { useState } from "react";

function SignUp(){
    const [email,setEmail] = useState('user4@email.com');
    const [password, setPassword] = useState('444');
    const [password_checker,setPasssword_checker] = useState();
    const [isLoading,setLoading] = useState(false);
    function getLogin(){
      
      var signUpData;
        if(password==password_checker){
          setLoading(true)
          console.log(email, password);
          signUpData={
            'email':email,
            'password':password
          }
          fetch(`https://chatbison.onrender.com/signup`,{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(signUpData)
        }).then(res=>{
          if(res.ok){
            setLoading(false);
            console.log("Registation successfull")
            window.alert("Registration successfull");
            window.alert("Further updates on user personalizations are coming soon...")
            window.location.assign('https://rahulpanchal0106.github.io/Chatbison_Auth/')
          }else{
            setLoading(false);
            console.log("User Already Exists");
            window.alert("User already Exists");
          }
        }). catch(err=>{
          setLoading(false);
          console.error(err);
          window.alert(err);
        })
        }else{
          window.alert("Please Verify your password")
        }
       
        
      }
      function handleEmail(e){
        setEmail(e.target.value);
      }
      function handlePassword(e){
        if(password_checker==password){
          console.log("Passwords matched!");
          
        }else{
          console.log("Passwords does not match");
        
        }
        setPassword(e.target.value);
        
      }
      function handlePasswordChecker(e){
        if(password_checker==password){
          console.log("Passwords matched!");
          
        }else{
          console.log("Passwords does not match");
        }
        setPasssword_checker(e.target.value);
        
      }
    return (
        <>
            <div className='container rounded-2xl p-5 w-1/2 backdrop-blur-md flex flex-col gap-2'>
                <div className="text-size-2xl text-white p-3 w-full text-align-center">ChatBison | SignUp</div>
                <input type='email' placeholder='Email' required className='bg-black text-white p-6 rounded-2xl' onChange={(e)=>handleEmail(e)} />
                <input type='password' placeholder='Password' required className='bg-black text-white p-6 rounded-2xl' onChange={(e)=>handlePassword(e)} />
                {
                  password==password_checker?
                  <div className="p-3 text-green-800 text-md">
                    Passwords matched
                  </div>:
                  <div className="p-3 text-red-800 text-md">
                    Passwords did not match
                  </div>
                }
                <input type='password' placeholder='Verify Password' required className='bg-black text-white p-6 rounded-2xl' onChange={(e)=>handlePasswordChecker(e)} />
                <button className='bg-purple-300 rounded-2xl p-6 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none' onClick={getLogin}>
                  {
                    isLoading?
                    "Please wait...":
                    "SignUp"
                  }
                </button>
            </div>
        </>
    )
}


export default SignUp