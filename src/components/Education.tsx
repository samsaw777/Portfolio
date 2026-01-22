import React, { useState } from "react";
import { FiExternalLink } from "react-icons/fi";

const Education = () => {
  const educationData = [
    {
      id: 1,
      institution: "Khoury College of Computer Sciences",
      degree: "Master's degree, Artificial Intelligence",
      date: "Sep 2025 - May 2027",
      location: "Boston, Massachusetts, United States",
      logo: "https://media.licdn.com/dms/image/v2/D560BAQGf9sv-x1G7uQ/company-logo_100_100/B56ZUgG4D7GsAY-/0/1740000428606/khoury_college_logo?e=1770249600&v=beta&t=PKVTkFCJg2fzscvH0qESx2RYlOf_sBz5e9zpyd0GviQ",
      link: "https://www.khoury.northeastern.edu/",
      courses: ["CS5800 - Algorithms", "CS6700 - Foundations of AI"],
      skills: ["Data Structures", "Artificial Intelligence (AI)"],
    },
    {
      id: 2,
      institution: "University of Mumbai",
      degree: "Bachelor of Engineering - BE, Information Technology",
      date: "Jul 2021 - May 2025",
      location: "Mumbai, Maharashtra, India",
      logo: "https://media.licdn.com/dms/image/v2/C4E0BAQGsu_DimiqUow/company-logo_100_100/company-logo_100_100/0/1631357817785?e=1770249600&v=beta&t=Z5OpYKiRxOne0yPhaGS4vOHWKzWAYBuATW7lX8GWHkQ",
      grade: "Grade: 9.6",
      courses: [
        "Algorithms",
        "Artificial Intelligence",
        "Data Science",
        "Machine Learning",
        "Python",
        "SQL",
        "DevOps",
      ],
      skills: [
        "Data Structures",
        "Next.js",
        "Node.js",
        "TypeScript",
        "JavaScript",
        "Python (Programming Language)",
        "Artificial Intelligence (AI)",
        "Tailwind CSS",
      ],
      projects: [],
    },
    {
      id: 3,
      institution: "Maharashtra State Board of Technical Education (MSBTE)",
      degree: "Diploma, Computer Science",
      date: "Aug 2017 - Jun 2020",
      location: "Maharashtra, India",
      logo: "https://media.licdn.com/dms/image/v2/D560BAQHNVGSr84rClg/company-logo_100_100/company-logo_100_100/0/1704981170566?e=1770249600&v=beta&t=xiDo8bUGaYQOBrXmW64wSvRXmnU6JoD0eHCpY7j2WA4",
      grade: "Grade: 93.43%",
      activities:
        "Activities and societies: I participated in Hackathon organized by the college.",
      skills: [
        "Data Structures",
        "HTML",
        "Operation Systems",
        "PHP",
        "JavaScript",
        "Python (Programming Language)",
        "MySQL",
        "Computer Network",
      ],
      projects: [],
    },
  ];

  const [expandedEducation, setExpandedEducation] = useState([1, 2, 3]);

  const toggleEducationExpand = (id: number) => {
    setExpandedEducation((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <div
      className="pt-32 px-4 2xl:px-32 xl:px-32 lg:px-32 min-h-screen bg-[#0D0D0D]"
      id="education"
    >
      <div className="flex items-center mb-10">
        <span className="text-[#F5F5F5] text-2xl font-black">
          <span className="text-[#F9D342] font-black text-2xl mr-2">3.</span>
          Education
        </span>
        <div className="border-t-2 border-[#F9D342] w-16 2xl:w-72 xl:w-72 lg:w-72 md:w-72 sm:w-32 h-1 my-auto ml-3 border-opacity-20"></div>
      </div>

      {/* Single Card for All Education */}
      <div className="bg-[#1A1A1A] rounded">
        {educationData.map((edu, eduIndex) => (
          <div key={edu.id}>
            {eduIndex > 0 && (
              <div className="mx-4 border-t border-[#F9D342] border-opacity-20"></div>
            )}
            <div className="p-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 pt-2">
                  <img
                    src={edu.logo}
                    alt={edu.institution}
                    className="w-12 h-12 object-cover"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="font-black text-4xl">
                    {edu.link ? (
                      <a
                        href={edu.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#F5F5F5] hover:text-[#F9D342] font-bold transition-colors"
                      >
                        {edu.institution}
                      </a>
                    ) : (
                      <a href="/" className="text-[#F5F5F5] font-bold">
                        {edu.institution}
                      </a>
                    )}
                  </h3>
                  <p className="text-[#D0D0D0] text-xl font-bold mt-2">
                    {edu.degree}
                  </p>
                  <p className="text-[#B0B0B0] text-sm mt-1">{edu.date}</p>
                  {/* <p className="text-white text-sm font-bold">{edu.location}</p> */}

                  {expandedEducation.includes(edu.id) && (
                    <div className="mt-1">
                      {edu.grade && (
                        <p className="text-[#B0B0B0] text-sm">{edu.grade}</p>
                      )}

                      {edu.activities && (
                        <p className="text-[#B0B0B0] text-sm font-bold mt-2">
                          {edu.activities}
                        </p>
                      )}

                      {edu.courses && (
                        <div className="mt-3">
                          <p className="text-[#F5F5F5] text-sm font-semibold">
                            Relevant Coursework:
                          </p>
                          <p className="text-[#B0B0B0] text-sm mt-1">
                            {edu.courses.join(" , ")}
                          </p>
                        </div>
                      )}

                      {edu.skills && (
                        <div className="mt-3">
                          <div className="flex items-start gap-2">
                            <div className="flex flex-wrap gap-2">
                              {edu.skills.map((skill, index) => (
                                <span
                                  key={index}
                                  className="text-secondColor font-black text-sm px-3 py-2 bg-gray-800 rounded"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {edu.projects && edu.projects.length > 0 && (
                        <div className="mt-4 space-y-3">
                          {edu.projects.map((project, index) => (
                            <div key={index} className="flex gap-3">
                              <div className="flex-shrink-0 mt-1">
                                <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center">
                                  <svg
                                    className="w-4 h-4 text-gray-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                    />
                                  </svg>
                                </div>
                              </div>
                              {/* <div className="flex-1">
                                <h4 className="text-white font-bold text-sm">
                                  {project && project.link ? (
                                    <a
                                      href={project.link}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="hover:text-greenTextColor transition-colors"
                                    >
                                      {project.name}
                                    </a>
                                  ) : (
                                    project.name
                                  )}
                                </h4>
                                {project.description && (
                                  <p className="text-secondColor text-sm font-bold mt-1">
                                    {project.description}
                                  </p>
                                )}
                              </div> */}
                              {/* {project.link && (
                                <div className="flex-shrink-0">
                                  <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-greenTextColor transition-colors"
                                  >
                                    <FiExternalLink className="w-4 h-4" />
                                  </a>
                                </div>
                              )} */}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  <button
                    onClick={() => toggleEducationExpand(edu.id)}
                    className="mt-3 text-mainTextColor hover:font-bold text-sm font-medium flex items-center gap-1 transition-colors focus:outline-none active:outline-none"
                  >
                    {expandedEducation.includes(edu.id) ? (
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
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
