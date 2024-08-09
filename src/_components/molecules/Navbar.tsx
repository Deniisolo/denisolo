"use client";

import { Fragment, useState } from "react";
import { Logo } from "../atoms/logo";
import { LucideFolder, LucideMail, LucideUser, MenuIcon } from "lucide-react";

const navigationOptions = [
  {
    url: "/aboutme",
    icon: LucideUser,
    label: "About me",
    width: 135,
  },
  {
    url: "/portfolio",
    icon: LucideFolder,
    label: "Portfolio",
    width: 125,
  },
  {
    url: "/contactme",
    icon: LucideMail,
    label: "Contact me",
    width: 160,
  },
];

const navigationIconSize = 30;

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <Fragment>
      <div className="sticky top-0 z-10 flex h-20 items-center justify-between bg-white px-10 py-5 shadow-lg">
        <div className="flex items-center gap-4">
          <button
            className="rounded-md p-2 transition hover:bg-gray-300 md:hidden"
            onClick={toggleMenu}
          >
            <MenuIcon height={30} width={30} />
          </button>

          <Logo />
        </div>

        <div className={`hidden gap-4 md:flex`}>
          {navigationOptions.map((option) => (
            <a
              className="group flex items-center rounded-md p-2 text-3xl transition hover:bg-gray-300"
              key={option.url}
              href={option.url}
            >
              <span>
                <option.icon
                  height={navigationIconSize}
                  width={navigationIconSize}
                />
              </span>
              <span
                className={`w-0 overflow-hidden text-nowrap transition-all group-hover:ml-2 group-hover:w-[200px] lg:ml-2 lg:w-[200px]`}
                style={{
                  transitionDuration: "0.5s",
                  maxWidth: option.width,
                }}
              >
                {option.label}
              </span>
            </a>
          ))}
        </div>
      </div>

      <div
        className={`${isOpen ? "block" : "hidden"} absolute left-0 top-0 z-20 h-screen w-screen bg-black/50`}
        onClick={toggleMenu}
      />

      <div
        className={`absolute transition-all ${isOpen ? "left-0" : "left-[-100%]"} top-0 z-30 h-screen bg-white px-10 shadow-xl`}
      >
        <div className="mb-10 flex h-20 items-center gap-4">
          <button
            className="rounded-md p-2 transition hover:bg-gray-300"
            onClick={toggleMenu}
          >
            <MenuIcon height={30} width={30} />
          </button>

          <Logo />
        </div>

        <div className="flex flex-col gap-4">
          {navigationOptions.map((option) => (
            <a
              className="flex items-center gap-6 rounded-md p-2 text-3xl transition hover:bg-gray-300"
              key={option.url}
              href={option.url}
            >
              <span>
                <option.icon
                  height={navigationIconSize}
                  width={navigationIconSize}
                />
              </span>
              <span className={`overflow-hidden text-nowrap transition-all`}>
                {option.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </Fragment>
  );
}
