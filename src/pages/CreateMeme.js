import React from 'react';
import Navbar2 from '../components/Navbar2';

const CreateMeme = () => {
  return (
    <>
      <Navbar2 />
      <div>
        <div className="flex justify-center items-center relative top-5">
          <h1 className="flex justify-center w-full text-3xl font-semibold relative">
            Create meme
          </h1>
        </div>
        <div className="flex justify-center center relative top-10">
          <div className="flex flex-col justify-center items-center bg-white w-[30rem] h-[35rem] rounded-2xl drop-shadow-lg">
            <div className="flex justify-center items-center bg-slate-200 w-[15rem] h-[15rem]">
              <h1 className="">Preview</h1>
            </div>

            <div className="flex flex-col m-4 justify-center items-center">
              <div className="flex justify-center items-center">
                <label htmlFor="" className="p-2">Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  required
                  className="m-2 p-2 bg-slate-200 rounded-xl text-white outline-none border-none"
                />
              </div>

              <div className="flex justify-center items-center">
                <label htmlFor="" className="p-1">Caption</label>
                <input
                  type="text"
                  placeholder="Caption"
                  className="m-2 p-2 bg-slate-200 rounded-xl text-white outline-none border-none"
                />
              </div>
            </div>
            <button className="relative bg-purple-700 p-6 flex items-center justify-center h-16 w-24 rounded-xl text-white">
              Upload
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateMeme;