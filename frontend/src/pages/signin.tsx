import { Link } from "react-router-dom";
import Heading from "../component/heading";
import Input from "../component/input";
import { useState } from "react";
import axios from "axios";

export default function Signin() {
        const [data , setData] = useState({email:"",password:"" })
    
    async function formHandel() {
         const responce =await axios.post("http://localhost:3000/auth/v1/signin",data) ;
        console.log(responce)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-white/10">

        <Heading
          title="Welcome Back"
          subTitle="Login to continue"
        />

        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            formHandel();
          }}
        >
          <Input
            label="Email"
            type="email"
            placeholder="you@example.com"
            onChange={(e)=>{setData((data)=>({...data,email:e.target.value}))}}
          />

          <Input
            label="Password"
            type="password"
            placeholder="••••••••"
            onChange={(e)=>{setData((data)=>({...data,password:e.target.value}))}}
          />

          <button
            type="submit"
            className="mt-2 p-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold transition active:scale-95"
          >
            Login
          </button>
        </form>

        <p className="text-center text-slate-300 text-sm mt-6">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-400 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
