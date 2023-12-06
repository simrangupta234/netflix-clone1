import "./App.css";
import { Routes, Route } from "react-router-dom";

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
import PrivateRoute from "./components/PrivateRoute";

// import { useState } from "react";

const App = () => {
  // const [token, setToken] = useState();

  // if(!token){
  //   return <Login setToken={setToken} />
  // }
  // const navigate = useNavigate();
  // var isLoggedIn = false;
  // var inputUserEmail = localStorage.getItem("userEmail");
  //  var inputUserPassword = localStorage.getItem("userPassword");
  //  if(inputUserEmail && inputUserPassword){
  //   isLoggedIn= true;
  //  }

  return (
    <EmailProvider>
      <Routes>
        <Route path="/user" element={<PrivateRoute/>}>
          <Route path="moviehome" element={<MovieHome />} />
        </Route>

        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Loginpage2 />} />
        <Route path="/signin" element={<SignIn />} />

        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/signupform" element={<Signuppage2 />} />
        <Route path="/plans" element={<Plan />} />
        <Route path="/planform" element={<PlanForm />} />
        <Route path="/payment" element={<Pay />} />
        {/* <Route path="*" element={<Navigate to="/" />}></Route> */}
      </Routes>
    </EmailProvider>
  );
};
export default App;
