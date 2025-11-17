import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/ui/Navbar";
import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axios";

export default function Transfer() {
  const { reseverInfo } = useParams();
  //@ts-ignore
  const [name ,reseverID ] = reseverInfo?.split("~") 
  const [amount, setAmount] = useState<number>(0);
  const [loading, setLoading] = useState(false);

  async function formHandel(e: React.FormEvent) {
    e.preventDefault();
    if (amount <= 0) {
      toast.error("Please enter a valid amount.");
      return;
    }

    try {
      setLoading(true);
      const response = await axiosInstance.post("/transfer/transfer",{ amount, toAccount: reseverID })
      
      

      if (response.status === 200) {
        toast.success(response.data.message);
        setAmount(0);
      } else {
        toast.error(response.data.message || "Transfer failed.");
      }
    } catch (err: any) {
      console.error(err);
      toast.error(err?.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }


   
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-950 text-gray-100">
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-blue-500 text-center">
            Send Money to {name}
          </h2>

          <form onSubmit={formHandel} className="flex flex-col gap-4">
            <input
              type="number"
              value={amount}
              //@ts-ignore
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              className="p-3 rounded-lg bg-gray-700 border border-gray-600 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-500 hover:bg-blue-600 transition-colors text-gray-100 font-semibold py-3 rounded-lg disabled:opacity-50"
            >
              {loading ? "Sending..." : `Send Money `}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
