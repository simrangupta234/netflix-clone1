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
import { useEffect, useState } from "react";

const App = () => {
  const [isLoggedIn, setIsLoggedIn]=useState(false)
  const [currentloggedin, setCurrentloggedin] = useState("");

  var inputUserEmail = localStorage.getItem("userEmail");
  var inputUserPassword = localStorage.getItem("userPassword");

  useEffect(() => {
    if (inputUserEmail && inputUserPassword) {
      setCurrentloggedin(
        sessionStorage.setItem("currentloggedin", inputUserEmail)
      );
    }

    setCurrentloggedin(sessionStorage.getItem("currentloggedin"));
    if (currentloggedin) {
      setIsLoggedIn(true)
    } else {
     setIsLoggedIn(false)
    }
  
  },[inputUserEmail, inputUserPassword, currentloggedin]);
 
  console.log("currentLoggedIn", currentloggedin);
  console.log("isloggedIn", isLoggedIn);

  return (
    <EmailProvider>
      <Routes>
        <Route path="/user" element={<PrivateRoute isLoggedIn={isLoggedIn} />}>
          <Route
            path="moviehome"
            element={<MovieHome isLoggedIn={isLoggedIn} />}
          />
        </Route>

        <Route path="/" element={<Login isLoggedIn={isLoggedIn} />} />
        <Route path="/login" element={<Loginpage2 isLoggedIn={isLoggedIn} />} />
        <Route path="/signin" element={<SignIn />} />

        <Route
          path="/signup"
          element={<Signup isLoggedIn={isLoggedIn} />}
        ></Route>
        <Route
          path="/signupform"
          element={<Signuppage2 isLoggedIn={isLoggedIn} />}
        />
        <Route path="/plans" element={<Plan isLoggedIn={isLoggedIn} />} />
        <Route
          path="/planform"
          element={<PlanForm isLoggedIn={isLoggedIn} />}
        />
        <Route path="/payment" element={<Pay isLoggedIn={isLoggedIn} />} />
        {/* <Route path="*" element={<Navigate to="/" />}></Route> */}
      </Routes>
    </EmailProvider>
  );
};
export default App;
