import React from "react";

const Card = ({ username, btnText = "visit me" }) => {
  // console.log('props', props);

  return (
    <div className="max-w-xs p-6 rounded-md shadow-md bg-black mr-4">
      <img
        src="https://images.pexels.com/photos/1615776/pexels-photo-1615776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
      />
      <div className="mt-6 mb-2">
        <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
          {username}
        </span>
        <h2 className="text-xl font-semibold tracking-wide">
          Lorem ipsum dolor
        </h2>
      </div>
      <p className="text-gray-300">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
        tempora ipsum soluta amet
      </p>
      <button className="relative block group ">
        <span className="absolute inset-0 border-2 border-white border-dashed rounded-lg"></span>
        <div className="transition bg-black border-2 border-white rounded-lg group-hover:-translate-x-2 group-hover:-translate-y-2">
          <div className="p-2 ">
            <p className="text-xl text-amber-200 font-outerSans font-medium">
              {btnText}
            </p>
          </div>
        </div>
      </button>
    </div>
  );
};

export default Card;
