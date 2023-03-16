import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
