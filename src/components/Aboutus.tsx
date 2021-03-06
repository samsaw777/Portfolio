import React, { useEffect } from "react";
import MyPhoto from "../Images/image.jpg";
import { icons } from "../utils/icons";
import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Aboutus() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const controls = useAnimation();
  const imageAnimation = useAnimation();
  const skillsAnimation = useAnimation();
  const contentAnimation = useAnimation();
  useEffect(() => {
    console.log(inView);
    if (inView) {
      controls.start({
        x: 0,
        transition: { type: "spring", duration: 1, bounce: 0.3 },
      });
      imageAnimation.start({
        x: 0,
        transition: { type: "spring", duration: 1, bounce: 0.3 },
      });

      skillsAnimation.start((i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.3 },
      }));
      // skillsAnimation.start({
      //   // opacity: 1,
      //   // transition: { duration: 3, delay: 0.5 },
      //   y: 0,
      //   transition: {
      //     type: "spring",
      //     duration: 1,
      //     bounce: 0.3,
      //     delay: 0.5,
      //   },
      // });
      contentAnimation.start({
        x: 0,
        transition: { type: "spring", duration: 1, bounce: 0.3, delay: 0.3 },
      });
    }

    if (!inView) {
      controls.start({
        x: "-100vw",
      });
      imageAnimation.start({
        x: "100vw",
      });
      skillsAnimation.start({
        opacity: 0,
        y: "100vw",
      });
      contentAnimation.start({
        // opacity: 0,
        x: "-100vw",
      });
    }
  }, [inView]);

  return (
    <div className="mt-32" id="about" ref={ref}>
      <div className="flex">
        <motion.span
          animate={controls}
          className="text-2xl font-black text-white"
        >
          <span className="text-red-500 mr-2">1.</span>About Me
        </motion.span>
        <div className="border-t-2 border-greenTextColor w-16 2xl:w-72 xl:w-72 lg:w-72 md:w-72 sm:w-32 h-1  my-auto ml-3 border-opacity-20"></div>
      </div>
      <div className="relative flex 2xl:flex-row xl:flex-row lg:flex-row  flex-col-reverse">
        <div className="2xl:w-3/5 xl:w-3/5 lg:w-3/5 w-full mt-4">
          <motion.p
            animate={contentAnimation}
            className="text-xl pb-4 font-bold text-justify"
          >
            Hii, My name is Sameep and I enjoy creating things that will be
            useful for other on the internet. My interest in web development
            started back in 2018 when I tried to clone some templates available
            on internet.
          </motion.p>
          <motion.p
            animate={contentAnimation}
            className="text-xl pb-4 font-bold text-justify
          "
          >
            I also recently developed{" "}
            <span className="text-greenTextColor font-bold">
              Web Application
            </span>{" "}
            that covers cool feature like Chating, Sharing and much more.
          </motion.p>
          <motion.p animate={contentAnimation} className="text-lg">
            Here are a few{" "}
            <span className="font-bold text-xl text-greenTextColor underline">
              Technologies
            </span>{" "}
            I've been working with recently.
          </motion.p>
          <div className="grid grid-cols-2 mt-3 text-center">
            {icons.map((icon: any, key: any) => (
              <motion.div
                animate={skillsAnimation}
                className="flex mb-2"
                key={icon.url}
                custom={key}
              >
                <img src={icon.url} alt={icon.desc} className="w-7 h-7" />
                <span className="font-bold ml-2 text-md mt-1">{icon.desc}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.img
          animate={imageAnimation}
          src={MyPhoto}
          className="w-72 h-72 rounded-full mx-auto mt-10"
          alt="Sameep Sawant"
        />
      </div>
    </div>
  );
}

export default Aboutus;
