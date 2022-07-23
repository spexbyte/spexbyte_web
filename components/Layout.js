import Footer from "./HomepageComponents/Footer";
import Navbar from "./HomepageComponents/Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
