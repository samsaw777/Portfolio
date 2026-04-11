import React, { useState } from "react";

const Work = () => {
  const experiences = [
    {
      id: 1,
      companyName: "Elastik Teams",
      company_Logo: "",
      companyLink: "https://www.elastikteams.com/",
      location: "Pune, Maharashtra, India",
      logo: "ET",
      totalDuration: "2 yrs 7 mos",
      roles: [
        {
          id: "et-sde",
          role: "Software Development Engineer",
          employmentType: "Full-time",
          date: "Jul 2023 - Present",
          duration: "1 yr 5 mos",
          workDone: [
            "Designed a supervisor-based AI agent to choose between RAG and web search based on the query, improving response relevancy by 25% and reducing API calls by 15%.",
            "Built custom training tools for multi-format input (PDF, Word, PPT, TXT, MP3, MP4, YouTube), increasing training coverage by 35% and enhancing RAG response quality.",
            "Implemented a Redis-based content system to handle natural language into SQL, boosting query execution by 15% and generation accuracy by 10%.",
            "Created a URL-based multi-link training tool, improving website training efficiency by 10%.",
            "Developed a built upload feature for inserting large datasets into the DB, increasing data entry speed and operational efficiency by 40%.",
            "Resolved Azure migration mismatches, ensuring Sequelize model and DB synchronization to avoid deployment failures.",
            "Enhanced Kendo editor in Agilify Web by adding custom tools (cut, copy, paste, undo, redo), boosting editing efficiency by 30%.",
          ],
          technologies: [
            "React.js",
            "Node.js",
            "Express.js",
            "Sequelize",
            "Azure",
            "TypeScript",
            "Redis",
            "Passport.js",
            "AI/ML",
          ],
        },
        {
          id: "et-intern",
          role: "Software Engineer Intern",
          employmentType: "Internship",
          date: "Jan 2023 - Jun 2023",
          duration: "6 mos",
          workDone: [
            "Implemented a debounce search feature in ElastiK, improving user search efficiency by 10%.",
            "Built a React table component with search, sort, and filter options, enhancing the user experience by 5%.",
            "Optimized API code by adding try-catch and async-await, increasing error-handling efficiency by 10%.",
            "Created React components using direflow.io and developed APIs for utilization in a site supporting a company project.",
            "Fixed cron job timing to execute every 5 minutes as intended, enhancing task scheduling accuracy by 100%.",
            "Created generic Passport.js strategies, reducing login integration time for team members by 10%.",
          ],
          technologies: [
            "React.js",
            "Node.js",
            "Express.js",
            "TypeScript",
            "Direflow.io",
          ],
        },
      ],
      isExpanded: true,
    },
    {
      id: 2,
      company_Logo: "",
      companyName: "Noggin",
      companyLink: "https://www.noggin.so/",
      location: "Remote",
      logo: "N",
      totalDuration: "5 mos",
      roles: [
        {
          id: "noggin-intern",
          role: "Frontend Developer Intern",
          employmentType: "Internship",
          date: "Jun 2021 - Oct 2021",
          duration: "5 mos",
          workDone: [
            "Improved application performance significantly by implementing Redis, resulting in a 15% increase in resource fetching speed.",
            "Enhanced user experience by updating the project UI, increasing it by 20%.",
            "Implementing a feature to boost app performance by 25% by adding slugs to links and efficient data fetching.",
            "Worked with modern tech stack including Next.js, TypeScript, and GraphQL.",
          ],
          technologies: [
            "Next.js",
            "TypeScript",
            "Node.js",
            "Tailwind CSS",
            "Prisma",
            "GraphQL",
            "PostgreSQL",
            "Redis",
          ],
        },
      ],
      isExpanded: true,
    },
    {
      id: 3,
      company_Logo: "",
      companyName: "Wat Consult",
      companyLink: "https://www.watconsult.com/",
      location: "Mumbai, Maharashtra, India",
      logo: "WC",
      totalDuration: "2 mos",
      roles: [
        {
          id: "wc-intern",
          role: "Frontend Developer Intern",
          employmentType: "Internship",
          date: "May 2019 - Jun 2019",
          duration: "2 mos",
          workDone: [
            "During six weeks of internship at Wat Consult, created responsive websites and Google templates.",
            "Developed template websites with modern design patterns.",
            "Built an interactive Quiz application with PHP backend.",
            "Gained hands-on experience with web development fundamentals.",
          ],
          technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "PHP",
            "Bootstrap",
            "jQuery",
          ],
        },
      ],
      isExpanded: true,
    },
  ];

  const [expandedCompanies, setExpandedCompanies] = useState([1, 2, 3]);
  const [expandedRoles, setExpandedRoles] = useState([
    "et-sde",
    "et-intern",
    "noggin-intern",
    "wc-intern",
  ]);

  const toggleCompanyExpand = (id: number) => {
    setExpandedCompanies((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const toggleRoleExpand = (roleId: string) => {
    setExpandedRoles((prev) =>
      prev.includes(roleId)
        ? prev.filter((item) => item !== roleId)
        : [...prev, roleId],
    );
  };

  return (
    <div className="pt-32 min-h-screen" id="experience">
      {/* Section heading */}
      <div className="flex items-center mb-10">
        <span className="text-lightHeadingText dark:text-mainTextColor text-md sm:text-lg lg:text-2xl font-black">
          <span className="text-lightPrimaryAccent dark:text-primary font-black text-md sm:text-lg lg:text-2xl mr-2">
            2.
          </span>
          Experience
        </span>
        <div className="border-t-2 border-lightPrimaryAccent dark:border-primary w-16 2xl:w-72 xl:w-72 lg:w-72 md:w-72 sm:w-32 h-1 my-auto ml-3 border-opacity-20" />
      </div>

      {/* Single card */}
      <div className="bg-lightCardBackground dark:bg-sliderColor rounded">
        {experiences.map((company, companyIndex) => (
          <div key={company.id}>
            {companyIndex > 0 && (
              <div className="border-t border-lightBorder dark:border-border" />
            )}

            <div className="p-3 sm:p-4 md:p-6">
              <div className="flex gap-4">
                {/* Logo — hidden on mobile, shown on lg+ */}
                <div className="hidden lg:flex flex-shrink-0">
                  {company.company_Logo ? (
                    <img
                      src={company.company_Logo}
                      alt={company.companyName}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                  ) : (
                    <div className="w-12 h-12 bg-lightSurfaceHover dark:bg-surface rounded-lg flex items-center justify-center text-lightSubtext dark:text-secondColor font-bold text-xl">
                      {company.logo}
                    </div>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  {/* Company name + meta */}
                  <div className="mb-3">
                    <h3 className="text-lightHeadingText dark:text-mainTextColor font-bold">
                      <a
                        href={company.companyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-lightPrimaryAccent dark:hover:text-primary transition-colors text-sm md:text-base lg:text-lg font-bold"
                      >
                        {company.companyName}
                      </a>
                    </h3>
                    {company.roles.length > 1 && (
                      <p className="text-lightSubtext dark:text-secondColor text-xs sm:text-sm lg:text-sm font-bold mt-1">
                        {company.totalDuration} · {company.location}
                      </p>
                    )}
                  </div>

                  {/* Roles */}
                  <div
                    className={
                      company.roles.length > 1 ? "lg:relative lg:pl-2" : ""
                    }
                  >
                    {company.roles.map((role, roleIndex) => (
                      <div
                        key={role.id}
                        className={roleIndex > 0 ? "mt-5 relative" : "relative"}
                      >
                        {/* Timeline — hidden on mobile, shown lg+ */}
                        {company.roles.length > 1 &&
                          expandedCompanies.includes(company.id) && (
                            <>
                              <div className="hidden lg:block absolute w-2 h-2 bg-lightPrimaryAccent dark:bg-primary rounded-full -left-6 top-2 z-10" />
                              {roleIndex === 0 && (
                                <div
                                  className="hidden lg:block absolute w-0.5 bg-lightBorder dark:bg-border"
                                  style={{
                                    left: "-21px",
                                    top: "18px",
                                    height: "calc(100% + 0.75rem)",
                                  }}
                                />
                              )}
                            </>
                          )}

                        {/* Role content */}
                        <div
                          className={
                            company.roles.length > 1 &&
                            expandedCompanies.includes(company.id)
                              ? "lg:ml-4"
                              : ""
                          }
                        >
                          <h4 className="text-lightHeadingText dark:text-mainTextColor font-bold text-xs sm:text-sm lg:text-base">
                            {role.role}
                          </h4>
                          <p className="text-lightSubtext dark:text-secondColor text-xs sm:text-sm lg:text-sm font-bold mt-0.5">
                            {role.employmentType} · {role.date}
                            {role.duration && ` · ${role.duration}`}
                          </p>
                          {company.roles.length === 1 && (
                            <p className="text-lightSubtext dark:text-secondColor text-xs sm:text-sm lg:text-sm font-bold">
                              {company.location}
                            </p>
                          )}

                          {expandedCompanies.includes(company.id) &&
                            expandedRoles.includes(role.id) && (
                              <div className="mt-3">
                                <ul className="space-y-4">
                                  {role.workDone.map((item, index) => (
                                    <li
                                      key={index}
                                      className="flex items-start"
                                      style={{
                                        borderBottom: "none",
                                        borderTop: "none",
                                        margin: 0,
                                      }}
                                    >
                                      <span className="text-lightPrimaryAccent dark:text-primary mr-2 mt-0.5 flex-shrink-0">
                                        •
                                      </span>
                                      <span className="text-lightSubtext dark:text-secondColor text-xs sm:text-sm lg:text-sm font-bold leading-relaxed">
                                        {item}
                                      </span>
                                    </li>
                                  ))}
                                </ul>
                                <div className="flex flex-wrap gap-2 mt-3 lg:mt-4">
                                  {role.technologies.map((tech, index) => (
                                    <span
                                      key={index}
                                      className="font-bold text-xs sm:text-sm lg:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-blue-100 dark:bg-surfaceHover text-lightHeadingText dark:text-primary transition-colors duration-200"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}

                          {expandedCompanies.includes(company.id) && (
                            <button
                              onClick={() => toggleRoleExpand(role.id)}
                              className="mt-3 text-lightHeadingText dark:text-mainTextColor hover:text-lightPrimaryAccent dark:hover:text-primary hover:font-bold text-xs sm:text-sm font-medium flex items-center gap-1 transition-colors focus:outline-none active:outline-none"
                            >
                              {expandedRoles.includes(role.id) ? (
                                <>
                                  Show less{" "}
                                  <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M5 15l7-7 7 7"
                                    />
                                  </svg>
                                </>
                              ) : (
                                <>
                                  Show more{" "}
                                  <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M19 9l-7 7-7-7"
                                    />
                                  </svg>
                                </>
                              )}
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {!expandedCompanies.includes(company.id) && (
                    <button
                      onClick={() => toggleCompanyExpand(company.id)}
                      className="mt-3 text-lightPrimaryAccent dark:text-primary text-xs sm:text-sm font-medium flex items-center gap-1 transition-colors focus:outline-none active:outline-none"
                    >
                      Show{" "}
                      {company.roles.length > 1
                        ? `${company.roles.length} roles`
                        : "more"}
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
