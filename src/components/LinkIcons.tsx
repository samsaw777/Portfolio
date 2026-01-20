import React from "react";
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

const LinkIcons = () => {
  return (
    <div className="w-sideWidth   md:block text-center hidden">
      <div className="flex flex-col h-iconsHeight justify-end">
        {icons.map((icon: any, key: any) => (
          <a
            href={icon.href}
            className="text-2xl mb-2 text-secondColor"
            key={icon.name}
          >
            <i className={icon.className} aria-hidden="true"></i>
          </a>
        ))}
      </div>
      <div className="h-32  border-r-2 border-secondColor w-3/6"></div>
    </div>
  );
};

export default LinkIcons;
