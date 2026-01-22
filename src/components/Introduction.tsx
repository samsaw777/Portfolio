import React from "react";
import className from "classnames";
import Resume from "./Resume.pdf";
import { motion, Variants } from "framer-motion";
import Slogo from "../Images/Slogo.svg";
import MyPhoto from "../Images/image.jpg";
const fadeIn = (direction: "up" | "down" = "up"): Variants => {
  return {
    initial: {
      y: direction === "up" ? 40 : -60,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,

      transition: {
        duration: 0.5,
        // ease: "easeInOut",
      },
    },
  };
};
const fadeSide = (direction: "right" | "left" = "right"): Variants => {
  return {
    initial: {
      x: direction === "right" ? -60 : 40,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,

      transition: {
        duration: 0.5,
        // ease: "easeInOut",
      },
    },
  };
};

const staggerContainer: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

function Introduction() {
  const introduction = "Hii,";
  const name = "I'm Sameep,";
  const profession = "A FULL Stack Developer";
  return (
    <div className="flex flex-col-reverse gap-10 2xl:flex-row xl:flex-row lg:flex-row 2xl:items-start xl:items-start lg:items-start">
      <div className="flex-1">
        <motion.p
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="flex"
        >
          {introduction.split("").map((letter: string, key: number) => {
            if (letter === "S") {
              return <div></div>;
            } else {
              return (
                <motion.span
                  key={key}
                  variants={fadeIn("down")}
                  className="text-gray-100 text-2xl font-bold"
                >
                  {letter}
                </motion.span>
              );
            }
          })}
        </motion.p>

        <motion.p
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="flex cursor-pointer mt-2 w-11/12 md:w-full"
        >
          {name.split("").map((letter: string, key: number) => {
            if (letter === "S") {
              return (
                <motion.img
                  key={key}
                  variants={fadeSide("right")}
                  src={Slogo}
                  alt="S letter"
                  className="w-10 h-10  mt-1  md:w-24 md:h-24 md:mt-3 r-0 pl-1"
                />
              );
            } else {
              return (
                <motion.span
                  key={key}
                  variants={fadeSide("right")}
                  className={className(
                    letter === "s" ? "ml-3" : "ml-0",
                    "text-gray-100 2xl:text-landingSize xl:text-landingSize  md:text-landingSize p-0 m-0 text-mobileSize font-black",
                  )}
                >
                  {letter}
                </motion.span>
              );
            }
          })}
        </motion.p>

        <motion.p
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="block mt-2"
        >
          {profession.split("").map((letter: string, key: number) => {
            if (
              letter === "F" ||
              letter === "U" ||
              letter === "L" ||
              letter === "S" ||
              letter === "t" ||
              letter === "c" ||
              letter === "k" ||
              letter === "a"
            ) {
              return (
                <motion.span
                  key={key}
                  variants={fadeIn("down")}
                  className={className(
                    letter === "F" || letter === "S"
                      ? "ml-0 text-redColor"
                      : "ml-0 text-greenTextColor",
                    "text-greenTextColor text-4xl font-bold md:text-mediumSize",
                  )}
                >
                  {letter}
                </motion.span>
              );
            } else {
              return (
                <motion.span
                  key={key}
                  variants={fadeIn("down")}
                  className={className(
                    letter === "D" ? "ml-0" : "ml-0",
                    "text-secondColor text-4xl font-bold md:text-mediumSize",
                  )}
                >
                  {letter}
                </motion.span>
              );
            }
          })}
        </motion.p>
        {/* <motion.p
        variants={fadeSide("right")}
        initial="initial"
        animate="animate"
        className="text-secondColor 2xl:w-2/5 xl:w-2/5 lg:w-2/5 md:w-2/3 text-xl mt-2 text-justify w-full mt-5"
      >
        I a'm a software engineering student. I like to design and develope
        Website and WebApp(using React) and also like to make them look more
        attractive.
      </motion.p> */}
        <motion.div
          variants={fadeIn("up")}
          initial="initial"
          animate="animate"
          className="w-full mt-16"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <a
            href={Resume}
            download
            className="w-42 mt-5 p-3 buttonCss text-greenTextColor rounded text-lg hover:bg-greenTextColor hover:bg-opacity-20"
          >
            Download Resume
          </a>
        </motion.div>
      </div>

      {/* Photo moved from About section */}
      <div className="flex flex-1 justify-center 2xl:justify-center xl:justify-center lg:justify-center w-full 2xl:w-auto xl:w-auto lg:w-auto">
        <img
          src={MyPhoto}
          className="w-72 h-72 rounded-full mx-auto mt-6 2xl:mt-0 xl:mt-0 lg:mt-0"
          alt="Sameep Sawant"
        />
      </div>
    </div>
  );
}

export default Introduction;
