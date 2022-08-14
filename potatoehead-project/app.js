gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();

tl.to(".potatoe_head-wrap", {
  backgroundColor: "#4d4133",
  duration: 1,
}).fromTo(
  "h2",
  {
    autoAlpha: 0,
  },
  {
    autoAlpha: 1,
    duration: 2,
  }
);

ScrollTrigger.create({
  trigger: ".potatoe_head-wrap",
  animation: tl,
  start: "top top",
  end: "75% top",
  pin: true,
  snap: .5,
  scrub: 4,
  markers: {
    startColor: "yellow",
    endColor: "yellow",
    fontSize: "24px",
  },
  toggleActions: "restart none none reverse"
});
