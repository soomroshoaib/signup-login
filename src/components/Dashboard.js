import React, { useContext , useEffect} from 'react'
import  {LoginContext}  from './ContextProvider/Context';
import {useNavigate} from 'react-router-dom';
import Navbar from '../component/navbar/Navbar';
import Intro from '../component/intro/Intro';
import Skills from '../component/Skills/Skills';
import Work from '../component/Work/Work';
import Contact from '../component/Contact/Contact';
import Fotter from '../component/footer/Fotter';


function Dashboard() {
  const {loginData, setloginData} = useContext(LoginContext);
  const navigate  = useNavigate()

  useEffect(()=>{
    getUser()
  },[])

  const  getUser = async ()=>{
    let token = localStorage.getItem("usersdatatoken");
    //  console.log("token: " , token)
    const  res =  await fetch("/validuser",{
      method:"GET",
      headers:{
        "Content-Type": "application/json",
        "Authorization":token
      }
    })
       const data = await res.json()
       setloginData(data )
    if(data.status === 401 || !data){
      navigate ("*")
    }else{
       setloginData(data)
      navigate ("/dash")
    }
}
  return (
    // <div style={{display:'flex', flexDirection:'column',alignItems:'center'}}>
    //   <img src="./640849.png"  style={{width:'200px', marginTop:'20px', alignItems:'center'}} alt='soomro' />
    //   <h1> User Email :  { loginData?.validuserOne.email} </h1>
    // </div>
    <div>
    <Navbar />
    <Intro />
    <Skills />
    <Work />
    <Contact />
    <Fotter /> 
   
  </div>
  )
}

export default Dashboard

