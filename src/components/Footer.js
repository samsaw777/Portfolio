import React from "react";

const Footer = () => {
  return (
    <div className="block pt-32 mb-5" id="contact">
      <div className="flex 2xl:hidden xl:hidden lg:hidden md:hidden ml-30 justify-center">
        <a
          href="https://www.linkedin.com/in/sameep-sawant/"
          className="text-2xl mb-2 text-secondColor cursor-pointer mr-3"
        >
          <i class="fa fa-linkedin-square" aria-hidden="true"></i>
        </a>
        <a
          href="https://github.com/samsaw777"
          className="text-2xl mb-2 text-secondColor  cursor-pointer mr-3"
        >
          <i class="fa fa-github" aria-hidden="true"></i>
        </a>
        <a
          href="https://twitter.com/SameepSawant?s=08"
          className="text-2xl mb-2 text-secondColor  cursor-pointer mr-3"
        >
          <i class="fa fa-twitter" aria-hidden="true"></i>
        </a>
        <a
          href="https://www.instagram.com/_samsaw_777/"
          className="text-2xl mb-2 text-secondColor  cursor-pointer mr-3"
        >
          <i class="fa fa-instagram" aria-hidden="true"></i>
        </a>
      </div>
      <div className="block text-center text-secondColor text-md font-black">
        <div>Designed & Build by Sameep Sawant.</div>
      </div>
    </div>
  );
};

export default Footer;
