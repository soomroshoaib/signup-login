import React, { useState } from 'react'
import { NavLink , useNavigate} from 'react-router-dom';
import  './mix.css';

function Login() {
  const [pasShow, setpasShow] = useState(false)

  const [inpval, setinpval] = useState({
    email:'',
    password:'', 
  });
  // console.log(inpval)

  const history = useNavigate()

  const setval = (e)=>{
    const {name,value} = e.target
    // console.log(e.target.value)
    setinpval(()=>{
      return{
        ...inpval, 
        [name]:value
    }})
  }

  const loginuser = async (e) =>{
    e.preventDefault()
    const {email, password} = inpval

    if(email === ""){
       alert("please inter your email")
    }else if(!email.includes('@')){
      alert("Enter your vaild email")
    }else if(password === ""){
      alert("Please Enter your password")
    }else if(password.length < 6){
      alert("password must be 6 latter")
    }else{
      //console.log("user Login succesfully done ")
      
      const data = await fetch("/login",{
        method:"POST",
        headers:{
          'Content-Type':"application/json"
        },
        body:JSON.stringify({
          email,password  
        })
      })
      const res = await data.json()
       console.log(res)
        if(res.status === 201){
          // console.log("result: ", res.result);
          // console.log("token: ", res.result.token);
         localStorage.setItem("usersdatatoken", res.result.token)
         history('/dash')
          setinpval({...inpval,email:"",password:""})
        }
          
    }
  }
  return (
    <>
    <section>
      <div className='form_data'>
        <div className='form_heading'>
          <h1>Welcome Back ,  Log In</h1>
          <p>Hi, we are you glad you are back. please Login </p>
        </div>
        <form>
          <div className='form_input'>
            <label>Email</label>
            <input type='email' name='email' value={inpval.email} onChange={setval} id='email' placeholder='Enter your email'/>
          </div>
          <div className='form_input'>
            <label htmlFor=''>Password</label>
            <div className='two'>
            <input type={!pasShow ? "password" : "text"} onChange={setval} value={inpval.password} name='password' id='password' placeholder='Enter your password'/>
            <div className='showpass' onClick={()=> setpasShow(!pasShow)}>
              {!pasShow ? "Show" : "Hide"}
            </div>
            </div>
          </div>
          <button className='btn' onClick={loginuser} >Login</button>
          <p>Don't have an Account ? <NavLink to='/register'> SignUp</NavLink>  </p>
        </form>
      </div>
    </section>
    </>
  )
}

export default Login