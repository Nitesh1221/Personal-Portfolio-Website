import React from "react";
import PhotoName from "./PhotoName";
import PrimeNavBar from "./PrimeNavBar";
import SocialContact from "./SocialContact";


const Navbar = () => {
  const navItem = [
    { name: "Home", url: "/" },
    { name: "about", url: "/about" },
    { name: "projects", url: "/projectsc" },
    { name: "contact us", url: "/contact-us" },
  ];
  return (
      <div className="px-6 py-4 bg-neutral-800 grid grid-flow-col  ">
        <PhotoName />
        <PrimeNavBar navItem={navItem} />
        <SocialContact></SocialContact>
      </div>
  );
};

export default Navbar;
