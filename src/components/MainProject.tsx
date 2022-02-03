import React from "react";
import Remote from "../Images/remote.png";
import Ganpati from "../Images/shreeganesharts.PNG";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const MainProject = () => {
  return (
    <div className="pt-44 mb-32" id="projects">
      <div className="flex">
        <div className="flex">
          <span className="text-greenTextColor mr-2 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-2xl text-2xl font-black">
            3.
          </span>
          <span className="text-white 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-2xl text-2xl font-black">
            Some Things I've Built
          </span>
        </div>
        <div className="border-t-2 border-secondColor w-10 2xl:w-72 xl:w-72 lg:w-72 md:w-72 sm:w-32 h-1 my-auto ml-3 border-opacity-20"></div>
      </div>
      <div className="block mt-10  2xl:bg-none xl:bg-none lg:bg-none bg-sliderColor p-5 rounded transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100 cursor-pointer">
        <div className="flex">
          <img
            src={Remote}
            alt="Remote First Woke Tracker"
            className="w-iWidth h-iHeight rounded hidden 2xl:block xl:block lg:block xl:w-xlWidth xl:h-xlHeight lg:w-lgWidth lg:h-lgHeight border-white border"
          />
          <div className="block w-full relative">
            <div className="text-greenTextColor font-bold text-lg flex 2xl:ml-3 xl:ml-3 lg:ml-3 2xl:p-1 xl:p-1 lg:p-1 justify-start">
              Featured Project
            </div>
            <div className="text-white font-black text-xl  flex 2xl:ml-3 xl:ml-3 lg:ml-3 2xl:p-1 xl:p-1 lg:p-1 justify-start">
              Remote First Work Tracker
            </div>
            <div className="w-full  bg-none  2xl:ml-3 xl:ml-3 lg:ml-3 rounded 2xl:p-1 xl:p-1 lg:p-1  lg:m-0 xl:m-0 2xl:m-0">
              <div className="text-secondColor flex  justify-start text-md font-bold ">
                Remote First Work tracker is tracking software used to track
                your daily activities in an organization.
              </div>
              <div className="text-secondColor flex  justify-start font-bold text-md lg:hidden 2xl:flex xl:flex md:flex ">
                User can create groups and add members in an organization which
                can track each user progress.
              </div>
              <div className="text-secondColor font-bold text-md block 2xl:ml-auto xl:ml-auto lg:ml-auto">
                Some Features:-
                <span className="text-greenTextColor ml-2 font-blod text-md">
                  Google authentication
                </span>
                ,{" "}
                <span className="text-greenTextColor  font-blod text-md">
                  Chating functionality
                </span>
                ,{" "}
                <span className="text-greenTextColor  font-blod text-md">
                  To do section.
                </span>
              </div>
            </div>
            <div className="flex 2xl:justify-end xl:justify-end lg:justify-end justify-start mt-4 w-full">
              <span className="text-secondColor font-bold text-sm">React</span>
              <span className="text-secondColor ml-3 font-bold text-sm">
                Nodejs
              </span>
              <span className="text-secondColor ml-3 font-bold text-sm">
                Express
              </span>
              <span className="text-secondColor ml-3 font-bold text-sm">
                FireStore
              </span>
              <span className="text-secondColor ml-3 font-bold text-sm">
                React-Redux
              </span>
            </div>
            <div className="flex 2xl:justify-end xl:justify-end lg:justify-end justify-start mt-3 w-full">
              <a href="https://github.com/samsaw777/NoteITFRONTEND">
                <FiGithub className="w-5 h-5 mr-3 cursor-pointer text-white" />
              </a>
              <a href="https://remoteworktracker.netlify.app/">
                <FiExternalLink className="w-5 h-5 cursor-pointer text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* second Project */}
      <div className="block mt-10">
        <div className="flex 2xl:bg-none xl:bg-none lg:bg-none bg-sliderColor p-5 rounded transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100 cursor-pointer">
          <div className="block w-full relative ">
            <div className="text-greenTextColor font-bold text-lg">
              Featured Project
            </div>
            <div className="text-white font-black text-xl ml-auto ">
              Ganpati Booking Website(For Client)
            </div>
            <div className="w-full mt-2">
              <div className="text-secondColor  text-md font-bold">
                Created Ganpati booking website for a client. This website has
                two panel, user and admin panel.
              </div>
              <div className="text-secondColor  font-bold text-md lg:hidden 2xl:flex xl:flex md:flex mr-4">
                User can now book a Ganpati Bappa murti directly from this
                website online.
              </div>
              <div className="text-secondColor font-bold text-md">
                Some Features:-
                <span className="text-greenTextColor ml-2 font-blod text-md">
                  Google authentication
                </span>
                ,{" "}
                <span className="text-greenTextColor  font-blod text-md">
                  Booking section.
                </span>
              </div>
            </div>
            <div className=" mt-4 w-full">
              <span className="text-secondColor font-bold text-sm">React</span>
              <span className="text-secondColor ml-2 font-bold text-sm">
                Firebase
              </span>
              <span className="text-secondColor ml-2 font-bold text-sm">
                AOS(Animation)
              </span>
              <span className="text-secondColor ml-2 font-bold text-sm">
                React-Bootstrap
              </span>
            </div>
            <div className="flex mt-2 w-full">
              <a href="https://github.com/samsaw777/GanpatiWebiteUer">
                <FiGithub className="w-5 h-5 mr-3 cursor-pointer text-white" />
              </a>
              <a href="https://shreeganeshaarts.web.app/">
                <FiExternalLink className="w-5 h-5 cursor-pointer text-white" />
              </a>
            </div>
          </div>
          <img
            src={Ganpati}
            alt="Remote First Woke Tracker"
            className="w-iWidth h-iHeight rounded hidden 2xl:block xl:block lg:block xl:w-xlWidth xl:h-xlHeight lg:w-lgWidth lg:h-lgHeight ml-3"
          />
        </div>
      </div>
    </div>
  );
};

export default MainProject;
