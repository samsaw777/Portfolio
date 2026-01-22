import React from "react";
import Navigation from "./NavigationBar";
import IntroductionPage from "./Introduction";
import LinkIcons from "./LinkIcons";
import Aboutme from "./Aboutus";
import Work from "./Work";
import MainProject from "./MainProject";
import Footer from "./Footer";
import Blog from "./Blogs";
import CurrentProject from "./Education";

function LandingPage() {
  return (
    <>
      <div className="h-viewHeight bg-navigationColor">
        <Navigation />

        <div className="h-introductionHeight bg-navigationColor flex">
          <LinkIcons />
          <div className="w-mainWidth text-secondColor pt-32  overflow-scroll mx-auto 2xl:m-0 xl:m-0 lg:m-0">
            <IntroductionPage />
            <Aboutme />
            <Work />
            <CurrentProject />
            <MainProject />
            <Blog />
            <Footer />
          </div>
          <div className="w-sideWidth text-gray-100 2xl:flex xl:flex lg:flex md:flex flex-col hidden justify-end ">
            <span className="text-secondColor mode mx-auto text-lg">
              Sameep . Sawant . 777
            </span>
            <div className="h-32 border-r-2 border-secondColor w-3/6 mt-3"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
