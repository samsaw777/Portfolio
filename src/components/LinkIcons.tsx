import React from "react";

const LinkIcons = () => {
  return (
    <div className="w-sideWidth  2xl:flex xl:flex lg:flex md:flex flex-col justify-end text-center hidden">
      <a
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
      </a>
      <div className="h-32 border-r-2 border-secondColor w-3/6"></div>
    </div>
  );
};

export default LinkIcons;
