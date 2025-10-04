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
      <body cz-shortcut-listen="true" className="flex flex-col min-h-screen">
        <Navbar />
          <div className="flex-1">
            {children}
          </div>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
