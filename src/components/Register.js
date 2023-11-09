import React  ,{ useState} from 'react'
import "./mix.css"
import { NavLink } from 'react-router-dom'

function Register() {
  const [pasShow, setpasShow] = useState(false)
  const [cpasShow, setCpasShow] = useState(false)

  const [inpval, setinpval] = useState({
    fname:"",
    email:'',
    password:'',
    cpassword:''
  });
  console.log(inpval)
  const setval = (e)=>{
    const {name,value} = e.target
    // console.log(e.target.value)
    setinpval(()=>{
      return{
        ...inpval, 
        [name]:value
    }})
  }
  const addUserdata = async(e)=>{
    e.preventDefault()
    const {fname,email,password,cpassword} = inpval;
    if(fname === ""){
      alert("please inter your name ")
    }else if(email === ""){
      alert("please inter your email")
    }else if(!email.includes('@')){
      alert("Enter your vaild email")
    }else if(password === ""){
      alert("Please Enter your password")
    }else if(password.length < 6){
      alert("password must be 6 latter")
    }else if(cpassword === ""){
      alert("please inter your correct password ")
    }else if(cpassword.length < 6){
      alert("Confirm password must be 6 latter")
    }else if(password !== cpassword){
      alert("password and confirm password is not match")
    }else{
     // console.log("user registration successfully done ")
     const data = await fetch("/register",{
      method:"POST",
      headers:{
        'Content-Type':"application/json"
      },
      body:JSON.stringify({
        fname,email,password,cpassword
      })
    })
        const res = await data.json()
       // console.log(res.status)
        if(res.status === 201){
          alert("user registration done ")
          setinpval({...inpval,fname:"",email:"",password:"",cpassword:""})
        }

    }

  }

  return (
    <>
       <section>
      <div className='form_data'>
        <div className='form_heading'>
          <h1>Welcome Back ,  SignUp</h1>
          <p style={{textAlign:'center'}}>Hi, we are you glad you will be using . Project Cloud to manage <br />
           your tasks! We hope that you will get Like it.</p>
        </div>
        <form>
        <div className='form_input'>
            <label>Name</label>
            <input type='text' style={{color:'white'}} name='fname' onChange={setval} value={inpval.fname} id='fname' placeholder='Enter your Name'/>
          </div>
          <div className='form_input'>
            <label>Email</label>
            <input type='email' style={{color:'white'}} name='email' onChange={setval} value={inpval.email} id='email' placeholder='Enter your email'/>
          </div>
          <div className='form_input'>
            <label htmlFor=''>Password</label>
            <div className='two'>
            <input style={{color:'white'}} type={!pasShow ? "password" : "text"} onChange={setval} value={inpval.password} name='password' id='password' placeholder='Enter your password'/>
            <div className='showpass' onClick={()=> setpasShow(!pasShow)}>
              {!pasShow ? "Show" : "Hide"}
            </div>
            </div>
          </div>
          <div className='form_input'>
            <label htmlFor=''>Confirm Password</label>
            <div className='two'>
            <input style={{color:'white'}} type={!cpasShow ? "password" : "text"} onChange={setval} name='cpassword' value={inpval.cpassword} id='cpassword' placeholder='Enter your confirm password'/>
            <div className='showpass' onClick={()=> setCpasShow(!cpasShow)}>
              {!pasShow ? "Show" : "Hide"}
            </div>
            </div>
          </div>
          <button className='btn' onClick={addUserdata}>SignUp</button>
          <p>Don't have an Account ? <NavLink to="/"> Login </NavLink>  </p>
        </form>
      </div>
    </section>
    </>
  )
}

export default Register