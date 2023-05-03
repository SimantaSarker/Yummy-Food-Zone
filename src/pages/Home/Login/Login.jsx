import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success,setSuccess]=useState("");
  const navigate=useNavigate();
  const location=useLocation();
  const from=location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    setError("");
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log("success");
        form.reset();
        setSuccess("You are a Valid user");
        console.log(loggedUser)
        navigate(from);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold"> Please Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                {error && (
                  <div className="alert mt-3 alert-error shadow-lg">
                    <div>
                      <span>Error! {error}</span>
                    </div>
                  </div>
                )}
                {success && (
                  <div className="alert mt-3 alert-success shadow-lg">
                    <div>
                      <span> {success}</span>
                    </div>
                  </div>
                )}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <div className="text-center font-semibold mb-3 mt-0">
              <Link
                to="/register"
                className="label-text-alt link link-hover text-sm"
              >
                New user?Register
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Social Login Button code */}
    </div>
  );
};

export default Login;
