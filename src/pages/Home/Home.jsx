import { useState, useContext } from "react";
import axios from "axios";
// import Context from "../global/Context";
import "./Home.css";
import {useNavigate} from "react-router-dom";


const Home = () => {
  
// const {showNavbar, setShowNavbar} = useContext(Context);
// console.log(showNavbar)

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
   const response = await axios.post("http://localhost:4001/auth/login",{
    email,
    password
  }, {withCredentials: true});
navigate("/basket")
  console.log(response)
}catch(error){
  console.log(error)
}
}

  return (
    <div className="homebody">
      <h1>Welcome to</h1>
      <h2>SHOPLIST</h2>
      {/* <img src= alt="" /> */}
      <h3>Please Login</h3>
      <form >
        <label>
          Email:
        <input type="email" name="email" onChange={(e)=>setEmail(e.target.value)}/>
        </label>
        <label>
          Password:
          <input type="password" name="password" onChange={(e)=>setPassword(e.target.value)} />
        </label>
        <button type="submit" onClick={handleSubmit}>
          Login
        </button>
        <br />
        
      </form>
    </div>
  );
};

export default Home;