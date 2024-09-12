"use client";

import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function AccountMenu() {
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
      <div onClick={() => setIsAccountMenuOpen((prev) => !prev)}>
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
              <p className="text-sm text-nowrap">No Account</p>
            </li>

            <li className="flex items-center gap-2">
              <div className="w-[30px] h-[30px]"></div>
              <div
                onClick={handleLoginClick}
                className="underline text-sm text-accent cursor-pointer"
              >
                Login
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
