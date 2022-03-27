import React, { useState } from 'react';
import Card from '../../components/Card';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Register = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    function submitHandler(e) {
      e.preventDefault();

      // post form logic
    }

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center h-[30rem] ">
        <div className="flex flex-col justify-center items-center h-[20rem] w-[30rem] bg-slate-50 rounded-lg">
          <h1 className="relative font-semibold text-3xl">Sign-up</h1>

          <form action="" className="flex flex-col m-2">
            <input
              type="text"
              className="m-2 p-1"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter Username"
            />
            <input
              type="email"
              name="email"
              value={email}
              className="m-2 p-1"
              onChange={(e) => setEmail(e.target.email)}
              placeholder="Enter Email"
            />
            <input
              type="password"
              className="m-2 p-1"
              name="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              placeholder="Enter Password"
            />
            <button
              type="submit"
              className="rounded-xl bg-slate-500 text-slate-100 font-semibold m-2 p-2"
              onClick={(e) => submitHandler(e)}
            >
              Sign-up
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Register;