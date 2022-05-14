import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
const Inprogressprojects = [
  {
    name: "AirBNB CLone",
    desc: "Created a Airbnb clone.",
    stackUsed: ["Next.js", "Tailwindcss"],
    githubLink: "https://github.com/samsaw777/notes",
    liveLink: "https://samsawairbnbclone.vercel.app/",
  },
];

const InProgressProjects = () => {
  return (
    <div className="pt-20">
      {" "}
      <div className="block text-center">
        {" "}
        <span className="text-white text-2xl w-full font-black">
          Projects Currently Working On!
        </span>
      </div>
      <div className="grid grid-cols-1 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-2 mt-5 mb-10">
        {Inprogressprojects.map((project: any, key: any) => (
          <div
            className=" group transition duration-500 ease-in-out rounded block bg-sliderColor p-5 transform hover:-translate-y-1 hover:scale-100  cursor-pointer"
            key={project.liveLink}
            //   animate={controls}
            //   custom={key}
          >
            <div className="flex justify-end">
              {project.githubLink && (
                <a href={project.githubLink}>
                  <FiGithub className="w-5 h-5 mr-3 cursor-pointer text-white" />
                </a>
              )}
              {project.liveLink && (
                <a href={project.liveLink}>
                  <FiExternalLink className="w-5 h-5 cursor-pointer text-white" />
                </a>
              )}
            </div>
            <div className="block mt-3">
              <div className="text-lg text-greenTextColor font-black ">
                {project.name}
              </div>
              <div className="text-secondColor font-black text-md h-cardheight overflow-scroll">
                {project.desc}
              </div>
            </div>
            <div className="flex mt-auto">
              {project.stackUsed.map((stack: any, key: any) => (
                <div className="text-sm text-secondColor mr-3" key={key}>
                  {stack}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InProgressProjects;
