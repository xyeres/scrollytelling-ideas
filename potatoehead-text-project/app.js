gsap.registerPlugin(ScrollTrigger);

gsap.to("h2", {
  scale: 1.5,
  duration: 1,
  snap: .8,
  scrollTrigger: {
    trigger: "h2",
    scrub: 1,
  }
})

