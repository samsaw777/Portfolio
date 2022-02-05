import React, { useState } from "react";

const Work = () => {
  const [activeState, setActiveState] = useState("noggin");

  return (
    <div className="pt-32 2xl:ml-32 xl:ml-32 lg:ml-32 " id="experience">
      <div className="flex">
        <span className="text-white 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-2xl text-2xl font-black">
          <span className="text-red-500 font-black2xl:text-2xl xl:text-2xl lg:text-2xl md:text-2xl text-2xl mr-2">
            2.
          </span>
          Where I've Worked
        </span>
        <div className="border-t-2 border-greenTextColor w-16 2xl:w-72 xl:w-72 lg:w-72 md:w-72 sm:w-32 h-1 my-auto ml-3 border-opacity-20"></div>
      </div>
      <div className="flex mt-10 flex-col 2xl:flex-row xl:flex-row lg:flex-row md:flex-row">
        <div className="flex 2xl:flex-col xl:flex-col lg:flex-col md:flex-col mx-auto 2xl:mx-0 xl:mx-0 lg:mx-0  ">
          <div
            className={
              "p-2 cursor-pointer border-t-2 border-secondColor border-opacity-20  hover:bg-greenTextColor hover:bg-opacity-20" +
              (activeState === "noggin"
                ? "text-greenTextColor border-t-2 border-greenTextColor border-opacity-100 hover:bg-greenTextColor hover:bg-opacity-20 bg-opacity-10 bg-greenTextColor"
                : "border-l-2 border-secondColor border-opacity-20 hover:bg-greenTextColor hover:bg-opacity-20")
            }
            onClick={() => setActiveState("noggin")}
          >
            Noggin
          </div>
          <div
            className={
              "p-2 cursor-pointer border-t-2 border-secondColor border-opacity-20  hover:bg-greenTextColor hover:bg-opacity-20" +
              (activeState === "wat"
                ? "text-greenTextColor border-t-2 border-greenTextColor border-opacity-100 hover:bg-greenTextColor hover:bg-opacity-20 bg-opacity-10 bg-greenTextColor"
                : "border-l-2 border-secondColor border-opacity-20 hover:bg-greenTextColor hover:bg-opacity-20")
            }
            onClick={() => setActiveState("wat")}
          >
            Wat Consult
          </div>
        </div>
        <div className="block ml-10">
          {activeState === "noggin" ? (
            <div className="block">
              <div className="pt-2 flex">
                <span className="text-white text-xl">FrontEnd Developer</span>
                <span className="text-greenTextColor font-black ml-2 text-xl">
                  @
                  <a
                    href="https://www.noggin.so/"
                    className="text-greenTextColor font-black ml-2 text-xl hover:text-greenTextColor hover:underline"
                  >
                    Noggin
                  </a>
                </span>
              </div>
              <div className="block">
                <span className="text-secondColor text-md">
                  June 2021 - Dec 2021
                </span>
              </div>
              <div className="block text-lg">
                <p className="text-secondColor m-0">
                  <span className="text-greenTextColor font-bold mr-2">1.</span>
                  Updated the UI of the app to make it look better.
                </p>
                <p className="text-secondColor m-0">
                  <span className="text-greenTextColor font-bold mr-2">2.</span>
                  Added the feature where the user input can be
                  <span className="text-greenTextColor font-bold mx-1">
                    Slugified
                  </span>
                  and will be stored in the database.
                </p>
                <p className="text-secondColor m-0">
                  <span className="text-greenTextColor font-bold mr-2">3.</span>
                  Added a feature to
                  <span className="text-greenTextColor font-bold mx-1">
                    extract information
                  </span>
                  from the given
                  <span className="text-greenTextColor font-bold mx-1">
                    url
                  </span>
                  .
                </p>
              </div>
            </div>
          ) : (
            <div className="block">
              <div className="pt-2 flex">
                <span className="text-white text-xl">FrontEnd Developer</span>
                <span className="text-greenTextColor font-black ml-2 text-xl">
                  @
                  <a
                    href="https://www.watconsult.com/"
                    className="text-greenTextColor font-black ml-2 text-xl hover:text-greenTextColor hover:underline"
                  >
                    Wat Consult
                  </a>
                </span>
              </div>
              <div className="block">
                <span className="text-secondColor text-md">
                  May 2019 - June 2019
                </span>
              </div>
              <div className="block text-lg">
                <p className="text-secondColor m-0">
                  <span className="text-greenTextColor font-bold mr-2">1.</span>
                  During six weeks of internship in wat consult created
                  <a
                    href="https://github.com/samsaw777/LucidPhone"
                    className="text-greenTextColor font-bold mx-1 hover:text-greenTextColor hover:underline"
                  >
                    Responsive websites
                  </a>
                  , google templates.
                </p>
                <p className="text-secondColor m-0">
                  <span className="text-greenTextColor font-bold mr-2">2.</span>
                  Created template
                  <a
                    href="https://github.com/samsaw777/JungleBook"
                    className="text-greenTextColor font-bold mx-1 hover:text-greenTextColor hover:underline"
                  >
                    websites.
                  </a>
                </p>
                <p className="text-secondColor m-0">
                  <span className="text-greenTextColor font-bold mr-2">3.</span>
                  Created a
                  <a
                    href="https://github.com/samsaw777/Qizz-HTMl-CSS-JS-PHP-"
                    className="text-greenTextColor font-bold mx-1 hover:text-greenTextColor hover:underline"
                  >
                    Quiz
                  </a>
                  with PHP backend. .
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;
