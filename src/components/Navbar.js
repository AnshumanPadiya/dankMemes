import React from 'react';

const Navbar = () => {
  return (
    <div className="flex h-16 z-50 sticky top-0 border-b drop-shadow-md bg-slate-50 items-center">
        <div className="w-1/3 pl-16">
            LOGO
        </div>
        <div className="flex w-full">
            <ul className="flex w-full justify-around">
                <li>Home</li>
                <li>Login</li>
                <li>Signup</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar;