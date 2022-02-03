import React from "react";

// import Resume from "./Resume.pdf";
import Resume from "./Resume.pdf";
import { motion, Variants } from "framer-motion";

const fadeDown: Variants = {
  initial: {
    y: -60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,

    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const fadeSide = (direction: "left" | "right" = "right"): Variants => {
  return {
    initial: {
      x: direction === "right" ? -60 : 60,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,

      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };
};
const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.4,
      delayChildren: 0.1,
    },
  },
};

function Introduction() {
  const Introduction = "Hii,";
  const Name = "I'm Sameep Sawant";
  const Profession = "A full stack web developer";

  const spanVariants: Variants = {
    initial: { y: 0, scaleY: 1 },
    hover: {
      y: [-1, -2, -2.8, 0.9, 0],
      scaleY: [1, 1.3, 0.8, 1, 1.2],
      color: "red",
    },
  };

  const list: Variants = {
    visible: {
      opacity: 1,
      transition: { when: "beforeChildre", staggerChildren: 0.2 },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };

  const items = {
    visible: {
      opacity: 1,
      y: [-1, -1.9, -2.7, 1],
      scaleY: [1, 1.3, 0.8, 1],
    },
    hidden: {
      opacity: 0,
    },
  };

  return (
    <>
      {/* <p
        className="text-greenTextColor mb-2 pl-2 text-xl"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        Hello, my name is
      </p>
      <h1
        className="text-gray-100  2xl:text-landingSize xl:text-landingSize lg:text-landingSize md:text-mediumSize p-0 m-0 text-mobileSize font-black"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        Sameep Anil Sawant.
      </h1>
      <h1
        className="text-secondColor 2xl:text-landingSize xl:text-landingSize lg:text-landingSize md:text-mediumSize p-0 m-0 text-mobileSize font-black"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        I build Applications for web.
      </h1>
      <p
        className="text-secondColor 2xl:w-2/5 xl:w-2/5 lg:w-2/5 md:w-2/3 text-xl mt-2 text-justify w-full"
        data-aos="fade-up"
        data-aos-duration="2500"
      >
        I a'm a software engineering student. I like to design and develope
        Website and WebApp(using React) and also like to make them look more
        attractive.
      </p> */}
      <div className="flex flex-col">
        <motion.span
          className="cursor-pointer"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {Introduction.split("").map((letter: string, key: number) => {
            return (
              <motion.span
                key={key}
                variants={fadeSide("left")}
                className="text-3xl font-bold"
              >
                {letter}
              </motion.span>
            );
          })}
        </motion.span>

        {/* <span className="cursor-pointer">
          {Name.split("").map((letter: string, key: number) => {
            if (letter !== "S") {
              return (
                <motion.span
                  key={key}
                  variants={spanVariants}
                  initial="intial"
                  whileHover="hover"
                  className="text-gray-100 2xl:text-landingSize xl:text-landingSize lg:text-landingSize md:text-mediumSize p-0 m-0 text-mobileSize font-black"
                >
                  {letter}
                </motion.span>
              );
            } else {
              return (
                <motion.span
                  key={key}
                  className="text-red-500 2xl:text-landingSize xl:text-landingSize lg:text-landingSize md:text-mediumSize p-0 m-0 text-mobileSize font-black"
                >
                  {letter}
                </motion.span>
              );
            }
          })}
        </span>
        <span className="cursor-pointer">
          {Profession.split("").map((letter: string, key: number) => {
            return (
              <motion.span
                key={key}
                variants={spanVariants}
                initial="visible"
                whileHover="hover"
                className="text-3xl font-bold"
              >
                {letter}
              </motion.span>
            );
          })}
        </span> */}
      </div>
      <div className="w-full mt-16" data-aos="fade-up" data-aos-duration="3000">
        <a
          href={Resume}
          download
          className="w-42 mt-5 p-3 buttonCss text-greenTextColor rounded text-lg hover:bg-greenTextColor hover:bg-opacity-20"
        >
          Download Resume
        </a>
      </div>
    </>
  );
}

export default Introduction;
