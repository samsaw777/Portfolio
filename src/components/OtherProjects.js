import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
const Projects = [
  {
    name: "Covid Tracker",
    desc: "Covid tracker is a app where we can see the number of  covid cases throught the world with detailed analysis using statistis and also there is a seperate covid cases number for INDIA.",
    stackUsed: ["React", "React-Bootstrap", "Firebase"],
    githubLink: "https://github.com/samsaw777/covidtracker",
    liveLink: "https://covid-19-project-361da.web.app/",
  },
  {
    name: "Work It",
    desc: "Work It is a application where user can select the place where he want to do things and can mark it on the map and add a note of what to do in that place.",
    stackUsed: ["React", "React-Bootstrap", "Firebase"],
    githubLink: "https://github.com/samsaw777/MarkList",
    liveLink: "https://markmeprojec.web.app/",
  },
  {
    name: "Travello Quizz",
    desc: "This is an quizz application developed using PHP.",
    stackUsed: ["HTML", "CSS", "Javascript", "PHP"],
    githubLink: "https://github.com/samsaw777/Qizz-HTMl-CSS-JS-PHP-",
  },
  {
    name: "RMS Group",
    desc: "RMS Group is a cross Platform app developed in the final year of my Diploma.The main functions of this application were Feedback System, Recruitment System, Tracking System.",
    stackUsed: ["React-Native", "Node.js", "Express.js", "MongoDB"],
  },
  {
    name: "Search By Assignment",
    desc: "This was the first assignment developed using Typescript.",
    stackUsed: ["React", "Tailwindcss", "Typescript"],
    githubLink: "https://github.com/samsaw777/ReactTypescriptList",
    liveLink: "https://typescriptreact.netlify.app/",
  },
  {
    name: "Space Invader",
    desc: "Space Invader is a game developed using Python",
    stackUsed: ["Python"],
    githubLink: "https://github.com/samsaw777/Test_My_Knowledge",
  },

  {
    name: "Lucid Themes",
    desc: "Lucid theme is a responsvie website build while learning web development.",
    stackUsed: ["HTML", "CSS", "Javascript"],
    githubLink: "https://github.com/samsaw777/LucidPhone",
    liveLink: "https://lucidtheme.netlify.app/",
  },

  {
    name: "Jungle Book",
    desc: "Jungle Book is a responsvie website build while learning web development.",
    stackUsed: ["HTML", "CSS", "Javascript"],
    githubLink: "https://github.com/samsaw777/JungleBook",
    liveLink: "https://junglebook.netlify.app/",
  },
  {
    name: "Quizz using Javascript",
    desc: "Developed quizz using vanilla JavaScript.",
    stackUsed: ["HTML", "CSS", "Javascript"],
    githubLink: "https://github.com/samsaw777/JavascriptScript-Qizz",
    liveLink: "https://samsawjavascriptqizz.netlify.app/",
  },
];
const OtherProjects = () => {
  return (
    <div className="pt-20 2xl:mx-20">
      <div className="block text-center">
        <span className="text-white text-2xl w-full font-black">
          Other NoteWorthy Projects
        </span>
      </div>
      <div className="grid grid-cols-1 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-2 mt-5 mb-10">
        {Projects.map((project) => (
          <div
            className=" group transition duration-500 ease-in-out rounded block bg-sliderColor p-5 transform hover:-translate-y-1 hover:scale-100  cursor-pointer"
            key={project.liveLink}
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
              {project.stackUsed.map((stack) => (
                <div className="text-sm text-secondColor mr-3" key={stack}>
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

export default OtherProjects;
