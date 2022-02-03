import React from "react";

import Resume from "./Resume.pdf";

function Introduction() {
  return (
    <>
      <p
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
      </p>
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
