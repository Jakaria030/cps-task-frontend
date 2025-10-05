import Link from "next/link";
import Logo from "../Logo";
import LoginButtonOrProfile from "./LoginButtonOrProfile";

const Navbar = () => {
  return (
    <header className="border-b border-slate-500 sticky top-0 z-50 backdrop-blur-3xl">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-8 sm:py-6">
        <div className="flex items-center justify-between gap-5">
          {/* Logo */}
          <div className="basis-1/3">
            <Logo textSize={"text-lg sm:text-xl lg:text-2xl"} />
          </div>

          {/* Nav links */}
          <nav className="basis-1/3 hidden sm:flex items-center justify-center gap-5">
            <Link
              href="/"
              className="hover:text-orange-500 transition-colors duration-200 cursor-pointer"
            >
              Home
            </Link>
            <Link
              href="/my-learning"
              className="hover:text-orange-500 transition-colors duration-200 cursor-pointer"
            >
              My Learning
            </Link>
          </nav>

          {/* Login button or Profile */}
          <LoginButtonOrProfile />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
