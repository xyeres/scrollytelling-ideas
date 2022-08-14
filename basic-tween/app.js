gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  ".box",
  {
    backgroundColor:'orange,'
  },
  {
    duration:2,
    backgroundColor: 'red'
  }
);
