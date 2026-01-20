// import React, { useState } from "react";
// import Tabs from "./reusecomponent/Tabs";
// import Job from "./reusecomponent/Job";
// const Work = () => {
//   const [activeState, setActiveState] = useState("Elastik Teams");

//   const showJobs = (activeTab: string) => {
//     switch (activeTab) {
//       case "Elastik Teams":
//         return {
//           role: "Software Developpment Engineer",
//           companyName: "Elastik Teams",
//           companyLink: "https://www.elastikteams.com/",
//           date: "Jan 2023 - Present",
//           workDone: [
//             "Implemented a debounce search feature in Elastik, improving user search efficiency by 10%. Integrated it into a company project.",
//             "I developed a React table component with search, sort, and filter options, enhancing the user experience by 5% in a different project.",
//             "I optimized API code by adding try-catch and async-await, increasing error-handling efficiency by 10%.",
//             "Created React components using direflow.io and developed APIs for utilization in a site supporting a company project.",
//           ],
//           technologies: [
//             "ReactJS",
//             "Exppress.js",
//             "Node,js",
//             "Sequelize",
//             "Azure",
//             "Typescript",
//           ],
//         };
//       case "Noggin":
//         return {
//           role: "Frontend Developer Intern",
//           companyName: "Noggin",
//           companyLink: "https://www.noggin.so/",
//           date: "June 2021 - October 2021",
//           workDone: [
//             "Improved application performance significantly by implementing Redis, resulting in a 15% increase in resource fetching speed and optimizing the overall performance.",
//             "I enhanced user experience by updating the project UI, increasing it by 20%.",
//             "Implementing a feature to boost app performance by 25% by adding slugs to links and efficient data fetching.",
//           ],
//           technologies: [
//             "Nextjs",
//             "Typescript",
//             "Nodejs",
//             "Tailwindcss",
//             "Prisma",
//             "GraphQL",
//             "PostgreSQL",
//             "Reddis",
//           ],
//         };
//       case "Wat Consult":
//         return {
//           role: "Frontend Developer Intern",
//           companyName: "Wat Consult",
//           companyLink: "https://www.watconsult.com/",
//           date: "May 2019 - June 2019",
//           workDone: [
//             "During six weeks of internship in wat consult created Responsive websites, google templates.",
//             "Created template websites.",
//             "Created a Quiz with PHP backend.",
//           ],
//           technologies: [
//             "HTML",
//             "CSS",
//             "Node,Javascrippt",
//             "PHP",
//             "Bootstrap",
//             "JQuery",
//           ],
//         };

//       default:
//         return {
//           role: "Frontend Developer",
//           companyName: "Elastik Teams",
//           companyLink: "https://elastikteams.com/",
//           date: "Jan 2021 - Present",
//           workDone: [
//             "Developed the frontend of the website using ReactJS, NextJS, TailwindCSS, and Framer Motion.",
//             "Developed the backend of the website using NodeJS, ExpressJS, and MongoDB.",
//             "Developed the admin panel of the website using ReactJS, NextJS, TailwindCSS, and Framer Motion.",
//           ],
//           technologies: ["ReactJS", "Nextjs", "Node,js"],
//         };
//     }
//   };

//   return (
//     <div className="pt-32 2xl:ml-32 xl:ml-32 lg:ml-32 " id="experience">
//       <div className="flex">
//         <span className="text-white 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-2xl text-2xl font-black">
//           <span className="text-red-500 font-black2xl:text-2xl xl:text-2xl lg:text-2xl md:text-2xl text-2xl mr-2">
//             2.
//           </span>
//           Where I've Worked
//         </span>
//         <div className="border-t-2 border-greenTextColor w-16 2xl:w-72 xl:w-72 lg:w-72 md:w-72 sm:w-32 h-1 my-auto ml-3 border-opacity-20"></div>
//       </div>
//       <div className="w-full flex mt-10 flex-col 2xl:flex-col xl:flex-col lg:flex-col md:flex-col">
//         {/* Tab Menu For Experience */}
//         <Tabs
//           tabsOptions={["Elastik Teams", "Noggin", "Wat Consult"]}
//           activeTab={activeState}
//           setActiveTab={setActiveState}
//         />

//         {/* Experience Information */}
//         <div className="mt-10">
//           <Job job={showJobs(activeState)} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Work;

import React, { useState } from "react";

