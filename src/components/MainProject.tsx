import React, { useState } from "react";
import { FiGithub, FiExternalLink, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const MainProject = () => {
  const projectsData = [
    {
      id: 1,
      number: "01",
      title: "Remote First Work Tracker",
      description:
        "Tracking software to monitor daily activities in an organization. Create groups, add members, and track each user's progress in real time.",
      highlights: [
        "Google authentication with secure session management",
        "Real-time chat functionality between team members",
        "Kanban-style to-do section for task tracking",
      ],
      skills: ["React", "Node.js", "Express", "Firestore", "Redux"],
      github: "https://github.com/samsaw777/Remote-First-Work-Tracker",
      demo: "https://remoteworktracker.netlify.app/",
    },
    {
      id: 2,
      number: "02",
      title: "Ganpati Booking Website",
      description:
        "Client project with dual user/admin panels. Users can book Ganpati murti online through a streamlined booking flow.",
      highlights: [
        "Dual panel system for users and administrators",
        "Online booking with Google authentication",
        "Responsive design with smooth animations",
      ],
      skills: ["React", "Firebase", "AOS", "Bootstrap"],
      github: "https://github.com/samsaw777/GanpatiWebiteUer",
      demo: "https://shreeganeshaarts.web.app/",
    },
    {
      id: 3,
      number: "03",
      title: "AI Content Generator",
      description:
        "Intelligent content generation tool powered by OpenAI. Create high-quality blog and social media content with multiple templates and tone variations.",
      highlights: [
        "AI-powered content generation with GPT",
        "Multiple templates for different content types",
        "Customizable tone and style settings",
      ],
      skills: ["React", "TypeScript", "Node.js", "OpenAI"],
      github: "https://github.com",
      demo: "https://example.com",
    },
  ];

  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="pt-36 mb-32" id="projects">
      {/* Section heading */}
      <div className="flex items-center mb-12">
        <span className="text-lightHeadingText dark:text-mainTextColor text-md sm:text-lg lg:text-2xl font-black">
          <span className="text-lightPrimaryAccent dark:text-primary font-black text-md sm:text-lg lg:text-2xl mr-2">
            4.
          </span>
          Some Things I've Built
        </span>
        <div className="border-t-2 border-lightPrimaryAccent dark:border-primary w-16 2xl:w-72 xl:w-72 lg:w-72 md:w-72 sm:w-32 h-1 my-auto ml-3 border-opacity-20" />
      </div>

      {/* Project list */}
      <div className="space-y-4">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="group bg-lightCardBackground dark:bg-sliderColor rounded-lg overflow-hidden transition-all duration-300 hover:bg-lightSurfaceHover dark:hover:bg-surface"
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="p-5 sm:p-6 lg:p-8">
              {/* Top row: number + title + links */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4 lg:gap-6">
                  {/* Project number */}
                  <span className="text-lightPrimaryAccent dark:text-primary font-bold text-sm lg:text-base mt-1 hidden sm:block">
                    {project.number}
                  </span>

                  <div className="flex-1">
                    {/* Title */}
                    <h3 className="text-lightHeadingText dark:text-mainTextColor font-bold text-base sm:text-lg lg:text-xl group-hover:text-lightPrimaryAccent dark:group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-lightSubtext dark:text-secondColor text-xs sm:text-sm font-medium leading-relaxed mt-2 max-w-2xl">
                      {project.description}
                    </p>

                    {/* Highlights — shown on hover/always on mobile */}
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
                        <div key={idx} className="flex items-start gap-2">
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

      {/* See All Projects */}
      <div className="flex justify-center mt-12 mb-10">
        <Link
          to="/projects"
          className="font-bold text-sm px-6 py-3 rounded-full bg-blue-100 dark:bg-surfaceHover text-lightHeadingText dark:text-primary hover:bg-blue-200 dark:hover:bg-border transition-colors duration-200"
        >
          See All Projects →
        </Link>
      </div>
    </div>
  );
};

export default MainProject;
