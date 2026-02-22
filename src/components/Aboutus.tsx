import React from "react";
import { skillCategories } from "../utils/icons";

function Aboutus() {
  return (
    <div className="mt-32" id="about">
      {/* ── Section heading ─────────────────────────────────────── */}
      <div className="flex items-center">
        <span className="text-xl sm:text-2xl lg:text-3xl font-black text-white">
          <span className="text-red-500 mr-2">1.</span>What I Do
        </span>
        <div className="border-t-2 border-greenTextColor w-16 2xl:w-72 xl:w-72 lg:w-72 md:w-72 sm:w-32 h-1 my-auto ml-3 border-opacity-20" />
      </div>

      {/* ── Bio paragraphs ──────────────────────────────────────── */}
      <div className="relative flex">
        <div className="w-full mt-6 space-y-4">
          <p className="text-md sm:text-lg lg:text-2xl font-bold text-secondColor leading-relaxed">
            I'm <span className="text-greenTextColor">Sameep Sawant</span>, an
            AI enthusiast and software engineer currently pursuing my Master's
            in Artificial Intelligence at Northeastern University. I'm deeply
            interested in{" "}
            <span className="text-greenTextColor">machine learning</span>,
            <span className="text-greenTextColor"> agent architectures</span>,
            and{" "}
            <span className="text-greenTextColor">
              intelligent data systems
            </span>
            , and I love exploring how AI can enable smarter human-machine
            collaboration.
          </p>
          <p className="text-md sm:text-lg lg:text-2xl font-bold text-secondColor leading-relaxed">
            At Elastik Teams, I built AI-powered tools and dynamic agent systems
            that improved relevance, efficiency, and user experience—experiences
            that now fuel my drive to master advanced ML models, reasoning
            systems, and scalable AI infrastructure. My goal is to design
            adaptive, human-centric AI systems that learn, reason, and act
            intelligently in real-world contexts.
          </p>

          {/* ── Technologies heading ──────────────────────────────── */}
          <p className="text-md sm:text-lg lg:text-2xl text-secondColor font-bold pt-2">
            Here are a few{" "}
            <span className="font-black sm:text-xl lg:text-3xl text-greenTextColor underline">
              Technologies
            </span>{" "}
            I've been working with recently.
          </p>

          {/* ── Categorised skill badges ──────────────────────────── */}
          <div className="mt-10 space-y-6 lg:space-y-12">
            {skillCategories.map((group) => (
              <div key={group.category} className="mt-6">
                {/* Category label */}
                <p className="text-sm sm:text-base lg:text-2xl font-black text-white mb-3 tracking-wide">
                  {group.category}
                  <span className="text-greenTextColor">:</span>
                </p>

                {/* Badge grid – wraps naturally on every screen size */}
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.desc}
                      className="bg-gray-800 hover:bg-gray-700 transition-colors duration-200 flex items-center gap-2 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 lg:px-6 lg:py-4 cursor-default"
                    >
                      <img
                        src={skill.url}
                        alt={skill.desc}
                        className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 flex-shrink-0"
                        onError={(e) => {
                          // hide broken icon gracefully
                          (e.target as HTMLImageElement).style.display = "none";
                        }}
                      />
                      <span className="font-bold text-xs sm:text-sm lg:text-lg text-white tracking-wide whitespace-nowrap">
                        {skill.desc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {/* ── end skills ───────────────────────────────────────── */}
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
