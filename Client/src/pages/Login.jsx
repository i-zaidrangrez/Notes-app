import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api.js";

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async(e)=>{
        e.preventDefault()
        try {
          setLoading(true)
          const res = await api.post('/auth/login',{
              email,
              password
          })
          setEmail('')
          setPassword('')
          console.log("Logged In")
          navigate('/notes')
        } catch (error) {
          console.log(error)
        }finally{
          setLoading(false)
        }
    }

  return (
    <div className="h-screen w-full bg-gray-300 flex items-center justify-center">
      <div className="h-full bg-white w-full  md:w-8/10 md:h-8/10 lg:8/10 lg:8/10 rounded-2xl flex">
        <div className="w-9/10 lg:w-1/2 md:w-1/2  flex flex-col place-content-between">
          <h1 className="my-5 text-2xl font-medium mx-10 text-blue-700">
            Notes
          </h1>
          <div className=" w-full h-2/3 mx-10 my-5">
            <div className="h-1/5 w-full  flex flex-col gap-1">
              <h3 className="text-lg font-mono">LOG IN</h3>
              <p className="text-gray-500 text-sm">
                Welcome Back! Please enter your details...
              </p>
            </div>
            <form className="flex flex-col gap-3" onSubmit={(e)=>{handleSubmit(e)}}>
              <div className="flex flex-col gap-1 items-start">
                <label className="flex items-start"><span className="text-red-500 text-[7px] ">&#10040;</span>Email</label>
                <input value={email} onChange={(e)=>{
                    setEmail(e.target.value)
                }} className="w-9/10 px-2 py-1 border border-black rounded-sm outline-0 hover:border-blue-600" type="text" placeholder="Enter Your Email" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="flex items-start"><span className="text-red-500 text-[7px] ">&#10040;</span>Password</label>
                <input value={password} onChange={(e)=>{
                    setPassword(e.target.value)
                }} className="w-9/10 px-2 py-1 border border-black rounded-sm outline-0 hover:border-blue-600" type="password" placeholder="Enter Your Password" />
              </div>
                <div className="h-3 -mt-2 w-9/10  flex place-content-between">
                    <Link className="text-xs text-blue-800 font-medium underline">Terms &#38; Condition</Link>
                    <Link className="text-xs text-blue-900 font-medium">Forgot Password?</Link>
                </div>
                <button className="w-9/10 bg-blue-600 text-white p-2 rounded-2xl mt-2" disabled ={loading}>{loading? "Loging in.." : "Log in"}</button>
                <p className="text-xs w-9/10 text-gray-600 text-center">Dont have an Account ? <Link to='/register' className="text-xs text-blue-600">Sign Up</Link></p>
            </form>
          </div>
          <div className="h-1/10 w-full">
            <p className="text-xs w-full text-center text-blue-600 underline  ">Back To Landing Page</p>
          </div>
        </div>
        <div className="w-0 bg-lime-50  lg:w-1/2">
            <img src="https://i.pinimg.com/736x/c9/57/b6/c957b6c2e616aa1f34a553dfba15e348.jpg" className="h-full w-full object-cover rounded-2xl" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
