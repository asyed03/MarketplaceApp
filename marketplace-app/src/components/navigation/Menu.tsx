"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { Button } from "../ui/button";

export interface MenuProps {
  children: ReactNode;
}

export default function Menu(props: MenuProps) {
  const [displayMenu, setDisplayMenu] = useState(false);
  const [displayedMini, setDisplayedMini] = useState(false);

  function showMiniMenu() {
    if (!displayedMini) {
      document.getElementById("menu")?.classList.remove("hidden");
      setDisplayedMini(true);
      return;
    }
    document.getElementById("menu")?.classList.add("hidden");
    setDisplayedMini(false);
  }

  useEffect(() => {
    const handleResize = () => {
      // Update the displayMenu state based on the window width
      const shouldDisplayFull = window.innerWidth >= 768;
      setDisplayMenu(shouldDisplayFull);
      setDisplayedMini(shouldDisplayFull);
    };

    // Initial check on mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!displayMenu) {
    return (
      <nav className="flex justify-center">
        <Button
          id="hamburgerMenuButton"
          onClick={() => {
            showMiniMenu();
          }}
          onBlur={(event) => {
            console.log(event.relatedTarget?.closest("#menu"));
            if (displayedMini && !event.relatedTarget?.closest("#menu")) {
              showMiniMenu();
            }
          }}
          className="text-white w-10 mx-3"
        >
          <Bars3Icon />
        </Button>
        <div
          id="menu"
          onBlur={(event) => {
            console.log(event.relatedTarget?.closest("#menu"));
            if (
              displayedMini &&
              !event.relatedTarget?.closest("#menu") &&
              event.relatedTarget?.id !== "hamburgerMenuButton"
            ) {
              showMiniMenu();
            }
          }}
          className="hidden absolute translate-y-12 z-10"
        >
          <ul className="flex bg-secondary rounded-md border border-textcolor flex-col items-center justify-center gap-2">
            {props.children &&
              React.Children.map(
                React.Children.toArray(props.children),
                (child: ReactNode, idx: number) => <li key={idx}>{child}</li>
              )}
          </ul>
        </div>
      </nav>
    );
  }
  return <nav className="flex grow justify-end">{props.children}</nav>;
}
