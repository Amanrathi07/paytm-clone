import { useEffect, useState } from "react";
import Navbar from "../components/ui/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";

interface User {
  _id: string;
  name: string;
  email: string;
}

export default function Dashboard() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    try {
      const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/auth/v1/users`, {
        withCredentials: true,
      });
      setUsers(res.data.allUser);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch users.");
    }
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <Navbar  />
      <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-blue-500">Users</h1>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        {users.length === 0 && !error ? (
          <p>Loading users...</p>
        ) : (
          <div className="grid gap-4">
            {users.map((user) => (
              <div
                key={user._id}
                className="flex justify-between items-center p-4 bg-gray-800 rounded-xl shadow-md hover:bg-gray-700 transition"
              >
                <div>
                  <h2 className="text-xl font-semibold text-gray-100">{user.name}</h2>
                  <p className="text-gray-400">{user.email}</p>
                </div>
                <Link
                  to={`/transfer/${user.name}~${user._id}`}
                  className="bg-blue-500 text-gray-100 px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                >
                  Send Money
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
