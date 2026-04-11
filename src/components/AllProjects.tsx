import React, { useState } from "react";
import { FiGithub, FiExternalLink, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import Navigation from "./NavigationBar";
import LinkIcons from "./LinkIcons";
import Footer from "./Footer";

const allProjects = [
  {
    id: 1,
    number: "01",
    title: "Khurana Coals",
    description: "Khurana Coals is a website build for a coal mining company.",
    highlights: [
      "Responsive design with modern UI",
      "Built with React and Tailwind CSS",
    ],
    skills: ["React", "Tailwindcss", "Typescript"],
    github: "https://github.com/khuranacoal/khuranacoals",
    demo: "https://khuranacoal.com/",
  },
  {
    id: 2,
    number: "02",
    title: "Wordle Clone",
    description: "Cloned the UI/UX functionality from Wordle.",
    highlights: [
      "Faithful recreation of Wordle mechanics",
      "Keyboard input and tile animation",
    ],
    skills: ["React.js", "Typescript", "CSS"],
    github: "https://github.com/samsaw777/wordle_roc_assignment",
    demo: "https://wordlecloneproject.vercel.app/",
  },
  {
    id: 3,
    number: "03",
    title: "AirBNB Clone",
    description: "Created an Airbnb clone with Next.js.",
    highlights: [
      "Server-side rendering with Next.js",
      "Styled with Tailwind CSS",
    ],
    skills: ["Next.js", "Tailwindcss"],
    github: "https://github.com/samsaw777/notes",
    demo: "https://samsawairbnbclone.vercel.app/",
  },
  {
    id: 4,
    number: "04",
    title: "Covid Tracker",
    description:
      "Covid tracker to view global case numbers with detailed analysis using statistics, with a dedicated India section.",
    highlights: [
      "Global and India-specific case tracking",
      "Statistical analysis with charts",
    ],
    skills: ["React", "React-Bootstrap", "Firebase"],
    github: "https://github.com/samsaw777/covidtracker",
    demo: "https://covid-19-project-361da.web.app/",
  },
  {
    id: 5,
    number: "05",
    title: "Work It",
    description:
      "An application where users can select a place on the map, mark it, and add notes about what to do there.",
    highlights: [
      "Interactive map-based task pinning",
      "Note-taking for each location",
    ],
    skills: ["React", "React-Bootstrap", "Firebase"],
    github: "https://github.com/samsaw777/MarkList",
    demo: "https://markmeprojec.web.app/",
  },
  {
    id: 6,
    number: "06",
    title: "Travello Quizz",
    description: "A quiz application developed using PHP.",
    highlights: ["Dynamic quiz generation", "PHP backend with score tracking"],
    skills: ["HTML", "CSS", "Javascript", "PHP"],
    github: "https://github.com/samsaw777/Qizz-HTMl-CSS-JS-PHP-",
  },
  {
    id: 7,
    number: "07",
    title: "RMS Group",
    description:
      "Cross-platform app developed in the final year of Diploma. Features include Feedback System, Recruitment System, and Tracking System.",
    highlights: [
      "Cross-platform with React Native",
      "Three integrated management systems",
    ],
    skills: ["React-Native", "Node.js", "Express.js", "MongoDB"],
  },
  {
    id: 8,
    number: "08",
    title: "Search By Assignment",
    description: "First assignment developed using Typescript with React.",
    highlights: [
      "Search and filter functionality",
      "TypeScript with React integration",
    ],
    skills: ["React", "Tailwindcss", "Typescript"],
    github: "https://github.com/samsaw777/ReactTypescriptList",
    demo: "https://typescriptreact.netlify.app/",
  },
  {
    id: 9,
    number: "09",
    title: "Space Invader",
    description: "Space Invader is a game developed using Python.",
    highlights: [
      "Classic arcade game recreation",
      "Built with Python and Pygame",
    ],
    skills: ["Python"],
    github: "https://github.com/samsaw777/Test_My_Knowledge",
  },
  {
    id: 10,
    number: "10",
    title: "Lucid Themes",
    description: "A responsive website built while learning web development.",
    highlights: [
      "Responsive layout with vanilla CSS",
      "Multi-page design with animations",
    ],
    skills: ["HTML", "CSS", "Javascript"],
    github: "https://github.com/samsaw777/LucidThemes",
    demo: "https://lucidthemes.netlify.app/",
  },
];

const AllProjects = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <>
      <div className="h-viewHeight bg-lightMainBackground dark:bg-navigationColor">
        <Navigation />

        <div className="h-introductionHeight flex bg-lightMainBackground dark:bg-navigationColor">
          <LinkIcons />
          <div className="w-mainWidth pt-8 overflow-scroll mx-auto 2xl:m-0 xl:m-0 lg:m-0 text-lightSubtext dark:text-secondColor">
            <div className="pt-10 mb-10">
              {/* Back button */}
              <div className="mb-8">
                <Link
                  to="/"
                  className="font-bold text-xs px-4 py-2 rounded-full bg-blue-100 dark:bg-surfaceHover text-lightHeadingText dark:text-primary hover:bg-blue-200 dark:hover:bg-border transition-colors duration-200 inline-flex items-center gap-2"
                >
                  ← Back to Home
                </Link>
              </div>

              {/* Section heading */}
              <div className="flex items-center mb-12">
                <span className="text-lightHeadingText dark:text-mainTextColor text-md sm:text-lg lg:text-2xl font-black">
                  <span className="text-lightPrimaryAccent dark:text-primary font-black text-md sm:text-lg lg:text-2xl mr-2">
                    All
                  </span>
                  Projects
                </span>
                <div className="border-t-2 border-lightPrimaryAccent dark:border-primary w-10 2xl:w-72 xl:w-72 lg:w-72 md:w-72 sm:w-32 h-1 my-auto ml-3 border-opacity-20" />
              </div>

              {/* Project grid — 2 per row on md+ */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {allProjects.map((project) => (
                  <div
                    key={project.id}
                    className="group bg-lightCardBackground dark:bg-sliderColor rounded-lg overflow-hidden transition-all duration-300 hover:bg-white dark:hover:bg-surface"
                    onMouseEnter={() => setHoveredId(project.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    <div className="p-5 sm:p-6">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-start gap-3 lg:gap-4 flex-1">
                          {/* Project number */}
                          <span className="text-lightPrimaryAccent dark:text-primary font-bold text-sm mt-1 hidden sm:block">
                            {project.number}
                          </span>

                          <div className="flex-1">
                            {/* Title */}
                            <h3 className="text-lightHeadingText dark:text-mainTextColor font-bold text-sm sm:text-base lg:text-lg group-hover:text-lightPrimaryAccent dark:group-hover:text-primary transition-colors duration-300">
                              {project.title}
                            </h3>

                            {/* Description */}
                            <p className="text-lightSubtext dark:text-secondColor text-xs sm:text-sm font-medium leading-relaxed mt-2">
                              {project.description}
                            </p>

                            {/* Highlights — hover reveal on desktop */}
                            <div
                              className={`mt-3 space-y-1.5 transition-all duration-300 overflow-hidden ${
                                hoveredId === project.id
                                  ? "max-h-40 opacity-100"
                                  : "max-h-0 opacity-0 lg:max-h-0 lg:opacity-0"
                              } max-h-40 opacity-100 sm:max-h-40 sm:opacity-100 lg:max-h-0 lg:opacity-0`}
                              style={
                                hoveredId === project.id
                                  ? { maxHeight: "160px", opacity: 1 }
                                  : {}
                              }
                            >
                              {project.highlights.map((item, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-start gap-2"
                                >
                                  <FiChevronRight className="w-3 h-3 text-lightPrimaryAccent dark:text-primary mt-1 flex-shrink-0" />
                                  <span className="text-lightSubtext dark:text-secondColor text-xs sm:text-sm">
                                    {item}
                                  </span>
                                </div>
                              ))}
                            </div>

                            {/* Tech stack */}
                            <div className="flex flex-wrap gap-2 mt-4">
                              {project.skills.map((skill, idx) => (
                                <span
                                  key={idx}
                                  className="font-bold text-xs px-3 py-1.5 rounded-full bg-blue-100 dark:bg-surfaceHover text-lightHeadingText dark:text-primary transition-colors duration-200"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Links */}
                        <div className="flex gap-3 flex-shrink-0 mt-1">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-lightSubtext dark:text-secondColor hover:text-lightPrimaryAccent dark:hover:text-primary transition-colors duration-200"
                            >
                              <FiGithub className="w-4 h-4 sm:w-5 sm:h-5" />
                            </a>
                          )}
                          {project.demo && (
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-lightSubtext dark:text-secondColor hover:text-lightPrimaryAccent dark:hover:text-primary transition-colors duration-200"
                            >
                              <FiExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Bottom accent line */}
                    <div className="h-0.5 bg-lightPrimaryAccent dark:bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </div>
                ))}
              </div>
            </div>
            <Footer />
          </div>
          <div className="w-sideWidth 2xl:flex xl:flex lg:flex md:flex flex-col hidden justify-end">
            <span className="text-lightSubtext dark:text-secondColor mode mx-auto text-lg">
              Sameep . Sawant . 777
            </span>
            <div className="h-32 border-r-2 border-lightBorder dark:border-secondColor w-3/6 mt-3"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProjects;
