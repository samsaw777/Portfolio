import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Navigation from "./NavigationBar";
import LinkIcons from "./LinkIcons";
import Footer from "./Footer";

const freeLancingProjects = [
  {
    name: "Khurana Coals",
    desc: "Khurana Coals is a website build for a coal mining company.",
    stackUsed: ["React", "Tailwindcss", "Typescript"],
    githubLink: "https://github.com/khuranacoal/khuranacoals",
    liveLink: "https://khuranacoal.com/",
  },
];

const otherProjects = [
  {
    name: "Wordle Clone",
    desc: "Cloned the UI/UX functionality from Wordle.",
    stackUsed: ["React.js", "Typescript", "CSS"],
    githubLink: "https://github.com/samsaw777/wordle_roc_assignment",
    liveLink: "https://wordlecloneproject.vercel.app/",
  },
  {
    name: "AirBNB CLone",
    desc: "Created a Airbnb clone.",
    stackUsed: ["Next.js", "Tailwindcss"],
    githubLink: "https://github.com/samsaw777/notes",
    liveLink: "https://samsawairbnbclone.vercel.app/",
  },
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
    githubLink: "https://github.com/samsaw777/LucidThemes",
    liveLink: "https://lucidthemes.netlify.app/",
  },
];

const allProjects = [...freeLancingProjects, ...otherProjects];

const AllProjects = () => {
  return (
    <>
      <div className="h-viewHeight bg-navigationColor">
        <Navigation />

        <div className="h-introductionHeight bg-navigationColor flex">
          <LinkIcons />
          <div className="w-mainWidth text-secondColor pt-8 overflow-scroll mx-auto 2xl:m-0 xl:m-0 lg:m-0">
            <div className="pt-10 mb-10">
              <div className="flex">
                <div className="flex">
                  <span className="text-redColor mr-2 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-2xl text-2xl font-black">
                    All
                  </span>
                  <span className="text-white 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-2xl text-2xl font-black">
                    Projects
                  </span>
                </div>
                <div className="border-t-2 border-greenTextColor w-10 2xl:w-72 xl:w-72 lg:w-72 md:w-72 sm:w-32 h-1 my-auto ml-3 border-opacity-20"></div>
              </div>
              <div className="grid grid-cols-1 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-2 mt-10">
                {allProjects.map((project: any, key: any) => (
                  <div
                    className="group transition duration-500 ease-in-out rounded block bg-sliderColor p-5 transform hover:-translate-y-1 hover:scale-100 cursor-pointer"
                    key={key}
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
                      <div className="text-lg text-greenTextColor font-black">
                        {project.name}
                      </div>
                      <div className="text-secondColor font-black text-md h-cardheight overflow-scroll">
                        {project.desc}
                      </div>
                    </div>
                    <div className="flex mt-auto flex-wrap gap-2">
                      {project.stackUsed.map((stack: any, key: any) => (
                        <span
                          className="text-secondColor font-black text-md px-3 py-1 bg-sliderColor rounded"
                          key={key}
                        >
                          {stack}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Footer />
          </div>
          <div className="w-sideWidth text-gray-100 2xl:flex xl:flex lg:flex md:flex flex-col hidden justify-end">
            <span className="text-secondColor mode mx-auto text-lg">
              Sameep . Sawant . 777
            </span>
            <div className="h-32 border-r-2 border-secondColor w-3/6 mt-3"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProjects;
