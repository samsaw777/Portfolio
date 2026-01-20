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
      logo: "K",
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
      logo: "UM",
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
      logo: "MS",
      grade: "Grade: 93.43%",
      activities:
        "Activities and societies: I participated in Hackathon organized by the college.",
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
      className="pt-32 px-4 2xl:px-32 xl:px-32 lg:px-32 min-h-screen"
      id="education"
    >
      <div className="flex items-center mb-10">
        <span className="text-white text-2xl font-black">
          <span className="text-greenTextColor font-black text-2xl mr-2">
            3.
          </span>
          Education
        </span>
        <div className="border-t-2 border-greenTextColor w-16 2xl:w-72 xl:w-72 lg:w-72 md:w-72 sm:w-32 h-1 my-auto ml-3 border-opacity-20"></div>
      </div>

      {/* Single Card for All Education */}
      <div className="bg-sliderColor rounded">
        {educationData.map((edu, eduIndex) => (
          <div key={edu.id}>
            {eduIndex > 0 && (
              <div className="mx-4 border-t border-gray-700"></div>
            )}
            <div className="p-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center text-white font-black">
                    {edu.logo}
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-white font-black text-xl">
                    {edu.link ? (
                      <a
                        href={edu.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-greenTextColor transition-colors"
                      >
                        {edu.institution}
                      </a>
                    ) : (
                      edu.institution
                    )}
                  </h3>
                  <p className="text-secondColor text-sm font-bold mt-1">
                    {edu.degree}
                  </p>
                  <p className="text-secondColor text-sm font-bold">
                    {edu.date}
                  </p>
                  <p className="text-secondColor text-sm font-bold">
                    {edu.location}
                  </p>

                  {expandedEducation.includes(edu.id) && (
                    <div className="mt-4">
                      {edu.grade && (
                        <p className="text-secondColor text-sm font-bold">
                          {edu.grade}
                        </p>
                      )}

                      {edu.activities && (
                        <p className="text-secondColor text-sm font-bold mt-2">
                          {edu.activities}
                        </p>
                      )}

                      {edu.courses && (
                        <div className="mt-3">
                          <p className="text-secondColor text-sm font-bold">
                            Relevant Coursework:
                          </p>
                          <p className="text-secondColor text-sm font-bold mt-1">
                            {edu.courses.join(" · ")}
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
                                  className="text-secondColor font-black text-md px-3 py-1 bg-gray-800 rounded"
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
                    className="mt-3 text-greenTextColor hover:text-greenTextColor text-sm font-medium flex items-center gap-1 transition-colors focus:outline-none active:outline-none"
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
