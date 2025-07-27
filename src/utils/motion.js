export const textVariant = (delay) => { // delay is the delay time before the animation starts
  return {
    hidden: { // initial state of the element
      y: -50, // move the element 50px up
      opacity: 0, // make the element invisible
    },
    show: { // final state of the element. This is the state where the element will be after the animation
      y: 0, // move the element back to its original position
      opacity: 1, // make the element visible
      transition: {
        type: "spring", // type of the transition. Animation moves smoothly like a spring
        duration: 1.25, // duration of the animation
        delay: delay, // delay before the animation starts again
      },
    },
  };
};

// faidIn animation for the element
export const fadeIn = (direction, type, delay, duration) => { // direction is the direction of the animation, type is the type of the transition, delay is the delay time before the animation starts, duration is the duration of the animation
  return {
    hidden: { // initial state of the element
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0, // move the element 100px to the left or right
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0, // move the element 100px up or down
      opacity: 0, // make the element invisible
    },
    show: { // final state of the element. This is the state where the element will be after the animation
      x: 0, // move the element back to its original position
      y: 0, 
      opacity: 1, // make the element visible
      transition: { // transition of the animation
        type: type, // type of the transition
        delay: delay, // delay before the animation starts again
        duration: duration, // duration of the animation
        ease: "easeOut", // Makes the animation slow down at the end. It makes the animation more natural
      },
    },
  };
};

// object starts very small and invisible, then grows to its normal size and becomes visible.
export const zoomIn = (delay, duration) => {
  return {
    hidden: {
      scale: 0, // make the element very small
      opacity: 0, // make the element invisible
    },
    show: {
      scale: 1, // make the element normal size
      opacity: 1, // make the element visible
      transition: {
        type: "tween", // tween means the element will grow smoothly
        delay: delay,
        duration: duration,
        ease: "easeOut", // Makes the animation slow down at the end. It makes the animation more natural
      },
    },
  };
};

// object slides into its normal position from a direction you choose.
export const slideIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0, // object starts off-screen on the right or left
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0, // object starts off-screen on the top or bottom
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

// It controls how multiple animations happen one after another (like a "staggered" effect). This means the animations for child elements will start with a small gap in time between each one.
export const staggerContainer = (staggerChildren, delayChildren) => { // staggerChildren: The time gap (in seconds) between starting the animations for each child. delayChildren: An optional delay (in seconds) before all the child animations start. If no value is given, it defaults to 0
  return {
    hidden: {}, // There is no initial state for the container or its children
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};
