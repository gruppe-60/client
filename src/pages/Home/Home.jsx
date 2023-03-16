import { useState, useContext } from "react";
import axios from "axios";
// import Context from "../global/Context";
import "./Home.css";


const Home = () => {
  
// const {showNavbar, setShowNavbar} = useContext(Context);
// console.log(showNavbar)

  const [password, setPassword] = useState();

  const handleChange = (e) => {
    setPassword(parseFloat(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   const response = axios.post("http://localhost:4001/auth/login",{
    email,
    password
  });
  console.log(response)
}

  return (
    <>
      <h1>SHOPLIST</h1>
      {/* <img src= alt="" /> */}
      <h3>Login with Password</h3>
      <form >
        <label>
          Email
        <input type="email" name="email" />
        </label>
        <label>
          Password:
          <input type="password" name="password" onChange={handleChange} />
        </label>
        <button type="submit" onClick={handleSubmit}>
          Login
        </button>
        <br />
        
      </form>
    </>
  );
};

export default Home;