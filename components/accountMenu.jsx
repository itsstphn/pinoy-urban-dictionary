"use client";

import { logout } from "@/actions/auth-actions";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function AccountMenu({ userDetails }) {
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);
  const accountMenuRef = useRef(null);
  const router = useRouter();
  const renderCount = useRef(0); // Render counter

  renderCount.current += 1;

  const handleClickOutside = (e) => {
    if (accountMenuRef.current && !accountMenuRef.current.contains(e.target)) {
      setIsAccountMenuOpen(false);
    }
  };

  const handleLoginClick = (e) => {
    e.preventDefault();
    setIsAccountMenuOpen(false);
    setTimeout(() => {
      // delay to prevent flicker
      router.push("/log-in");
    }, 500);
  };

  const handleLogoutClick = (e) => {
    e.preventDefault();
    setIsAccountMenuOpen(false);
    logout();
  };

  useEffect(() => {
    if (isAccountMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isAccountMenuOpen]);

  return (
    <div className="w-5 relative ">
      <div
        onClick={() => setIsAccountMenuOpen((prev) => !prev)}
        className="cursor-pointer"
      >
        <FontAwesomeIcon icon={faUser} color="white" size="lg" />
      </div>

      {isAccountMenuOpen && (
        <div
          ref={accountMenuRef}
          className="absolute right-0 mt-5 bg-white p-3 py-3 border-[#e3e3e3] border-2"
        >
          <ul>
            <li className="flex items-center gap-2">
              <div className="w-[30px] h-[30px] bg-slate-600 rounded-full"></div>
              <p className="text-sm text-nowrap">
                {userDetails ? userDetails?.username : "No Account"}
              </p>
            </li>
            {!userDetails ? (
              <li className="flex items-center gap-2">
                <div className="w-[30px] h-[30px]"></div>
                <div
                  onClick={handleLoginClick}
                  className="underline text-sm text-accent cursor-pointer"
                >
                  Login
                </div>
              </li>
            ) : (
              <li className="flex items-center gap-2">
                <div className="w-[30px] h-[30px]"></div>
                <div
                  onClick={handleLogoutClick}
                  className="underline text-sm text-accent cursor-pointer"
                >
                  Logout
                </div>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
