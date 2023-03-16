import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
// import Context from "../global/Context";
import "./Home.css";


const Home = () => {
  
// const {showNavbar, setShowNavbar} = useContext(Context);
// console.log(showNavbar)

  const navigate = useNavigate();
  const [password, setPassword] = useState();

  const handleChange = (e) => {
    setPassword(parseFloat(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === 12) {
      // setShowNavbar(true);
      navigate("/baskets");
    } else {
      alert("! Access denied !");
    }
  };

  return (
    <>
      <h1>SHOPLIST</h1>
      {/* <img src= alt="" /> */}
      <h3>Login with Password</h3>
      <form >
        <label>
          Password:
          <input type="password" name="password" onChange={handleChange} />
        </label>
        <button type="submit" onClick={handleSubmit}>
          Login
        </button>
      </form>
    </>
  );
};

export default Home;