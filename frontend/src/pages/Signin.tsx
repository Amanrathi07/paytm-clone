import { useState } from "react";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";

interface SigninForm {
  email: string;
  password: string;
}

export default function Signin() {
  const [form, setForm] = useState<SigninForm>({
    email: "",
    password: ""
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 to-slate-700 p-6">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl space-y-6">

        <h2 className="text-3xl font-semibold text-white text-center">Welcome Back</h2>
        <p className="text-center text-gray-300">Signin to continue</p>

        <div className="space-y-5">
          <Input
            placeholder="Email"
            value={form.email}
            type="email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <Input
            placeholder="Password"
            type="password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          <Button type="submit">Signin</Button>
        </div>

        <p className="text-center text-gray-300">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-400 hover:underline">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}
