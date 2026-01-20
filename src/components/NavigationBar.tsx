import React, { useState } from "react";

import "./navigation.css";
function NavigationBar() {
  const [showacitve, setShowActive] = useState(false);
  const menuItems = [
    {
      name: "About Me",
      id: 1,
      url: "about",
      Aclassname: "active",
    },
    {
      name: "Experience",
      id: 2,
      Aclassname: "active",
      url: "experience",
    },
    {
      name: "Projects",
      id: 3,
      url: `projects`,
      Aclassname: "active",
    },
    {
      name: "Contact",
      id: 4,
      url: `contact`,
      Aclassname: "active",
    },
  ];

  const clickableevent = (key: string) => {
    setActiveClass(key);
    setShowActive(!showacitve);
    return false;
  };
  const [activeclass, setActiveClass] = useState<string>("");
  return (
    <div className="flex">
      <nav className="flex w-full bg-navigationColor justify-between items-center pl-5 pr-5">
        <div className="text-lg text-greenTextColor">Sameep Sawant</div>
        <ul
          className="navigation-links"
          style={{ transform: showacitve ? "translateX(0px)" : "" }}
        >
          {menuItems.map((item: any, key: number) => (
            <li key={item.id} onClick={() => setShowActive(!showacitve)}>
              <a
                onClick={() => clickableevent(item.url)}
                href={`#${item.url}`}
                className={
                  activeclass === item.url
                    ? "text-greenTextColor font-bold"
                    : " hover:text-greenTextColor"
                }
              >
                {item.name}
              </a>
            </li>
          ))}
          {/* <li className='chalbyee'>
                        {currentUser?<button onClick={handelLogout} className='websitelogoutbtn'><span className='websitelogout'>Logout</span></button>:<Link to='/signin'><a className='login'>Login</a></Link>}
                    </li> */}
        </ul>
        {/* <li className='inclass'>
                    {currentUser?<button onClick={handelLogout} className='websitelogoutbtn'><span className='websitelogout'>Logout</span></button>:<Link to='/signin'><a className='login'>Login</a></Link>}
                </li> */}
        <i
          className="fas fa-bars burger"
          onClick={() => setShowActive(!showacitve)}
        />
      </nav>
    </div>
  );
}

export default NavigationBar;
