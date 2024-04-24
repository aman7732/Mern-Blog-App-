// third line 


import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
import { URL } from "../url";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const res = await axios.post(URL + "/api/auth/register", { username, email, password });
      console.log(res.data); // Log the response data to see what the server is sending back

      // Assuming the response contains user data, update the state accordingly
      setUsername(res.data.username);
      setEmail(res.data.email);
      setPassword(res.data.password);
      setError(false);
      
      // Navigate to the login page after successful registration
      navigate("/login");
    } catch (err) {
      // Handle error
      if (err.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log("Server responded with an error:", err.response.data);
        console.log("Status code:", err.response.status);
        // Optionally, you can display an error message to the user
        setError(true);
      } else if (err.request) {
        // The request was made but no response was received
        console.log("No response received from server:", err.request);
        // Optionally, you can display an error message to the user
        setError(true);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error during request setup:", err.message);
        // Optionally, you can display an error message to the user
        setError(true);
      }
    }
  };

  return (
    <>
      <div className="flex items-center justify-between px-6 md:px-[200px] py-4">
        <h1 className="text-lg md:text-xl font-extrabold"><Link to="/">Blog Market - Aman</Link></h1>
        <h3><Link to="/login">Login</Link></h3>
      </div>
      <div className="w-full flex justify-center items-center h-[80vh] ">
        <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]">
          <h1 className="text-xl font-bold text-left">Create an account</h1>
          <input onChange={(e) => setUsername(e.target.value)} className="w-full px-4 py-2 border-2 border-black outline-0" type="text" placeholder="Enter your username" />
          <input onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2 border-2 border-black outline-0" type="text" placeholder="Enter your email" />
          <input onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-2 border-2 border-black outline-0" type="password" placeholder="Enter your password" />
          <button onClick={handleRegister} className="w-full px-4 py-4 text-lg font-bold text-white bg-black rounded-lg hover:bg-gray-500 hover:text-black">Register</button>
          {error && <h3 className="text-red-500 text-sm">Something went wrong</h3>}
          <div className="flex justify-center items-center space-x-3">
            <p>Already have an account?</p>
            <p className="text-gray-500 hover:text-black"><Link to="/login">Login</Link></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register;
