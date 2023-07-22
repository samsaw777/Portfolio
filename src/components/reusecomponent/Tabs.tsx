import React, { useState } from "react";

interface Props {
  tabsOptions: string[];
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

const Tabs: React.FC<Props> = ({
  tabsOptions,
  activeTab,
  setActiveTab,
}: Props) => {
  return (
    <div className="w-full text-md border-b border-gray-100 font-medium text-center text-gray-500 dark:text-gray-400 dark:border-gray-700">
      <ul className="w-full flex flex-wrap -mb-px md:justify-center">
        {/* <li className="w-full mr-2 border-2 border-gray-100"> */}
        {/* <a
            href="#"
            className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
          >
            Profile
          </a> */}
        {tabsOptions?.map((tab: string, index: number) => (
          <span
            className={`inline-block py-3 px-4  rounded-t-sm hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 cursor-pointer ${
              activeTab === tab
                ? "border-b-2 border-secondColor text-white bg-greenTextColor bg-opacity-10"
                : "border-b-2 border-transparent text-secondColor"
            }`}
            key={index}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </span>
        ))}
        {/* </li> */}
      </ul>
    </div>
  );
};

export default Tabs;
