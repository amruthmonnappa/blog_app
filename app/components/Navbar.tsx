import React from "react";
import Link from "next/link";
import{ ModeToggle }from "./ModeToggle";
const Navbar = () => {
  return (
    <>
      <div className="w-full relative flex items-center justify-between  mx-auto px-8 py-5">
        <Link href={"/"} className="font-bold text-3xl">
          <span className="text-primary">Dr</span> Framez
        </Link>
        <ModeToggle />
      </div>
      {/* <div className=" mx-auto px-8">
        <p>Mini-Project by:</p>
        <p className="font-bold">
          Ajay Kallur(P18AJ22S126108) <br /> Amruth Monnappa (P18AJ22S126109)
        </p>
        <p className="mt-2">
          Blog Application using Next JS and Sanity <br /> Styled using Tailwind
          CSS and query language used is GROOQ to fetch data from backend
        </p>
      </div> */}
    </>
  );
};

export default Navbar;
