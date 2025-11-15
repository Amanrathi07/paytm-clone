import { Route, Routes } from "react-router-dom";


export default function App() {
  return (
    <Routes>
      <Route path="/"  element={<div>home</div>} />
      <Route path="/about"  element={<div>about</div>} />
    </Routes>
  );
}
