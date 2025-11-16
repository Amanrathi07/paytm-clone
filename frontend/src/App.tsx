import { Routes, Route, Navigate } from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Profile from "./pages/Profile";
import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  async function checkAuth() {
    try {
      const response = (
        await axios.get(`${import.meta.env.VITE_BASE_URL}/auth/v1/check`, {
          withCredentials: true,
        })
      ).data;

      if (response.userID) setAuth(true);
      else setAuth(false);
    } catch (err) {
      setAuth(false);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    checkAuth();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-white">
        Loading...
      </div>
    );
  }

  return (
    <Routes>
      <Route
        path="/"
        element={auth ? <div>Dashboard</div> : <Navigate to="/signin" />}
      />

      <Route
        path="/signin"
        element={auth ? <Navigate to="/" /> : <Signin setAuth={setAuth} />}
      />

      <Route
        path="/signup"
        element={auth ? <Navigate to="/" /> : <Signup setAuth={setAuth} />}
      />

      <Route
        path="/profile"
        element={auth ? <Profile /> : <Navigate to="/signin" />}
      />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
