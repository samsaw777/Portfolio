import React from "react";
import { icons } from "../utils/icons";

function Aboutus() {
  return (
    <div className="mt-32" id="about">
      <div className="flex">
        <span className="text-3xl font-black text-white">
          <span className="text-red-500 mr-2">1.</span>What I Do
        </span>
        <div className="border-t-2 border-greenTextColor w-16 2xl:w-72 xl:w-72 lg:w-72 md:w-72 sm:w-32 h-1  my-auto ml-3 border-opacity-20"></div>
      </div>
      <div className="relative flex">
        <div className="w-full mt-6 space-y-4">
          <p className="text-xl font-bold text-justify text-secondColor leading-relaxed">
            I’m <span className="text-greenTextColor">Sameep Sawant</span>, an AI enthusiast and software engineer
            currently pursuing my Master’s in Artificial Intelligence at
            Northeastern University. I’m deeply interested in <span className="text-greenTextColor">machine learning</span>,
            <span className="text-greenTextColor"> agent architectures</span>, and <span className="text-greenTextColor">intelligent data systems</span>, and I love exploring how
            AI can enable smarter human-machine collaboration.
          </p>
          <p className="text-xl font-bold text-justify text-secondColor leading-relaxed">
            At Elastik Teams, I built AI-powered tools and dynamic agent systems that
            improved relevance, efficiency, and user experience—experiences that now
            fuel my drive to master advanced ML models, reasoning systems, and scalable
            AI infrastructure. My goal is to design adaptive, human-centric AI systems
            that learn, reason, and act intelligently in real-world contexts.
          </p>
          <p className="text-xl text-secondColor font-bold">
            Here are a few <span className="font-black text-2xl text-greenTextColor underline">Technologies</span> I've been working with recently.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-6">
            {icons.map((icon: any, key: any) => (
              <div
                className="bg-sliderColor flex flex-col items-center justify-center text-center rounded-lg px-4 py-6"
                key={icon.url}
              >
                <img src={icon.url} alt={icon.desc} className="w-12 h-12" />
                <span className="mt-3 font-black text-sm tracking-wide text-white">
                  {icon.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
