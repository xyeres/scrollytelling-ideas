gsap.registerPlugin(ScrollTrigger);

gsap.to(".box", {
  duration: 2,
  x: "100%",
  scrollTrigger: {
    trigger: ".box",
    start: "center 90%",
    startTrigger: "body",
    markers: true,
  },
});
