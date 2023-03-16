import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e)=> {
    e.preventDefault();
    console.log(email, password)

    try{
        const response = await axios.post("http://localhost:4001/auth/register", {
        email,
        password
        });
        alert("You have successfully registered!")
        navigate("/")
        console.log(response)
    }catch(error)   {
        alert("Something went wrong!")
      console.log(error)
    }
  }
  
    return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <label>
          Email
          <input value={email} type="email" name="email" onChange={(e)=>setEmail(e.target.value)}/>
        </label>
        <label>
          Password:
          <input value={password} type="password" name="password" onChange={(e)=>setPassword(e.target.value)}/>
        </label>
        <br />
        <button type="submit">Click</button>
      </form>
    </>
  );
};

export default Register;
