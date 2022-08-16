/* Main navigation */
let panelsSection = document.querySelector("#panels"),
  panelsContainer = document.querySelector("#panels-container"),
  tween;
document.querySelectorAll(".anchor").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    let targetElem = document.querySelector(e.target.getAttribute("href")),
      y = targetElem;
    if (targetElem && panelsContainer.isSameNode(targetElem.parentElement)) {
      let totalScroll = tween.scrollTrigger.end - tween.scrollTrigger.start,
        totalMovement = (panels.length - 1) * targetElem.offsetWidth;
      y = Math.round(
        tween.scrollTrigger.start +
          (targetElem.offsetLeft / totalMovement) * totalScroll
      );
    }
    gsap.to(window, {
      scrollTo: {
        y: y,
        autoKill: false,
      },
      duration: 0.1,
    });
  });
});

/* Panels */
const panels = gsap.utils.toArray("#panels-container .panel");
tween = gsap.to(panels, {
  xPercent: -100 * (panels.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: "#panels-container",
    pin: true,
    start: "top top",
    scrub: 2,
    // snap: {
    // 	snapTo: 1 / (panels.length - 1),
    // 	inertia: true,
    // 	duration: {min: 0.2, max: 0.2}
    // },
    end: () => "+=" + (panelsContainer.offsetWidth - innerWidth),
  },
});

/* Per-panel Animations */
const panel1 = gsap.timeline({
  scrollTrigger: { trigger: ".panel-one-img", start: "10% bottom" },
});
panel1
  .fromTo(
    ".panel-one-img",
    { x: -300, autoAlpha: 0 },
    { x: 0, autoAlpha: 1, duration: 1 }
  )
  .to(".panel-one-heading", { y: -150, delay: 0.25 });
