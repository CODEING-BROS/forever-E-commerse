"use client";
import React, { useContext, useState } from "react";
import Image from "next/image";
import { assets } from "@/public/assets/frontend_assets/assets";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import the hook for route checking
import { ShopContext } from "@/app/Context/Context";

const Navbar = () => {
  const nav = ["Home", "Collection", "About", "Contact"];
  const icons = ["search_icon", "profile_icon", "cart_icon"];

  const { setShowSearch, getCartCount } = useContext(ShopContext);

  // Custom hrefs for each icon
  const iconLinks = {
    search_icon: "",
    profile_icon: "/login",
    cart_icon: "/cart",
  };

  const [visible, setVisible] = useState(false);
  const pathname = usePathname(); // Get current route path

  return (
    <div className="flex justify-between items-center py-5 font-medium ">
      <Link href="/" className="logo">
        <Image
          className="w-36"
          src={assets.logo}
          alt="Logo"
          width={144}
          height={36}
        />
      </Link>

      <div className="hidden sm:flex gap-5 text-sm text-gray-700">
        {nav.map((item) => {
          const isActive =
            pathname === (item === "Home" ? "/" : `/${item.toLowerCase()}`);
          return (
            <Link
              key={item}
              className={`uppercase flex flex-col items-center gap-1 ${
                isActive ? "active" : ""
              }`}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            >
              <p>{item}</p>
              <hr className="w-2/4 border-none h-[1.5px] bg-gray-700" />
            </Link>
          );
        })}
      </div>

      <div className="flex items-center gap-6">
        {icons.map((item, index) => (
          <div key={item} className="relative group">
            <Link href={iconLinks[item]}>
              <Image
                className="w-5 cursor-pointer"
                src={assets[item]} // Ensure this is correct
                alt={item}
                width={20}
                height={20}
                onClick={() => {
                  // Trigger search modal only for the search icon
                  if (index === 0) setShowSearch(true);
                }}
              />
            </Link>

            {/* Dropdown for profile icon */}
            {index === 1 && (
              <div className="group-hover:block hidden absolute -right-10 pt-4">
                <div className="flex flex-col text-center gap-2 w-28 py-3 px-5 bg-slate-100 text-gray-500 rounded-md">
                  <Link className="text-sm hover:text-black" href="/profile">
                    Profile
                  </Link>
                  <Link className="text-sm hover:text-black" href="/orders">
                    Orders
                  </Link>
                  <Link className="text-sm hover:text-black" href="/logout">
                    Logout
                  </Link>
                </div>
              </div>
            )}

            {/* Cart item count */}
            {index === 2 && (
              <p className="absolute top-[10px] right-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[12px]">
                {getCartCount()}
              </p>
            )}
          </div>
        ))}

        <div className="sm:hidden">
          <Image
            onClick={() => setVisible(true)}
            className="w-5 cursor-pointer"
            src={assets.menu_icon}
            alt="menu"
            width={20}
            height={20}
          />
        </div>
      </div>

      {/* Side bar menu for small screens */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="p-3 flex items-center cursor-pointer gap-4"
          >
            <Image
              src={assets.dropdown_icon}
              className="w-[10px] h-4 rotate-180"
              alt="dropdown"
              width={10}
              height={16}
            />
            <p className="font-semibold">Back</p>
          </div>

          <div className="flex flex-col">
            {nav.map((item) => {
              const isActive =
                pathname === (item === "Home" ? "/" : `/${item.toLowerCase()}`);
              return (
                <Link
                  onClick={() => setVisible(false)}
                  key={item}
                  className={`hover:bg-gray-400 hover-font-bold hover:text-white py-2 pl-6 border-[1px] uppercase ${
                    isActive ? "active" : ""
                  }`}
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                >
                  {item}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
