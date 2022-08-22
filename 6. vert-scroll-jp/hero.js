let html = turnInnerTextIntoHTML(".hero-heading", "animate-text");
document.querySelector(".words").innerHTML = html;

const tl = gsap.timeline();

tl.to("nav", { opacity: 1, duration: .75})
  .to(".hero-image", {
    inset: 0,
    width: "10%",
    height: "10%",
    ease: "slow(0.7, 0.7, false)",
    duration: 0.25,
    opacity: 1,
  })
  .to(".hero-image", {
    inset: 0,
    width: "100%",
    height: "100%",
    ease: "slow(0.7, 0.7, false)",
    duration: 1.25,
  })
  .from(".animate-text", {
    y: "200%",
    ease: "back.out(1)",
    stagger: {
      each: 0.025,
    },
  });
