import React from "react";
import { Link } from "react-router-dom";

const Navbar2 = () => {
  return (
    <div className="flex h-16 z-50 sticky top-0 border-b drop-shadow-md bg-slate-50 items-center">
      <div className="w-1/3 pl-16">LOGO</div>
      <div className="flex w-full">
        <ul className="flex w-full justify-around">
          <Link to="/home">
            <li>Home</li>
          </Link>
          <Link to="/create">
            <li>Create Meme</li>
          </Link>
          <Link to="/login">
            <li>Logout</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar2;
