import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";
import Toast from "../compoenents/errors/Toast";

const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!username || !password){
        setError('Please enter username and password')
        return;
    }
    else{
        setError('')
    }

    if(username === 'kitchen' && password === 'Kitchen@123'){
      login();
      navigate('/kitchen/request');
    }
    else{
      setError("Login failed. Please check your credentials.");
    }
    
    // try {
    //   const response = await api.post(
    //     "/auth/login",
    //     {
    //       username: username,
    //       password: password,
    //       //expiresInMins: 30,
    //     },
    //     {
    //       withCredentials: true, // to include cookies
    //       headers: {
    //         "Content-Type": "application/json"
    //       },
    //     }
    //   );
    //   console.log("Login success:", response.data);
    // } catch (err) {
    //   console.error("Login failed:", err);
    //   setError("Login failed. Please check your credentials.");
    // }
  }

  const handleClose = () => {
    setError("");
  }

  return (
    <div className="grid grid-lg-12 min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="shadow p-5">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
          <p className="text-red-600 hidden">{error && error}</p>
        </div>

        {error && <Toast message={error} onClose={handleClose} /> }

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">            
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                for="email"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="email"
                  id="email"
                  autocomplete="email"
                  onChange={(e) => setUsername(e.target.value)}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-2 -outline-offset-2 outline-gray-700 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  for="password"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  type="password"
                  name="password"
                  id="password"
                  autocomplete="current-password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
