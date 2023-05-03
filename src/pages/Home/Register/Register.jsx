import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success,setSuccess]=useState("")

  const handleRegister = (event) => {
    setError("");
    setSuccess("")
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    if (email && password) {
      createUser(email, password)
        .then((result) => {
          const loggedUser = result.user;
          console.log(loggedUser)
          form.reset();
          setSuccess("Successfully Register")
        })
        .catch((error) => {
          setError(error.message);
        });
    }
    else{
      setError('Please add email,Password')
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold"> Please Register Here!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleRegister}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
               
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Enter Photo Url"
                className="input input-bordered"
                
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
              
              />

              {error && (
                <div className="alert mt-3 alert-error shadow-lg">
                  <div>
                    <span>Error! {error}</span>
                  </div>
                </div>
              )}


               {
                success && <div className="alert alert-success shadow-lg">
                <div>
                  <span>{success}</span>
                </div>
              </div>
               }

              <label className="label">
                <Link to="/login" className="label-text-alt link link-hover">
                  Already Have An account?Login
                </Link>
              </label>
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>

          <div className="">
            <img
              src="https://i.ibb.co/gSTHXZJ/google-btn.png"
              alt=""
              className="object-cover w-[70%] mx-auto "
            />
            <img
              src="https://i.ibb.co/g9f4P0S/github-btn.png"
              alt=""
              className="object-cover w-[70%] mx-auto mt-3 mb-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
