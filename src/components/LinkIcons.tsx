import React from "react";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
//icons array.
const icons = [
  {
    name: "LinkedIn",
    className: "fa fa-linkedin-square",
    href: "https://www.linkedin.com/in/sameep-sawant/",
  },
  {
    name: "Github",
    className: "fa fa-github",
    href: "https://github.com/samsaw777",
  },
  {
    name: "Twitter",
    className: "fa fa-twitter",
    href: "https://twitter.com/SameepSawant?s=08",
  },
  {
    name: "Instagram",
    className: "fa fa-instagram",
    href: "https://www.instagram.com/_samsaw_777/",
  },
];

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
const LinkIcons = () => {
  return (
    <div className="w-sideWidth   md:block text-center hidden">
      {/* <a
        href="https://www.linkedin.com/in/sameep-sawant/"
        className="text-2xl mb-2 text-secondColor"
      >
        <i className="fa fa-linkedin-square" aria-hidden="true"></i>
      </a>
      <a
        href="https://github.com/samsaw777"
        className="text-2xl mb-2 text-secondColor"
      >
        <i className="fa fa-github" aria-hidden="true"></i>
      </a>
      <a
        href="https://twitter.com/SameepSawant?s=08"
        className="text-2xl mb-2 text-secondColor"
      >
        <i className="fa fa-twitter" aria-hidden="true"></i>
      </a>
      <a
        href="https://www.instagram.com/_samsaw_777/"
        className="text-2xl mb-2 text-secondColor"
      >
        <i className="fa fa-instagram" aria-hidden="true"></i>
      </a> */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="flex flex-col h-iconsHeight justify-end"
      >
        {icons.map((icon: any, key: any) => (
          <motion.a
            href={icon.href}
            variants={fadeIn("down")}
            className="text-2xl mb-2 text-secondColor"
            key={icon.name}
          >
            <motion.i className={icon.className} aria-hidden="true"></motion.i>
          </motion.a>
        ))}
      </motion.div>
      <motion.div
        variants={fadeIn("up")}
        animate="animate"
        initial="initial"
        className="h-32  border-r-2 border-secondColor w-3/6"
      ></motion.div>
    </div>
  );
};

export default LinkIcons;
