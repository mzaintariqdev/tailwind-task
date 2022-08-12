import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import firebaseApp from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { useremail } from "./redux/reduxSlice/authSlice";

function App() {
  const auth = getAuth(firebaseApp);
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth.value);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(useremail(user?.email));
      } else {
        dispatch(useremail(null));
      }
    });
  }, [auth, dispatch]);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={userData.email !== null ? <Home /> : <Login />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
