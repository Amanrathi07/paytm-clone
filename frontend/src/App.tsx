import { Route, Routes } from "react-router-dom";
import Signup from "./pages/signup";
import Signin from "./pages/signin";

export default function App (){
  return(
   <Routes>
    <Route path="/"  element={<div>home</div>} />
    <Route path="/dashboard"  element={<div>dashboard</div>}/>
    <Route path="/signin"  element={<Signin />}/>
    <Route path="/signup"  element={<Signup />}/>
    <Route path="/profile"  element={<div>profile</div>}/>
    <Route path="/profile"  element={<div>transfer</div>}/>
   </Routes>
  )
}