const Work = () => {
  const experiences = [
    {
      id: 1,
      companyName: "Elastik Teams",
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

  const [expandedCompanies, setExpandedCompanies] = useState([1,2,3]);
  const [expandedRoles, setExpandedRoles] = useState(["et-sde","et-intern","noggin-intern","wc-intern"]);

  const toggleCompanyExpand = (id: number) => {
    setExpandedCompanies((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleRoleExpand = (roleId: string) => {
    setExpandedRoles((prev) =>
      prev.includes(roleId)
        ? prev.filter((item) => item !== roleId)
        : [...prev, roleId]
    );
  };

  return (
    <div
      className="pt-32 px-4 2xl:px-32 xl:px-32 lg:px-32 bg-gray-950 min-h-screen"
      id="experience"
    >
      <div className="flex items-center mb-10">
        <span className="text-white text-2xl font-black">
          <span className="text-greenTextColor font-black text-2xl mr-2">
            2.
          </span>
          Experience
        </span>
        <div className="border-t-2 border-greenTextColor w-16 2xl:w-72 xl:w-72 lg:w-72 md:w-72 sm:w-32 h-1  my-auto ml-3 border-opacity-20"></div>
      </div>

      {/* Single Card for All Experiences */}
      <div className="bg-sliderColor rounded">
        {experiences.map((company, companyIndex) => (
          <div key={company.id}>
            {companyIndex > 0 && (
              <div className="mx-4 border-t border-gray-700"></div>
            )}
            <div className="p-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center text-white font-black">
                    {company.logo}
                  </div>
                </div>

                <div className="flex-1">
                  <div className="mb-4">
                    <h3 className="text-white font-black text-xl">
                      <a
                        href={company.companyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-greenTextColor transition-colors"
                      >
                        {company.companyName}
                      </a>
                    </h3>
                    {company.roles.length > 1 && (
                      <p className="text-secondColor text-sm font-bold mt-1">
                        {company.totalDuration} · {company.location}
                      </p>
                    )}
                  </div>

                  <div className={company.roles.length > 1 ? "relative" : ""}>
                    {company.roles.map((role, roleIndex) => (
                      <div
                        key={role.id}
                        className={roleIndex > 0 ? "mt-6 relative" : "relative"}
                      >
                        {company.roles.length > 1 &&
                          expandedCompanies.includes(company.id) && (
                            <>
                              <div className="absolute w-2 h-2 bg-greenTextColor rounded-full -left-6 top-2 z-10"></div>
                              {roleIndex === 0 && (
                                <div
                                  className="absolute w-0.5 bg-gray-700"
                                  style={{
                                    left: "-21px",
                                    top: "18px",
                                    height: "calc(100% + 0.75rem)",
                                  }}
                                ></div>
                              )}
                            </>
                          )}

                        <div
                          className={
                            company.roles.length > 1 &&
                            expandedCompanies.includes(company.id)
                              ? "ml-4"
                              : ""
                          }
                        >
                          <h4 className="text-white font-bold text-md">
                            {role.role}
                          </h4>
                          <p className="text-secondColor text-sm font-bold">
                            {role.employmentType} · {role.date}
                            {role.duration && ` · ${role.duration}`}
                          </p>
                          {company.roles.length === 1 && (
                            <p className="text-secondColor text-sm font-bold">
                              {company.location}
                            </p>
                          )}

                          {expandedCompanies.includes(company.id) &&
                            expandedRoles.includes(role.id) && (
                              <div className="mt-4">
                                <ul className="space-y-2">
                                  {role.workDone.map((item, index) => (
                                    <li key={index} className="flex">
                                      <span className="text-greenTextColor mr-2 mt-1">
                                        •
                                      </span>
                                      <span className="text-secondColor text-md font-bold leading-relaxed">
                                        {item}
                                      </span>
                                    </li>
                                  ))}
                                </ul>

                                <div className="mt-1 pt-4">
                                  <div className="flex items-start gap-2">
                                    {/* <span className="text-secondColor text-md font-black py-auto">
                                      Skills:
                                    </span> */}
                                    <div className="flex flex-wrap gap-2">
                                      {role.technologies.map((tech, index) => (
                                        <span
                                          key={index}
                                          className="text-secondColor font-black text-md px-3 py-1 bg-gray-800 rounded"
                                        >
                                          {tech}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}

                          {expandedCompanies.includes(company.id) && (
                            <button
                              onClick={() => toggleRoleExpand(role.id)}
                              className="mt-3 text-greenTextColor hover:text-greenTextColor text-sm font-medium flex items-center gap-1 transition-colors focus:outline-none active:outline-none"
                            >
                              {expandedRoles.includes(role.id) ? (
                                <>
                                  Show less
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
                                  Show more
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
                      className="mt-3 text-greenTextColor hover:text-greenTextColor text-sm font-medium flex items-center gap-1 transition-colors focus:outline-none active:outline-none"
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
{/* 
      <div className="mt-6 text-center">
        <button className="text-gray-400 hover:text-greenTextColor text-sm font-medium transition-colors">
          Show all experiences →
        </button>
      </div> */}
    </div>
  );
};

export default Work;
