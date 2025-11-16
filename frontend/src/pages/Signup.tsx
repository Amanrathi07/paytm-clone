import { useState } from "react";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

interface SignupForm {
  name: string;
  email: string;
  password: string;
}

interface props {
  setAuth : (value:boolean)=>void
}

export default function Signup({setAuth}:props) {

  let navigate = useNavigate();  


  const [form, setForm] = useState<SignupForm>({
    name: "",
    email: "",
    password: ""
  });

  async function formhandel(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await axios.post(`${import.meta.env.VITE_BASE_URL}/auth/v1/signup`,{...form},{withCredentials:true})
    setAuth(true)
     await navigate("/")

  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 to-slate-700 p-6">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl space-y-6">
        
        <h2 className="text-3xl font-semibold text-white text-center">Create an Account</h2>
        <p className="text-center text-gray-300">Signup to continue</p>

        <div className="space-y-5">
         <form onSubmit={(e)=>{formhandel(e)}} >
           <Input
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <Input
            placeholder="Email"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <Input
            placeholder="Password"
            type="password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          <Button type="submit">Signup</Button>
         </form>
        </div>

        <p className="text-center text-gray-300">
          Already have an account?{" "}
          <Link to="/signin" className="text-blue-400 hover:underline">
            Signin
          </Link>
        </p>
      </div>
    </div>
  );
}
