import React from "react";
import Remote from "../Images/remote.png";
import Ganpati from "../Images/shreeganesharts.PNG";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";

const MainProject = () => {
  const projectsData = [
    {
      id: 1,
      title: "Remote First Work Tracker",
      description:
        "Remote First Work tracker is tracking software used to track your daily activities in an organization.",
      descriptionExtra:
        "User can create groups and add members in an organization which can track each user progress.",
      features: [
        "Google authentication",
        "Chating functionality",
        "To do section",
      ],
      skills: ["React", "Nodejs", "Express", "FireStore", "React-Redux"],
      image: Remote,
      github: "https://github.com/samsaw777/Remote-First-Work-Tracker",
      demo: "https://remoteworktracker.netlify.app/",
      imagePosition: "left",
    },
    {
      id: 2,
      title: "Ganpati Booking Website(For Client)",
      description:
        "Created Ganpati booking website for a client. This website has two panel, user and admin panel.",
      descriptionExtra:
        "User can now book a Ganpati Bappa murti directly from this website online.",
      features: ["Google authentication", "Booking section"],
      skills: ["React", "Firebase", "AOS(Animation)", "React-Bootstrap"],
      image: Ganpati,
      github: "https://github.com/samsaw777/GanpatiWebiteUer",
      demo: "https://shreeganeshaarts.web.app/",
      imagePosition: "left",
    },
    {
      id: 3,
      title: "AI Content Generator",
      description:
        "An intelligent content generation tool powered by AI that helps users create high-quality content for blogs and social media.",
      descriptionExtra:
        "Users can generate customized content with multiple templates and tone variations.",
      features: ["AI powered generation", "Multiple templates"],
      skills: ["React", "TypeScript", "Node.js", "OpenAI"],
      github: "https://github.com",
      demo: "https://example.com",
      imagePosition: "none",
    },
  ];

  return (
    <div className="pt-36 mb-32" id="projects">
      <div className="flex">
        <div className="flex">
          <span className="text-redColor mr-2 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-2xl text-2xl font-black">
            4.
          </span>
          <span className="text-white 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-2xl text-2xl font-black">
            Some Things I've Built
          </span>
        </div>
        <div className="border-t-2 border-greenTextColor w-10 2xl:w-72 xl:w-72 lg:w-72 md:w-72 sm:w-32 h-1 my-auto ml-3 border-opacity-20"></div>
      </div>

      {projectsData.map((project, index) => (
        <div key={project.id} className="block mt-10">
          <div className="flex 2xl:bg-none xl:bg-none lg:bg-none bg-sliderColor p-5 rounded transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100 cursor-pointer">
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className={`w-iWidth h-iHeight rounded hidden 2xl:block xl:block lg:block xl:w-xlWidth xl:h-xlHeight lg:w-lgWidth lg:h-lgHeight ${
                  project.imagePosition === "left" ? "" : "ml-3"
                }`}
              />
            )}
            <div className="block w-full relative">
              <div className="text-greenTextColor font-bold text-lg flex 2xl:ml-3 xl:ml-3 lg:ml-3 2xl:p-1 xl:p-1 lg:p-1 justify-start">
                Featured Project
              </div>
              <div className="text-white font-black text-xl flex 2xl:ml-3 xl:ml-3 lg:ml-3 2xl:p-1 xl:p-1 lg:p-1 justify-start">
                {project.title}
              </div>
              <div className="w-full bg-none 2xl:ml-3 xl:ml-3 lg:ml-3 rounded 2xl:p-1 xl:p-1 lg:p-1 lg:m-0 xl:m-0 2xl:m-0">
                <div className="text-secondColor flex justify-start text-md font-bold">
                  {project.description}
                </div>
                <div className="text-secondColor flex justify-start font-bold text-md mt-2 lg:hidden 2xl:flex xl:flex md:flex">
                  {project.descriptionExtra}
                </div>
                <div className="text-secondColor font-bold mt-2 text-md block 2xl:ml-auto xl:ml-auto lg:ml-auto">
                  Some Features:-
                  {project.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="text-greenTextColor ml-2 font-blod text-md"
                    >
                      {feature}
                      {idx < project.features.length - 1 ? ", " : "."}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex 2xl:justify-end xl:justify-end lg:justify-end justify-start mt-4 w-full flex-wrap gap-2">
                {project.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="text-secondColor font-black text-md px-3 py-2 bg-gray-800 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="flex 2xl:justify-end xl:justify-end lg:justify-end justify-start mt-3 w-full">
                <a href={project.github}>
                  <FiGithub className="w-5 h-5 mr-3 cursor-pointer text-white" />
                </a>
                <a href={project.demo}>
                  <FiExternalLink className="w-5 h-5 cursor-pointer text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* See All Projects Button */}
      <div className="flex justify-center mt-10 mb-10">
        <Link
          to="/projects"
          className="text-greenTextColor font-bold text-lg hover:text-white transition duration-300 border-b-2 border-greenTextColor hover:border-white pb-2"
        >
          See All Projects
        </Link>
      </div>
    </div>
  );
};

export default MainProject;
