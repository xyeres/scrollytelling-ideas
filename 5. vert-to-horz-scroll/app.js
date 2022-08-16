gsap.registerPlugin(ScrollTrigger);

function turnInnerTextIntoHTML(selector) {
  let html = "<div style='display: inline-block;'>";
  const heading = document.querySelector(selector);

  heading.innerText.split("").map((letter) => {
    if (letter === " ") {
      html += `</div><span class="animate-text">&nbsp;</span><div style="display: inline-block;">`;
    } else {
      html += `<span class="animate-text">${letter}</span>`;
    }
  });
  return html;
}

const html = turnInnerTextIntoHTML(".heading");
document.querySelector(".words").innerHTML = html;

const tl = gsap.timeline();

tl.from(".heading", { xPercent: -10 })
  .from(
    ".img1",
    {
      x: "50%",
      autoAlpha: 0,
    },
    "-=.5"
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

