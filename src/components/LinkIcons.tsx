import React from "react";

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

const LinkIcons = () => {
  return (
    <div className="w-sideWidth md:block text-center hidden">
      <div className="flex flex-col h-iconsHeight justify-end">
        {icons.map((icon) => (
          <a
            href={icon.href}
            className="text-2xl mb-2 text-lightSubtext dark:text-secondColor hover:text-lightPrimaryAccent dark:hover:text-primary transition-colors duration-200"
            key={icon.name}
          >
            <i className={icon.className} aria-hidden="true"></i>
          </a>
        ))}
      </div>
      <div className="h-32 border-r-2 border-lightBorder dark:border-secondColor w-3/6"></div>
    </div>
  );
};

export default LinkIcons;
