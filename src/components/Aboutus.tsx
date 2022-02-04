import React from "react";
import MyPhoto from "../Images/image.jpg";
import { icons } from "../utils/icons";

function Aboutus() {
  return (
    <div className="mt-32" id="about">
      <div className="flex">
        <span className="text-2xl font-black text-white">
          <span className="text-redColor mr-2">1.</span>About Me
        </span>
        <div className="border-t-2 border-greenTextColor w-16 2xl:w-72 xl:w-72 lg:w-72 md:w-72 sm:w-32 h-1 my-auto ml-3 border-opacity-20"></div>
      </div>
      <div className="relative flex 2xl:flex-row xl:flex-row lg:flex-row  flex-col-reverse">
        <div className="2xl:w-3/5 xl:w-3/5 lg:w-3/5 w-full mt-4">
          <p className="text-xl pb-4 font-bold text-justify">
            Hii, My name is Sameep and I enjoy creating things that will be
            useful for other on the internet. My interest in web development
            started back in 2018 when I tried to clone some templates available
            on internet.
          </p>
          <p className="text-xl pb-4 font-bold text-justify">
            I also recently developed{" "}
            <span className="text-greenTextColor font-bold">
              Web Application
            </span>{" "}
            that covers cool feature like Chating, Sharing and much more.
          </p>
          <p className="text-lg">
            Here are a few technologies I've been working with recently.
          </p>
          <div className="grid grid-cols-2 mt-3 text-center">
            {icons.map((icon) => (
              <div className="flex mb-2" key={icon.url}>
                <img src={icon.url} alt={icon.desc} className="w-7 h-7" />
                <span className="font-bold ml-2 text-md mt-1">{icon.desc}</span>
              </div>
            ))}
          </div>
        </div>

        <img
          src={MyPhoto}
          className="w-72 h-72 rounded-full mx-auto mt-10"
          alt="Sameep Sawant"
        />
      </div>
    </div>
  );
}

export default Aboutus;
