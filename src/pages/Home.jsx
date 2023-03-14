import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Home = () => {
  

  const navigate = useNavigate();
  const [password, setPassword] = useState();

  const handleChange = (e) => {
    setPassword(parseFloat(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === 12) {
      // setShowNavbar(true);
      navigate("/");
    } else {
      alert("! Access denied !");
    }
  };

  return (
    <>
      <h1>Einkauf App</h1>
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