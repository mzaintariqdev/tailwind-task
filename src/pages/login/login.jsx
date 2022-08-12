import Logo from "../../assets/img/logo.svg";
import SidePic from "../../assets/img/login-screen.svg";
import { useState } from "react";
import firebaseApp from "../../firebase";
import Spinner from "react-spinkit";
import "react-toastify/dist/ReactToastify.css";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { useDispatch } from "react-redux";
import { useremail, username } from "../../redux/reduxSlice/authSlice";
import { toast, ToastContainer } from "react-toastify";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = () => {
    setLoading(true);
    if (password.length > 0 && email.length > 0) {
      const auth = getAuth(firebaseApp);
      createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
          setLoading(false);

          // Signed in
          const user = await userCredential.user;
          console.log(user);
          dispatch(username(user?.displayName));
          dispatch(useremail(user?.email));
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          if (errorCode === "auth/email-already-in-use") {
            signInWithEmailAndPassword(auth, email, password)
              .then(async (userCredential) => {
                setLoading(false);

                // Signed in
                const user = await userCredential.user;
                console.log(user);
                // ...
              })
              .catch(() => {
                setLoading(false);
                toast("Sorry Please enter correct Details", {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
              });
          } else {
            setLoading(false);
            toast("Sorry Please enter correct Details", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
        });
    } else {
      setLoading(false);

      toast("Sorry Please enter All Details", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <>
      {" "}
      <div className="flex flex-col-reverse  lg:flex-row justify-between items-center min-w-screen min-h-screen">
        <div className="mt-32 mb-32 lg:m-0 w-full flex flex-col justify-center items-center h-full">
          <img
            className="mb-28 w-11/12 object-cover max-w-logoMobWidth max-h-logoHeight xl:max-w-logoWidth "
            src={Logo}
            alt="logo"
          />

          <input
            className="mb-6 p-6 font-app w-11/12 max-w-inputWidth max-h-inputHeight bg-white rounded-xl border-2 border-input-border"
            type="email"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            className="mb p-6 font-app w-11/12 max-w-inputWidth max-h-inputHeight bg-white rounded-xl border-2 border-input-border"
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button
            onClick={() => {
              onSubmit();
            }}
            className="font-app mt-28 w-btnWidth h-btnHeight bg-btn-color rounded-full   focus:shadow-outline focus:outline-none text-white "
            type="button"
          >
            {loading ? (
              <Spinner
                name="line-scale-pulse-out"
                color="#ffffff"
                fadeIn="none"
              />
            ) : (
              "Submit"
            )}
          </button>
        </div>
        <div className="w-full h-full min-h-screen">
          <img
            className="object-cover w-full h-screen"
            src={SidePic}
            alt="side-screen"
          />
        </div>
      </div>{" "}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default Login;
