

let html = turnInnerTextIntoHTML(".heading", "animate-text");
document.querySelector(".words").innerHTML = html;

const tl = gsap.timeline();

tl.from(".heading", { xPercent: -10 })
  .from(
    ".img1",
    {
      x: "40%",
      autoAlpha: 0,
    },
    "-=.25"
  )
  .from(
    ".animate-text",
    {
      y: "200%",
      ease: "back.out(1)",
      stagger: {
        each: 0.025,
      },
    },
    "-=.5"
  )
  .fromTo(
    ".img1",
    {
      autoAlpha: 1,
    },
    {
      autoAlpha: 0,
      duration: .25
    }
  )
  .fromTo(
    ".img2",
    {
      x: "100%",
      autoAlpha: 0,
    },
    {
      x: "0%",
      autoAlpha: 1,
      duration: .87
    }
  )
  .to(".img2", {autoAlpha: 0})
  .to(".coverImg", {mixBlendMode: "unset", duration: 1})
  .to(".img2", {autoAlpha: 1}, "-=1")

