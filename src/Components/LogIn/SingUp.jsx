import { useContext, useState } from "react";
import { AiFillEye, AiFillEyeInvisible, AiFillGoogleCircle } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const SingUp = () => {
  const [showPassword,setShowPassword] = useState(false)
  const { singUp, signInWithGoogle, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSingUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.img.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepte = e.target.terms.checked;
    console.log(email, password, name,image, accepte);
    const spacialPass = /[!@#$%^&*(),.?":{}|<>]/;

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters or longer");
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast.error("Password must contain at least one uppercase letter");
      return;
    } else if (!spacialPass.test(password)) {
      toast.error("Password must contain at least one special character");
      return;
    } else if (!accepte) {
      toast.error("You must accept the terms and conditions");
      return;
    }

    //singUp setup
    singUp(email, password)
      .then((res) => {
        console.log(res.user);
        toast.success("Successfully SingUp!");
        navigate(location?.state ? location.state : '/')

        //update Profile
        updateUser(name, image)
          .then(() => console.log("update Profile Success"))
          .catch((error) => console.log("error updating Profile"));
      })
      .catch((err) => {
        console.log(err.message);
        toast.error("SingUp Failed " + err.message);
      });
  };

  //google account login setup
  const handleGoogle = () => {
    signInWithGoogle()
      .then((res) => {
        console.log(res.user);
        toast.success("Successfully Google Register!");
        navigate(location?.state ? location.state : '/')
      })
      .catch((err) => {
        console.log(err.message);
        toast.error("Invalid Registration Credentials");
      });
  };
  return (
    <div >
      <section className="bg-gray-50 lg:p-14 ">
        <div className="flex flex-col-reverse lg:flex-row  items-center justify-center gap-16 px-6 py-8 mx-auto  lg:py-0">
          <div className=" md:w-[550px]">
            <img
              src="https://i.ibb.co/MMrDSZG/273-2738804-php-login-and-authentication-login-hd-png-download.png"
              alt=""
            />
          </div>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form
                onSubmit={handleSingUp}
                className="space-y-4 md:space-y-6"
                action="#"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5 "
                    placeholder="Enter your Full Name"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="img"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your Image
                  </label>
                  <input
                    type="text"
                    name="img"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5 "
                    placeholder="Image"
                    
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5 "
                    placeholder="name@gmail.com"
                    required=""
                  />
                </div>
                <div className="relative">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg   block w-full p-2.5 "
                    required=""
                  />
                  <span className=" absolute right-3 top-10  cursor-pointer text-xl text-[#ff7e00]" onClick={()=>setShowPassword(!showPassword)}>{showPassword ?<AiFillEye/> :<AiFillEyeInvisible/>}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        name="terms"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Accept terms and conditions
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full hover:text-black  text-white bg-[#ff7e00] font-semibold rounded-lg text-md px-5 py-2.5 text-center "
                >
                  Sign Up
                </button>
                <Link>
                  <button
                    type="submit"
                    onClick={handleGoogle}
                    className="w-full mt-3 hover:text-black text-white bg-[#ff7e00] font-semibold rounded-lg text-md px-5 py-2.5 text-center flex items-center justify-center gap-4 "
                  >
                    <AiFillGoogleCircle className=" text-2xl" /> Google
                  </button>
                </Link>

                <p className="text-sm font-light text-gray-500 ">
                  Don’t have an account yet?{" "}
                  <Link
                    to={"/login"}
                    className="font-medium  ml-2 text-lg  hover:underline text-[#ff7e00]"
                  >
                    SignIn
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* <ToastContainer /> */}
    </div>
  );
};

export default SingUp;
