import "./App.css";
import { Routes, Route, } from "react-router-dom";

import Login from "./components/Login";
import Loginpage2 from "./components/Loginpage2";
import MovieHome from "./components/MovieHome";
import SignIn from "./components/SignIn";
import Signup from "./components/Signup";
import Signuppage2 from "./components/Signuppage2";
import Plan from "./components/Plan";
import PlanForm from "./components/PlanForm";
import Pay from "./components/Pay";
import { EmailProvider } from "./components/EmailContext";

// import { useState } from "react";

const App =() =>{
  // const [token, setToken] = useState();

  // if(!token){
  //   return <Login setToken={setToken} />
  // }
// const navigate = useNavigate();


  return (
  <EmailProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/loginauth" element={<Loginpage2 />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/moviehome" element={<MovieHome />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signupform" element={<Signuppage2/>} />
        <Route path="/plans" element={<Plan />} />
        <Route path="/planform" element={<PlanForm/>} />
        <Route path="/payment" element={<Pay/>} />
        {/* <Route path="*" element={<Navigate to="/" />}></Route> */}

      </Routes>
      </EmailProvider>
  );
}
export default App;