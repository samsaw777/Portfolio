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
      <div className="h-viewHeight bg-lightMainBackground dark:bg-navigationColor">
        <Navigation />

        <div className="h-introductionHeight flex bg-lightMainBackground dark:bg-navigationColor">
          <LinkIcons />
          <div className="w-mainWidth pt-32 overflow-scroll scroll-smooth mx-auto 2xl:m-0 xl:m-0 lg:m-0 text-lightSubtext dark:text-secondColor">
            <IntroductionPage />
            <Aboutme />
            <Work />
            <CurrentProject />
            <MainProject />
            <Blog />
            <Footer />
          </div>
          <div className="w-sideWidth 2xl:flex xl:flex lg:flex md:flex flex-col hidden justify-end">
            <span className="mode mx-auto text-lg text-lightSubtext dark:text-secondColor">
              Sameep . Sawant . 777
            </span>
            <div className="h-32 border-r-2 w-3/6 mt-3 border-lightBorder dark:border-border"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
