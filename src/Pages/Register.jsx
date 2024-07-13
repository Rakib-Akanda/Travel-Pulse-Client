import { useContext, useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const { setLoading, createUser, updateProfileData, user } =
    useContext(AuthContext);
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPass, setErrorPass] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoUrl = form.photoUrl.value;
    const password = form.password.value;
    console.log(name, photoUrl, email, password);
    if (!/^[a-zA-Z0-9]+@gmail.com$/.test(email)) {
      console.log("Invalid email");
      return setErrorEmail("Please provide a valid email");
    } else if (!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)) {
      setErrorEmail("");
      return setErrorPass(true);
    } else {
      setErrorEmail("");
      setErrorPass(false);
    }
    createUser(email, password)
      .then(() => {
        updateProfileData(name, photoUrl);
        form.reset();
        setLoading(false);
        console.log(user);
        toast.success("Register Successfully");
      })
      .catch((error) => {
        toast.error(error.message.slice(22, -2));
      });
  };
  const handleShowPass = () => {
    setShowPass(!showPass);
  };
  return (
    <div className="hero mt-5">
      <div className="w-1/3">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl text-center font-bold">Register Now!</h1>
        </div>
        <div className="card mt-2 bg-base-100 w-full  shadow-2xl">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name:</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email:</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <p className="text-red-600">{errorEmail}</p>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL:</span>
              </label>
              <input
                type="text"
                name="photoUrl"
                placeholder="Photo URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password:</span>
              </label>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  className="input input-bordered w-full"
                  required
                />
                <p
                  onClick={handleShowPass}
                  className="absolute right-0 bottom-1/4 mr-2"
                >
                  {showPass ? (
                    <IoEyeOff className="text-xl" />
                  ) : (
                    <IoEye className="text-xl" />
                  )}
                </p>
              </div>
              <label className="label">
                <Link className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
              <div className="text-red-600">
                {errorPass ? (
                  <ul className="">
                    <li>
                      1. Must have an Uppercase and lowercase letter in the
                      password
                    </li>
                    <li>2. Password Length must be at least 6 character</li>
                  </ul>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary text-white">Register</button>
            </div>
            <p className="mt-3">
              Have an account?{" "}
              <Link to={"/login"} className="text-blue-600 font-bold">
                Login now
              </Link>
            </p>
          </form>
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
        theme="light"
        transition={Bounce}
      />
    </div>
  );
};

export default Register;
