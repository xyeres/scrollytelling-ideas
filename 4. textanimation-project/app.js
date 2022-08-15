gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".quote-wrap",
    start: "top 90%",
    end: "bottom 20%",
    toggleActions: "restart reverse complete reverse"
  }
});

gsap.defaults({ autoAlpha: 0, duration: 0.5, ease: "rough " });
 
tl.from(".quote-one", { xPercent: -10 })
  .from(".quote-two", {xPercent: 10})
  .from(".quote-three", {xPercent: -10});
