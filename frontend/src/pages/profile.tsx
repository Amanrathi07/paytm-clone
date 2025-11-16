import axios from "axios";
import { useEffect } from "react";

export default function Profile({ user }) {

    useEffect(()=>{

      getUserData()
   
    },[]);
    
    async function getUserData(){
       try {
      const res = await axios.get(
        "http://localhost:3000/auth/v1/user",
       {withCredentials:true}
      );

      console.log("User Data:", res.data);
    } catch (err) {
      console.error("Failed to fetch user data:", err);
    }
    }



  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-white/10">

        {/* heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold text-white">My Profile</h1>
          <p className="text-slate-300 text-sm mt-1">Account details</p>
        </div>

        <div className="flex flex-col gap-5">

          {/* Name */}
          <div className="flex flex-col gap-1">
            <label className="text-sm text-slate-300">Full Name</label>
            <div className="p-3 rounded-lg bg-white/10 border border-white/10 text-white">
              {user?.name}
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1">
            <label className="text-sm text-slate-300">Email</label>
            <div className="p-3 rounded-lg bg-white/10 border border-white/10 text-white">
              {user?.email}
            </div>
          </div>

          {/* Account Balance */}
          <div className="flex flex-col gap-1">
            <label className="text-sm text-slate-300">Account Balance</label>
            <div className="p-3 rounded-lg bg-white/10 border border-white/10 text-white font-semibold">
              ₹ {user?.balance}
            </div>
          </div>

          {/* Created At */}
          <div className="flex flex-col gap-1">
            <label className="text-sm text-slate-300">Created At</label>
            <div className="p-3 rounded-lg bg-white/10 border border-white/10 text-white">
              {new Date(user?.createdAt).toLocaleDateString()}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
