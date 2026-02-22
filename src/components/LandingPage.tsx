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
      <div className="h-viewHeight" style={{ backgroundColor: "var(--bg-primary)" }}>
        <Navigation />

        <div className="h-introductionHeight flex" style={{ backgroundColor: "var(--bg-primary)" }}>
          <LinkIcons />
          <div className="w-mainWidth pt-32  overflow-scroll mx-auto 2xl:m-0 xl:m-0 lg:m-0" style={{ color: "var(--text-secondary)" }}>
            <IntroductionPage />
            <Aboutme />
            <Work />
            <CurrentProject />
            <MainProject />
            <Blog />
            <Footer />
          </div>
          <div className="w-sideWidth text-gray-100 2xl:flex xl:flex lg:flex md:flex flex-col hidden justify-end " style={{ borderColor: "var(--border)" }}>
            <span className="mode mx-auto text-lg" style={{ color: "var(--text-secondary)" }}>
              Sameep . Sawant . 777
            </span>
            <div className="h-32 border-r-2 w-3/6 mt-3" style={{ borderColor: "var(--border)" }}></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
