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
        <Navbar />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
