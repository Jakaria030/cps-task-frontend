import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "../Logo";

const Navbar = () => {
  return (
    <header className="border-b border-slate-500">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-8 sm:py-6">
        <div className="flex items-center justify-between gap-5">
          {/* Logo */}
          <Logo textSize={"text-lg sm:text-xl lg:text-2xl"} />

          {/* Nav links */}
          <nav className="hidden sm:flex items-center justify-center gap-5">
            <Link
              href="/"
              className="hover:text-orange-500 transition-colors duration-200 cursor-pointer"
            >
              Home
            </Link>
            <Link
              href="/courses"
              className="hover:text-orange-500 transition-colors duration-200 cursor-pointer"
            >
              Courses
            </Link>
            <Link
              href="/my-learning"
              className="hover:text-orange-500 transition-colors duration-200 cursor-pointer"
            >
              My Learning
            </Link>
          </nav>

          {/* Login button or Profile */}
          <div className="hidden sm:block w-9 h-9 rounded-full p-[2px] bg-gradient-to-r from-orange-700 to-yellow-500">
            <div className="w-full h-full rounded-full bg-[#0f172a] flex items-center justify-center text-white font-bold">
              A
            </div>
          </div>
          {/* <button className="hidden sm:block px-4 py-1.5 cursor-pointer bg-orange-500 hover:bg-orange-600 text-white rounded transition-colors duration-200">
            Login
          </button> */}

          {/* Hamburger icon for small devices */}
          <div className="sm:hidden cursor-pointer">
            <RxHamburgerMenu className="text-2xl hover:text-orange-500" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
