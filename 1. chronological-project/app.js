gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".fact").forEach((fact) => {
  const tl = gsap.timeline();
  tl.fromTo(
    fact.querySelector("p"),
    {
      x: "-20%",
      autoAlpha: 0,
    },
    {
      x: 0,
      duration: .5,
      autoAlpha: 1,
    }
  )
  .addLabel("pos1")
  .fromTo(
    fact.querySelector("img"),
    {
      y: "20%",
      autoAlpha: 0,
    },
    {
      autoAlpha: 1,
      duration: 1,
      y: 0,
    }
  );

  ScrollTrigger.create({
    animation: tl,
    trigger: fact,
    start: "top center",
    markers: true,
    toggleActions: "restart none none reverse"
  })
  
});
