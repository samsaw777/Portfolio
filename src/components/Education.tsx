import React, { useState } from "react";

const Education = () => {
  const educationData = [
    {
      id: 1,
      institution: "Khoury College of Computer Sciences",
      degree: "Master's degree, Artificial Intelligence",
      date: "Sep 2025 - May 2027",
      location: "Boston, Massachusetts, United States",
      logo: "",
      logoText: "KC",
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
      logo: "",
      logoText: "UM",
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
      logo: "",
      logoText: "MS",
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
    <div className="pt-32 min-h-screen" id="education">
      <div className="flex items-center mb-10">
        <span className="text-lightHeadingText dark:text-mainTextColor text-md sm:text-lg lg:text-2xl font-black">
          <span className="text-lightPrimaryAccent dark:text-primary font-black text-md sm:text-lg lg:text-2xl mr-2">
            3.
          </span>
          Education
        </span>
        <div className="border-t-2 border-lightPrimaryAccent dark:border-primary w-16 2xl:w-72 xl:w-72 lg:w-72 md:w-72 sm:w-32 h-1 my-auto ml-3 border-opacity-20" />
      </div>

      {/* Single Card for All Education */}
      <div className="bg-lightCardBackground dark:bg-sliderColor rounded">
        {educationData.map((edu, eduIndex) => (
          <div key={edu.id}>
            {eduIndex > 0 && (
              <div className="mx-4 border-t border-lightBorder dark:border-border" />
            )}
            <div className="p-3 sm:p-4 md:p-6">
              <div className="flex gap-4">
                <div className="hidden lg:flex flex-shrink-0 pt-2">
                  <div className="w-12 h-12 bg-lightSurfaceHover dark:bg-surface rounded-lg flex items-center justify-center text-lightSubtext dark:text-secondColor font-bold text-xl">
                    {edu.logoText}
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="font-bold">
                    {edu.link ? (
                      <a
                        href={edu.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lightHeadingText dark:text-mainTextColor hover:text-lightPrimaryAccent dark:hover:text-primary font-bold transition-colors text-sm md:text-base lg:text-lg"
                      >
                        {edu.institution}
                      </a>
                    ) : (
                      <span className="text-lightHeadingText dark:text-mainTextColor font-bold text-sm md:text-base lg:text-lg">
                        {edu.institution}
                      </span>
                    )}
                  </h3>
                  <p className="text-lightSubtext dark:text-secondColor text-xs sm:text-sm lg:text-base font-bold mt-1">
                    {edu.degree}
                  </p>
                  <p className="text-lightSubtext dark:text-secondColor text-xs sm:text-sm lg:text-sm mt-1">
                    {edu.date}
                  </p>

                  {expandedEducation.includes(edu.id) && (
                    <div className="mt-1">
                      {edu.grade && (
                        <p className="text-lightSubtext dark:text-secondColor text-xs sm:text-sm lg:text-sm">
                          {edu.grade}
                        </p>
                      )}

                      {edu.activities && (
                        <p className="text-lightSubtext dark:text-secondColor text-xs sm:text-sm lg:text-sm font-bold mt-2">
                          {edu.activities}
                        </p>
                      )}

                      {edu.courses && (
                        <div className="mt-3">
                          <p className="text-lightHeadingText dark:text-mainTextColor text-xs sm:text-sm lg:text-sm font-semibold">
                            Relevant Coursework:
                          </p>
                          <p className="text-lightSubtext dark:text-secondColor text-xs sm:text-sm lg:text-sm mt-1">
                            {edu.courses.join(" , ")}
                          </p>
                        </div>
                      )}

                      {edu.skills && (
                        <div className="mt-3">
                          <div className="flex flex-wrap gap-2">
                            {edu.skills.map((skill, index) => (
                              <span
                                key={index}
                                className="font-bold text-xs sm:text-sm lg:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-blue-100 dark:bg-surfaceHover text-lightHeadingText dark:text-primary transition-colors duration-200"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {edu.projects && edu.projects.length > 0 && (
                        <div className="mt-4 space-y-3">
                          {edu.projects.map((project, index) => (
                            <div key={index} className="flex gap-3">
                              <div className="flex-shrink-0 mt-1">
                                <div className="w-8 h-8 bg-lightSurfaceHover dark:bg-surface rounded flex items-center justify-center">
                                  <svg
                                    className="w-4 h-4 text-lightSubtext dark:text-secondColor"
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
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  <button
                    onClick={() => toggleEducationExpand(edu.id)}
                    className="mt-3 text-lightHeadingText dark:text-mainTextColor hover:text-lightPrimaryAccent dark:hover:text-primary hover:font-bold text-xs sm:text-sm font-medium flex items-center gap-1 transition-colors focus:outline-none active:outline-none"
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
