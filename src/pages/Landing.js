import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';

const Landing = () => {
  return (
    <div>
        <Navbar />

        <div className="hero flex w-full h-[45rem]">
          {/* <img src="/images/tezos-JNODJbfJAbU-unsplash.jpg" alt="dankVerse"/> */}
          <h1 className="flex text-3xl h-[35rem] w-full justify-center items-center text-slate-50">DANK MEMES</h1>
        </div>

        <div className="flex flex-col items-center gallery h-[55rem] w-full bg-slate-200">
          <h1 className="flex justify-center items-center font-semibold text-2xl h-20">Explore</h1>

          <div className="grid grid-rows-2 grid-cols-2 gap-6">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>

        <Footer />
    </div>
  )
}

export default Landing;