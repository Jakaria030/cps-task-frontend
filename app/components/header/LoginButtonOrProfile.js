"use client";

import { isLoggedIn } from "@/app/utils/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

const LoginButtonOrProfile = () => {
  const [auth, setAuth] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    setAuth(isLoggedIn());
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setAuth(null);
    setShowDropdown(false);
  };

  return (
    <div className="sm:basis-1/3 flex justify-end relative">
      {auth && auth.user ? (
        <div className="relative">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="cursor-pointer w-10 h-10 rounded-full p-[2px] bg-gradient-to-r from-orange-700 to-yellow-500"
          >
            <div className="w-full h-full rounded-full bg-[#0f172a] flex items-center justify-center text-white font-bold text-lg">
              {auth.user.username.charAt(0)}
            </div>
          </button>

          {showDropdown && (
            <div className="absolute right-0 mt-4 sm:mt-6 w-52 bg-slate-800 border border-slate-600 rounded shadow-lg z-50">
              <div className="flex flex-col justify-center">
                <Link
                  href="/"
                  onClick={() => setShowMobileMenu(false)}
                  className="sm:hidden px-4 py-2 hover:bg-orange-500 text-white"
                >
                  Home
                </Link>

                {auth && auth.user && (
                  <Link
                    href="/my-learning"
                    onClick={() => setShowMobileMenu(false)}
                    className=" sm:hidden px-4 py-2 hover:bg-orange-500 text-white"
                  >
                    My Learning
                  </Link>
                )}
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 hover:bg-orange-500 text-white"
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <Link
          href="/login"
          className="px-4 py-1.5 cursor-pointer bg-orange-500 hover:bg-orange-600 text-white rounded transition-colors duration-200"
        >
          Login
        </Link>
      )}
    </div>
  );
};

export default LoginButtonOrProfile;
