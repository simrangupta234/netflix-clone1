import { useEffect } from "react";
import { useAuth } from "./AuthContext";
import Login from "./Login";
import Home from "./Home";
import EditDb from "./EditDb";
import SignIn from "./SignIn";

const PrivateRoute = () => {
  const { setLoggedInValue } = useAuth();

  const accessToken = localStorage.getItem("accessToken");
  useEffect(() => {
    if (accessToken) {
      setLoggedInValue(true);
    }
  }, []);

  function hasJWT() {
    let flag = false;
    localStorage.getItem("accessToken") ? (flag = true) : (flag = false);

    return flag;
  }

  // function hasAdmin() {
  //   let flag = false;
  //   const isAdmin =localStorage.getItem("AdminEmail");
  //   isAdmin ? (flag = true) : (flag = false);
  //   return flag;
  // }

  return (
    <>
      {!hasJWT() ? <SignIn /> : <Home />}
      {hasJWT() ? <Home /> : <Login />}
      {/* {hasAdmin() ? <EditDb/> : <Home/>} */}
      {localStorage.getItem("AdminEmail") == "simrangupta172002@gmail.com" ? (
        <EditDb />
      ) : (
        <Home />
      )}
    </>
  );
};
export default PrivateRoute;
