import { useEffect, useState } from "react";
import Navbar from "../components/ui/Navbar";
import { axiosInstance } from "../lib/axios";

interface ResponseProps {
  myData: { name: string; email: string; createdAt: string };
  accoutData: { balance: number };
}

export default function Profile() {
  const [data, setData] = useState<ResponseProps | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axiosInstance.get("/auth/user")
        setData(response.data);
      } catch (err) {
        console.error("Error fetching user data:", err);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 to-slate-700">
        <p className="text-white text-xl animate-pulse">Loading...</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 to-slate-700">
        <p className="text-red-500 text-xl">Failed to load profile.</p>
      </div>
    );
  }

  return (
    <div className="bg-slate-900 min-h-screen">
      <Navbar />
      <div className="flex items-center justify-center p-6">
        <div className="w-full max-w-lg bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 space-y-6 shadow-lg">
          <h2 className="text-3xl font-bold text-white text-center mb-4">Profile</h2>

          {/* User Info */}
          <div className="space-y-2">
            <p className="text-gray-300">
              <span className="font-semibold text-white">Name:</span> {data.myData.name}
            </p>
            <p className="text-gray-300">
              <span className="font-semibold text-white">Email:</span> {data.myData.email}
            </p>
          </div>

          {/* Account Info */}
          <div className="space-y-2 mt-4">
            <p className="text-gray-300">
              <span className="font-semibold text-white">Account Balance:</span> ${data.accoutData.balance}
            </p>
            <p className="text-gray-300">
              <span className="font-semibold text-white">Account Created:</span>{" "}
              {new Date(data.myData.createdAt).toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
