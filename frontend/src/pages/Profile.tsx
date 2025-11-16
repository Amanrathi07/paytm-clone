import axios from "axios";
import { useEffect, useState } from "react";

interface ResponseProps {
  myData: {
    name: string;
    email: string;
    createdAt: string;
  };
  accoutData: {
    balance: number;
  };
}

export default function Profile() {
  const [data, setData] = useState<ResponseProps | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const response = await axios.get<ResponseProps>(
        `${import.meta.env.VITE_BASE_URL}/auth/v1/profile`,
        { withCredentials: true }
      );
      setData(response.data);
    } catch (err) {
      console.error("Error fetching user data:", err);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 to-slate-700 p-6">
        <p className="text-white text-xl">Loading...</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 to-slate-700 p-6">
        <p className="text-red-500 text-xl">Failed to load profile.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 to-slate-700 p-6">
      <div className="w-full max-w-lg bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 space-y-6">
        <h2 className="text-3xl font-semibold text-white text-center">Profile</h2>

        {/* User Info */}
        <div className="space-y-3">
          <p className="text-gray-300">
            <span className="font-medium text-white">Name: </span> {data.myData.name}
          </p>
          <p className="text-gray-300">
            <span className="font-medium text-white">Email: </span> {data.myData.email}
          </p>
        </div>

        {/* Account Info */}
        <div className="space-y-3 mt-4">
          <p className="text-gray-300">
            <span className="font-medium text-white">Account Balance: </span> ${data.accoutData.balance}
          </p>
          <p className="text-gray-300">
            <span className="font-medium text-white">Account Created: </span>{" "}
            {new Date(data.myData.createdAt).toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}
