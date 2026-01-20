import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Workify from "../Images/workify.png";
const CurrentProject = () => {
  return (
    <div className="pt-36 mb-32">
      <div className="flex">
        <div className="flex">
          <span className="text-redColor mr-2 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-2xl text-2xl font-black">
            3.
          </span>
          <span className="text-white 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-2xl text-2xl font-black">
            Currently Building
          </span>
        </div>
        <div className="border-t-2 border-greenTextColor w-10 2xl:w-72 xl:w-72 lg:w-72 md:w-72 sm:w-32 h-1 my-auto ml-3 border-opacity-20"></div>
      </div>

      <div className="mt-5">
        <div className="flex 2xl:bg-none xl:bg-none lg:bg-none bg-sliderColor p-5 rounded transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100 cursor-pointer">
          <div className="block w-full relative ">
            <div className="text-greenTextColor font-bold text-lg">
              Current Project
            </div>
            <div className="text-white font-black text-xl ml-auto ">
              Workify
            </div>
            <div className="w-full mt-2">
              <div className="text-secondColor  text-md font-bold">
                Workify is a project management tool used to manage all the
                updates, features and bugs of a project seemlessly in one
                platform.
              </div>
              <div className="text-secondColor  font-bold text-md mt-2 lg:hidden 2xl:flex xl:flex md:flex mr-4">
                This webapp also have github integration which will allow users
                to make github functions from this same app.
              </div>
              <div className="text-secondColor font-bold text-md mt-2">
                Some Features:-
                <span className="text-greenTextColor ml-2 font-blod text-md">
                  Google authentication
                </span>
                ,{" "}
                <span className="text-greenTextColor  font-blod text-md">
                  Kanban
                </span>
                ,{" "}
                <span className="text-greenTextColor  font-blod text-md">
                  Scrum
                </span>
                ,{" "}
                <span className="text-greenTextColor  font-blod text-md">
                  Bug Tracking
                </span>
                ,{" "}
                <span className="text-greenTextColor  font-blod text-md">
                  Github Integration.
                </span>
              </div>
            </div>
            <div className=" mt-4 w-full">
              <span className="text-secondColor font-bold text-sm">
                Typescript
              </span>
              <span className="text-secondColor ml-3 font-bold text-sm">
                Next.js
              </span>
              <span className="text-secondColor ml-3 font-bold text-sm">
                Tailwindcss
              </span>
              <span className="text-secondColor ml-3 font-bold text-sm">
                Supabase
              </span>
              <span className="text-secondColor ml-3 font-bold text-sm">
                Prisma
              </span>
              <span className="text-secondColor ml-3 font-bold text-sm">
                Graphql
              </span>
              <span className="text-secondColor ml-3 font-bold text-sm">
                Apollo Server
              </span>
              <span className="text-secondColor ml-3 font-bold text-sm">
                Passport.js
              </span>
            </div>
            <div className="flex mt-2 w-full">
              {/* <a href="https://github.com/samsaw777/GanpatiWebiteUer">
              <FiGithub className="w-5 h-5 mr-3 cursor-pointer text-white" />
            </a> */}
              <a href="https://workifytask.vercel.app/">
                <FiExternalLink className="w-5 h-5 cursor-pointer text-white" />
              </a>
            </div>
          </div>
          <img
            src={Workify}
            alt="Workify Project Manager"
            className="w-iWidth h-iHeight rounded hidden 2xl:block xl:block lg:block xl:w-xlWidth xl:h-xlHeight lg:w-lgWidth lg:h-lgHeight ml-3"
          />
        </div>
      </div>
    </div>
  );
};

export default CurrentProject;
