import React from "react";

import { FiExternalLink } from "react-icons/fi";

const element = [
  {
    name: "OSI (Open System Integration)",
    subject:
      "In this blog I have i explained the 7 layers of OSI model in depth. This was my blog written using HTML, CSS.",
    url: "https://osiblog.netlify.app/",
  },
  {
    name: "Redis",
    subject:
      "This blog explains how I used Redis to reduce the cost for Noggin.",
    url: "https://blog.noggin.so/i-improved-the-performance-and-reduced-costs-for-noggin-using-redis-heres-how",
  },
];
function Blogs() {
  return (
    <div className="block pt-32 2xl:mx-20">
      <div className="flex">
        <div className="2xl:text-2xl xl:text-2xl lg:text-2xl md:text-2xl text-2xl text-greenTextColor font-black mr-2">
          4.
        </div>
        <div className="2xl:text-2xl xl:text-2xl lg:text-2xl md:text-2xl text-2xl text-white font-black">
          Blogs Written
        </div>
        <div className="border-t-2 border-secondColor w-16 2xl:w-72 xl:w-72 lg:w-72 md:w-72 sm:w-32 h-1 my-auto ml-3 border-opacity-20"></div>
      </div>
      <div className="grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-2 mt-5 mb-10">
        {element.map((ele) => (
          <div
            className=" group transition duration-500 ease-in-out rounded block bg-sliderColor p-5 transform hover:-translate-y-1 hover:scale-100  cursor-pointer"
            key={ele.url}
          >
            <div className="flex justify-end">
              {ele.url && (
                <a href={ele.url}>
                  <FiExternalLink className="w-5 h-5 cursor-pointer text-white" />
                </a>
              )}
            </div>
            <div className="block mt-3">
              <div className="text-lg text-greenTextColor font-black h-blogHeight">
                {ele.name}
              </div>
              <div className="text-secondColor font-black text-sm h-blogheight overflow-scroll mt-2">
                {ele.subject}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
