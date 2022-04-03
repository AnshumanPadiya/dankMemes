import React from 'react';
import Card from '../components/Card';
import Navbar2 from '../components/Navbar2';
import { RAISONI, BORING, PAPPU, UNTAWALEOP } from '../assets';

const Home = () => {
  return (
    <>
      <div className="h-screen w-screen bg-slate-200">
      <Navbar2 />
      <div className="relative w-full h-full flex flex-col p-2 top-3">
        <h1 className="flex justify-center w-full text-3xl font-semibold relative top-10">Trending Memes</h1>
        <div className="w-full h-full p-10">
            <div className="grid grid-rows-2 grid-cols-2 gap-6 relative top-5">
                <Card IMG={RAISONI} />
                <Card IMG={BORING} />
                <Card IMG={PAPPU} />
                <Card IMG={UNTAWALEOP} />
            </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Home;