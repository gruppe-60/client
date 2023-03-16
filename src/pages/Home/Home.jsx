import { useState, useContext } from "react";
import axios from "axios";
// import Context from "../global/Context";
import "./Home.css";


const Home = () => {
  
// const {showNavbar, setShowNavbar} = useContext(Context);
// console.log(showNavbar)

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
   const response = await axios.post("http://localhost:4001/auth/login",{
    email,
    password
  }, {withCredentials: true});
  console.log(response)
}catch(error){
  console.log(error)
}
}

  return (
    <>
      <h1>SHOPLIST</h1>
      {/* <img src= alt="" /> */}
      <h3>Login with Password</h3>
      <form >
        <label>
          Email
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
    </>
  );
};

export default Home;