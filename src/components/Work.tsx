import React, { useState } from "react";
import Tabs from "./reusecomponent/Tabs";
import Job from "./reusecomponent/Job";
const Work = () => {
  const [activeState, setActiveState] = useState("Elastik Teams");

  const showJobs = (activeTab: string) => {
    switch (activeTab) {
      case "Elastik Teams":
        return {
          role: "Software Developpment Engineer",
          companyName: "Elastik Teams",
          companyLink: "https://www.elastikteams.com/",
          date: "Jan 2023 - Present",
          workDone: [
            "Implemented a debounce search feature in Elastik, improving user search efficiency by 10%. Integrated it into a company project.",
            "I developed a React table component with search, sort, and filter options, enhancing the user experience by 5% in a different project.",
            "I optimized API code by adding try-catch and async-await, increasing error-handling efficiency by 10%.",
            "Created React components using direflow.io and developed APIs for utilization in a site supporting a company project.",
          ],
          technologies: [
            "ReactJS",
            "Exppress.js",
            "Node,js",
            "Sequelize",
            "Azure",
            "Typescript",
          ],
        };
      case "Noggin":
        return {
          role: "Frontend Developer Intern",
          companyName: "Noggin",
          companyLink: "https://www.noggin.so/",
          date: "June 2021 - October 2021",
          workDone: [
            "Improved application performance significantly by implementing Redis, resulting in a 15% increase in resource fetching speed and optimizing the overall performance.",
            "I enhanced user experience by updating the project UI, increasing it by 20%.",
            "Implementing a feature to boost app performance by 25% by adding slugs to links and efficient data fetching.",
          ],
          technologies: [
            "Nextjs",
            "Typescript",
            "Nodejs",
            "Tailwindcss",
            "Prisma",
            "GraphQL",
            "PostgreSQL",
            "Reddis",
          ],
        };
      case "Wat Consult":
        return {
          role: "Frontend Developer Intern",
          companyName: "Wat Consult",
          companyLink: "https://www.watconsult.com/",
          date: "May 2019 - June 2019",
          workDone: [
            "During six weeks of internship in wat consult created Responsive websites, google templates.",
            "Created template websites.",
            "Created a Quiz with PHP backend.",
          ],
          technologies: [
            "HTML",
            "CSS",
            "Node,Javascrippt",
            "PHP",
            "Bootstrap",
            "JQuery",
          ],
        };

      default:
        return {
          role: "Frontend Developer",
          companyName: "Elastik Teams",
          companyLink: "https://elastikteams.com/",
          date: "Jan 2021 - Present",
          workDone: [
            "Developed the frontend of the website using ReactJS, NextJS, TailwindCSS, and Framer Motion.",
            "Developed the backend of the website using NodeJS, ExpressJS, and MongoDB.",
            "Developed the admin panel of the website using ReactJS, NextJS, TailwindCSS, and Framer Motion.",
          ],
          technologies: ["ReactJS", "Nextjs", "Node,js"],
        };
    }
  };

  return (
    <div className="pt-32 2xl:ml-32 xl:ml-32 lg:ml-32 " id="experience">
      <div className="flex">
        <span className="text-white 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-2xl text-2xl font-black">
          <span className="text-red-500 font-black2xl:text-2xl xl:text-2xl lg:text-2xl md:text-2xl text-2xl mr-2">
            2.
          </span>
          Where I've Worked
        </span>
        <div className="border-t-2 border-greenTextColor w-16 2xl:w-72 xl:w-72 lg:w-72 md:w-72 sm:w-32 h-1 my-auto ml-3 border-opacity-20"></div>
      </div>
      <div className="w-full flex mt-10 flex-col 2xl:flex-col xl:flex-col lg:flex-col md:flex-col">
        {/* Tab Menu For Experience */}
        <Tabs
          tabsOptions={["Elastik Teams", "Noggin", "Wat Consult"]}
          activeTab={activeState}
          setActiveTab={setActiveState}
        />

        {/* Experience Information */}
        <div className="mt-10">
          <Job job={showJobs(activeState)} />
        </div>
      </div>
    </div>
  );
};

export default Work;
