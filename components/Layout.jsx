import dynamic from "next/dynamic";
import Navbar from "./Navbar";
const Footer = dynamic(() => import("./Footer"));

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
