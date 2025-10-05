"use client";
import { isLoggedIn } from "@/app/utils/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

const PrivateNavLink = () => {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    setAuth(isLoggedIn());
  }, []);

  return (
    <>
      {auth && auth.user ? (
        <Link
          href="/my-learning"
          className="hover:text-orange-500 transition-colors duration-200 cursor-pointer"
        >
          My Learning
        </Link>
      ) : null}
    </>
  );
};

export default PrivateNavLink;
