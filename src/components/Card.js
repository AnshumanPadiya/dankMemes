import React from 'react';

const Card = ({ IMG }) => {
  return (
    <div className="flex bg-slate-50 h-[20rem] w-[35rem] rounded-xl border-0 drop-shadow-lg justify-center">
        <img src={IMG} alt="" />
    </div>
  )
}

export default Card;