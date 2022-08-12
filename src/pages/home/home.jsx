import Logo from "../../assets/img/logo.svg";
import { getAuth, signOut } from "firebase/auth";
import firebaseApp from "../../firebase";
import { useSelector, useDispatch } from "react-redux";
import { useremail } from "../../redux/reduxSlice/authSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Home() {
  const auth = getAuth(firebaseApp);
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth.value);

  console.log(userData);

  return (
    <>
      <div className="flex flex-col justify-center items-center min-w-screen min-h-screen">
        <div className="font-app flex flex-col justify-center items-center w-full text-greetingMob xl:text-greeting">
          <img
            className="w-11/12 object-cover max-w-logoMobWidth max-h-logoHeight xl:max-w-logoWidth"
            src={Logo}
            alt="logo"
          />
          <p className="w-full text-center break-words">Hello,</p>
          <p className="w-full text-center break-words">{userData?.email}</p>
          <button
            onClick={() => {
              signOut(auth)
                .then(() => {
                  dispatch(useremail(null));
                  toast("Logout out", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });
                })
                .catch(() => {
                  toast.error("unable to logout", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });
                });
            }}
            className="font-app text-logout mt-28 w-btnWidth h-btnHeight bg-btn-color rounded-full focus:shadow-outline focus:outline-none text-white "
          >
            Logout
          </button>
        </div>
      </div>
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

export default Home;
