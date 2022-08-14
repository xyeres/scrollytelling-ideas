gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".img").forEach((img) => {
  gsap.fromTo(
    img,
    {
      opacity: 0.1,
      filter: "grayscale(100%)",
    },
    {
      duration: 1.5,
      opacity: 1,
      filter: "grayscale(0%)",
      scrollTrigger: {
        trigger: img,
        start: "15% 95%",
        end: "bottom 60%",
        markers: true,
        toggleActions: "restart reverse none reverse",
      },
    }
  );
});
