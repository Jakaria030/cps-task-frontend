import { ToastContainer } from "react-toastify";
import Footer from "./components/footer/Footer";
import Navbar from "./components/header/Navbar";
import "./globals.css";

export const metadata = {
  title: "CPS Academy",
  description: "CPS Academy frontend",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" data-theme="dark">
      <body cz-shortcut-listen="true">
        <ToastContainer />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
