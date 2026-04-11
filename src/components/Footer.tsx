import React from "react";

const Footer = () => {
  return (
    <div className="block pt-32 mb-5" id="contact">
      <div className="flex 2xl:hidden xl:hidden lg:hidden md:hidden items-center justify-center w-full">
        <a
          href="https://www.linkedin.com/in/sameep-sawant/"
          className="text-2xl mb-2 text-lightSubtext dark:text-secondColor hover:text-lightPrimaryAccent dark:hover:text-primary cursor-pointer mr-3 transition-colors duration-200"
        >
          <i className="fa fa-linkedin-square" aria-hidden="true"></i>
        </a>
        <a
          href="https://github.com/samsaw777"
          className="text-2xl mb-2 text-lightSubtext dark:text-secondColor hover:text-lightPrimaryAccent dark:hover:text-primary cursor-pointer mr-3 transition-colors duration-200"
        >
          <i className="fa fa-github" aria-hidden="true"></i>
        </a>
        <a
          href="https://twitter.com/SameepSawant?s=08"
          className="text-2xl mb-2 text-lightSubtext dark:text-secondColor hover:text-lightPrimaryAccent dark:hover:text-primary cursor-pointer mr-3 transition-colors duration-200"
        >
          <i className="fa fa-twitter" aria-hidden="true"></i>
        </a>
        <a
          href="https://www.instagram.com/_samsaw_777/"
          className="text-2xl mb-2 text-lightSubtext dark:text-secondColor hover:text-lightPrimaryAccent dark:hover:text-primary cursor-pointer mr-3 transition-colors duration-200"
        >
          <i className="fa fa-instagram" aria-hidden="true"></i>
        </a>
      </div>
      <div className="block text-center text-lightSubtext dark:text-secondColor text-md font-black">
        <div>
          Designed & Build by{" "}
          <span className="text-lightPrimaryAccent dark:text-primary">
            <span className="text-lightSecondary dark:text-primaryHover">
              S
            </span>
            ameep{" "}
            <span className="text-lightSecondary dark:text-primaryHover">
              S
            </span>
            awant.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
