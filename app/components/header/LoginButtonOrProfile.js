"use client";

import { isLoggedIn } from "@/app/utils/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const LoginButtonOrProfile = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    setIsAuthenticated(isLoggedIn());
  }, []);

  return (
    <div className="basis-1/3 flex justify-end">
      {isAuthenticated && isAuthenticated.user ? (
        <button className="hidden sm:block cursor-pointer w-9 h-9 rounded-full p-[2px] bg-gradient-to-r from-orange-700 to-yellow-500">
          <div className="w-full h-full rounded-full bg-[#0f172a] flex items-center justify-center text-white font-bold">
            {isAuthenticated.user.username.charAt(0)}
          </div>
        </button>
      ) : (
        <Link
          href="/login"
          className="hidden sm:inline-block px-4 py-1.5 cursor-pointer bg-orange-500 hover:bg-orange-600 text-white rounded transition-colors duration-200"
        >
          Login
        </Link>
      )}

      {/* Hamburger icon for small devices */}
      <div className="sm:hidden cursor-pointer">
        <RxHamburgerMenu className="text-2xl hover:text-orange-500" />
      </div>
    </div>
  );
};

export default LoginButtonOrProfile;
