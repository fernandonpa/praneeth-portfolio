import React, { useEffect, useState } from "react";
/*
useState:
use to store or update the data in the component
const [count, setCount] = useState(0);
count is the current value of the state.
setCount is a function that updates the value of count.
0 is the initial value of count.


useEffect:
use to perform side effects in the component.(actions that happen outside the component)
useEffect(() => {
  console.log("Hello, World!");
}
The above code will run the console.log("Hello, World!") every time the component renders.

*/

import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Adds smooth animations to your React components (e.g., fade-in, slide-out effects).

import { styles } from "../styles";
import { navLinks } from "../constants"; //  Likely contains an array of navigation options or links (e.g., "Home," "About," "Contact").
import { logo } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState(""); //  keeps track of something "active" (like the currently selected menu item, button, or tab).
  // setActive("Home"); --->  Changes the active state to "Home"
  const [toggle, setToggle] = useState(false); //  Stores a true or false value (a boolean). Usually used for on/off, show/hide, or open/close actions.
  // setToggle(!toggle); // Flips the toggle value (true ↔ false).
  const [scrolled, setScrolled] = useState(false);
  /*
  Scrolling means moving the page up or down using the mouse, keyboard, or touch (like swiping on a phone). For example:
      When you scroll down, the page content moves up.
      When you scroll up, the page content moves down.
  */

  useEffect(() => {
    // useEffect hook that tracks whether the user has scrolled down the webpage or not. If the user has scrolled down, the navbar will change its appearance.
    const handleScroll = () => {
      const scrollTop = window.scrollY; // `scrollTop` gets how far the user has scrolled from the top of the page.
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll); // Adds an event listener to the window object that listens for the scroll event. When the user scrolls, the `handleScroll` function is called.

    return () => window.removeEventListener("scroll", handleScroll); // When the component removed from the page , this cleanup remove the 'scroll' event listner
  }, []); // The empty array [] ensures that useEffect runs only once—when the component is first rendered.

  // Styling for the menu button and navicon

  // styles for menuIcon
  const menuIconStyle = {
    position: "relative", // The element is positioned relative to its normal position.
    width: "28px",
    height: "20px",
    display: "flex",
    justifyContent: "center",
    cursor: "pointer", // The cursor changes to a pointer (hand icon) when hovering over the element.
    flexDirection: "column", // The flex items are arranged in a column.
    alignItems: "center",
  };

  const barCommonStyle = {
    background: "white",
    display: "block", // desplay as the block level element
    height: "2px",
    width: "18px",
    borderRadius: "2px",
    position: "absolute", // The element is positioned absolutely within its containing element.
    transition: "all 0.2s ease-out", // The element will transition smoothly (ease-out) over 0.2 seconds when any of its properties change.
  };

  const topBarStyle = {
    ...barCommonStyle,
    top: toggle ? "50%" : "5px", // The top position of the element changes based on the toggle state.
    transform: toggle ? "rotate(-45deg)" : "none", // The element is rotated -45 degrees when the toggle is true.
  };

  const middleBarStyle = {
    ...barCommonStyle,
    opacity: toggle ? 0 : 1, // The opacity of the element changes based on the toggle state. opacity 0 means element is invisible(transperent)
    top: "50%",
    transition: "opacity 0.2s ease-out", // ease-out means the element will slow down at the end of the transition.
  };

  const bottomBarStyle = {
    ...barCommonStyle,
    top: toggle ? "50%" : "15px",
    transform: toggle ? "rotate(45deg)" : "none",
  };

  return (
    <nav // nav bar element
      className={`${
        styles.paddingX // dynamically adding a class for horizontal padding
      } w-full flex items-center py-5 fixed top-0 z-20 transition-all duration-300 ${
        //w-full means the element takes the full width of the screen. flex means the children of the element will be displayed in a row. items-center means the children will be vertically centered. py-5 means the element has a padding of 5 units on the y-axis. fixed means the element will stay in the same position even when the user scrolls. top-0 means the element will be fixed at the top of the screen. z-20 means the element will be above other elements with a lower z-index. transition-all duration-300 means all properties will transition smoothly over 300 milliseconds.
        scrolled ? "bg-primary shadow-lg" : "bg-transparent" // bg-primary shadow-lg means Adds a background color and  Adds a shadow , making the bar stand out.  bg-transparent means The background is transparent (bg-transparent), blending with the page.
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {" "}
        {/*justify-between means one item to the left, another to the right. max-w-7xl: Sets a maximum width for the container.mx-auto: Centers the <div> horizontally by adding automatic margins on both sides.   */}
        <Link
          to="/" // When clicked, this link navigates the user to the home page ("/").
          className="flex items-center gap-2" // gap-2 means Adds a small space (gap) between the items inside the link
          onClick={() => {
            // Defines what happens when the link is clicked
            setActive("");
            window.scrollTo(0, 0); // Scrolls the webpage to the very top (coordinates 0, 0).
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />{" "}
          {/* w - width and h-height , object-contain: Ensures the image fits within its container without being stretched or cropped.*/}
          <motion.p // paragraph (<p>) with animations
            className="text-white text-[18px] font-bold cursor-pointer flex items-center" // cursor-pointer: Changes the mouse cursor to a "pointer" when hovering over the text, indicating it’s clickable.
            initial={{ opacity: 0, y: -20 }} // ext is invisible (opacity: 0) and moved 20 pixels upward (y: -20).
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }} // The animation lasts 0.5 seconds.
          >
            <span // stylish text element ( inline text)
              className="block" // block': Makes the <span> act like a block element, so it takes up the full width and appears on a new line.
              style={{
                fontFamily: "'Dancing Script', cursive",
                fontSize: "26px",
                background: "linear-gradient(90deg, #915EFF, #00BFFF)", // Creates a colorful gradient from purple (#915EFF) to blue (#00BFFF), moving horizontally (90 degrees).
                WebkitBackgroundClip: "text", // Ensures the gradient is clipped to the shape of the text, not the whole element.
                WebkitTextFillColor: "transparent",
                backgroundClip: "text", // Ensures the gradient is clipped to the shape of the text, not the whole element.
                textFillColor: "transparent",
              }}
            >
              {"</"}Praneeth Anjana{">"}
            </span>
          </motion.p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {" "}
          {/*'list-none': Removes default bullet points from the list. hidden sm:flex: Hides the menu on small screens but shows it as a flexbox for devices with a screen size of "small" (sm) or larger. flex-row: Aligns the list items in a horizontal row. */}
          {navLinks.map(
            (
              nav // navLinks: Likely an array of objects, where each object has id, title, and other properties. const navLinks = [{ id: "home", title: "Home" },{ id: "about", title: "About" },{ id: "contact", title: "Contact" },];  .... map: Loops through each nav item in the array to create a corresponding <li> (list item) for it.
            ) => (
              <motion.li
                key={nav.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: nav.id * 0.1 }}
              >
                <a
                  href={`#${nav.id}`} // href={#${nav.id}}: Makes the link point to a section with an ID matching nav.id (e.g., #home for id: "home").
                  className={`${
                    active === nav.title ? "text-white" : "text-secondary" // If the link is active (matches the active state), the text color is white
                  } hover:text-white text-[18px] font-medium cursor-pointer transition-colors duration-300`} //hover:text-white: Changes the text color to white when hovered.font-medium: Sets a medium font weight. transition-colors duration-300: Smoothly transitions the text color change over 0.3 seconds.
                  onClick={() => setActive(nav.title)}
                >
                  {nav.title} {/*Link name */}
                </a>
              </motion.li>
            )
          )}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          {" "}
          {/*sm:hidden: This ensures the menu button is hidden on larger screens and only visible on small screens. What does flex-1 mean? that controls the flex-grow, flex-shrink, and flex-basis. flex-grow: 1: The element will grow to take up available space within the flex container, sharing it equally with other flex-1 elements. flex-shrink: 1: The element will shrink proportionally if there’s not enough space in the container. flex-basis: 0%: The initial size of the element is 0%, and it will expand based on the available space. */}
          {/* Menu Icon Toggle */}
          <div style={menuIconStyle} onClick={() => setToggle(!toggle)}>
            <span style={topBarStyle}></span>
            <span style={middleBarStyle}></span>
            <span style={bottomBarStyle}></span>
          </div>
          {/* Menu Items - Dropdown Menu */}
          <motion.div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`} // A dark gradient background for the menu.rounded-xl: Gives the menu rounded corners
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: toggle ? 1 : 0, scale: toggle ? 1 : 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <motion.li
                  key={nav.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: nav.id * 0.1 }}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
