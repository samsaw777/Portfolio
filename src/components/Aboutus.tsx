import React from "react";
import { skillCategories } from "../utils/icons";

function Aboutus() {
  return (
    <div className="mt-32" id="about">
      {/* ── Section heading ─────────────────────────────────────── */}
      <div className="flex items-center">
        <span className="text-xl sm:text-2xl lg:text-2xl font-black text-lightHeadingText dark:text-mainTextColor">
          <span className="text-lightPrimaryAccent dark:text-primary mr-2">
            1.
          </span>
          What I Do
        </span>
        <div className="border-t-2 border-lightPrimaryAccent dark:border-primary w-16 2xl:w-72 xl:w-72 lg:w-72 md:w-72 sm:w-32 h-1 my-auto ml-3 border-opacity-20" />
      </div>

      {/* ── Bio paragraphs ──────────────────────────────────────── */}
      <div className="relative flex">
        <div className="w-full mt-6 space-y-4">
          <p className="text-md sm:text-base lg:text-lg font-bold text-lightSubtext dark:text-secondColor leading-relaxed">
            I'm{" "}
            <span className="text-lightPrimaryAccent dark:text-primary">
              Sameep Sawant
            </span>
            , an AI enthusiast and software engineer currently pursuing my
            Master's in Artificial Intelligence at Northeastern University. I'm
            deeply interested in{" "}
            <span className="text-lightPrimaryAccent dark:text-primary">
              machine learning
            </span>
            ,
            <span className="text-lightPrimaryAccent dark:text-primary">
              {" "}
              agent architectures
            </span>
            , and{" "}
            <span className="text-lightPrimaryAccent dark:text-primary">
              intelligent data systems
            </span>
            , and I love exploring how AI can enable smarter human-machine
            collaboration.
          </p>
          <p className="text-md sm:text-base lg:text-lg font-bold text-lightSubtext dark:text-secondColor leading-relaxed">
            At Elastik Teams, I built AI-powered tools and dynamic agent systems
            that improved relevance, efficiency, and user experience—experiences
            that now fuel my drive to master advanced ML models, reasoning
            systems, and scalable AI infrastructure. My goal is to design
            adaptive, human-centric AI systems that learn, reason, and act
            intelligently in real-world contexts.
          </p>

          {/* ── Technologies heading ──────────────────────────────── */}
          <p className="text-md sm:text-base lg:text-lg text-lightSubtext dark:text-secondColor font-bold pt-2">
            Here are a few{" "}
            <span className="font-black sm:text-lg lg:text-xl text-lightPrimaryAccent dark:text-primary underline">
              Technologies
            </span>{" "}
            I've been working with recently.
          </p>

          {/* ── Categorised skill badges ──────────────────────────── */}
          <div className="mt-10 space-y-6 lg:space-y-12">
            {skillCategories.map((group) => (
              <div key={group.category} className="mt-6">
                {/* Category label */}
                <p className="text-sm sm:text-base lg:text-lg font-black text-lightHeadingText dark:text-mainTextColor mb-3 tracking-wide">
                  {group.category}
                  <span className="text-lightPrimaryAccent dark:text-primary">
                    :
                  </span>
                </p>

                {/* Badge grid */}
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.desc}
                      className="bg-blue-100 dark:bg-surfaceHover hover:bg-blue-200 dark:hover:bg-border transition-colors duration-200 flex items-center gap-2 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 lg:px-5 lg:py-3 cursor-default"
                    >
                      <img
                        src={skill.url}
                        alt={skill.desc}
                        className="w-4 h-4 sm:w-5 sm:h-5 lg:w-5 lg:h-5 flex-shrink-0"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = "none";
                        }}
                      />
                      <span className="font-bold text-xs sm:text-sm lg:text-sm text-lightHeadingText dark:text-primary tracking-wide whitespace-nowrap">
                        {skill.desc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
