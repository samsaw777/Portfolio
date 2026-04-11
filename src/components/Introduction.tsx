import React from "react";
import Resume from "./Resume.pdf";
import MyPhoto from "../Images/image.png";

function Introduction() {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center min-h-[70vh]">
      {/* Left 50% */}
      <div className="flex-1 flex flex-col justify-center">
        <h1 className="text-3xl md:text-5xl xl:text-6xl font-extrabold tracking-tighter leading-none text-lightHeadingText dark:text-mainTextColor">
          I build{" "}
          <span className="text-lightPrimaryAccent dark:text-primary">
            full-stack
          </span>{" "}
          apps that think{" "}
          <span className="text-gray-400 dark:text-gray-700">&</span> learn
          <span className="text-lightPrimaryAccent dark:text-primary">.</span>
        </h1>

        <p className="text-sm md:text-base text-lightSubtext dark:text-secondColor mt-5 max-w-md leading-relaxed">
          Designing intelligent applications at the intersection of clean code,
          machine learning, and thoughtful user experiences.
        </p>

        <div className="mt-8">
          <a
            href={Resume}
            download
            className="inline-block px-8 py-3.5 rounded-xl bg-lightPrimaryAccent dark:bg-primary text-white font-semibold text-sm hover:opacity-90 transition-all duration-200 hover:-translate-y-0.5"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Right 50% */}
      <div className="flex-1 flex justify-center items-center">
        <img
          src={MyPhoto}
          className="w-72 h-72 md:w-96 md:h-96 rounded-full"
          alt="Sameep Sawant"
        />
      </div>
    </div>
  );
}

export default Introduction;
