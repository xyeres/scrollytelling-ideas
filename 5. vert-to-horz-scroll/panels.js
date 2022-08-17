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
    scrub: 1.3,
    // snap: {
    // 	snapTo: 1 / (panels.length - 1),
    // 	inertia: true,
    // 	duration: {min: 0.2, max: 0.2}
    // },
    end: () => "+=" + (panelsContainer.offsetWidth - innerWidth),
  },
});

/* Per-panel Animations */

// PANEL 1
const p1 = gsap.timeline();
p1.fromTo(
  ".panel-one-img",
  { x: -300, autoAlpha: 0 },
  { x: 0, autoAlpha: 1, duration: 1 }
)
  .from(".panel-one-heading", { autoAlpha: 0, y: 200, duration: 0.76 })
  .from(".panel-one-desc", { autoAlpha: 0 }, "-=.75");

ScrollTrigger.create({
  animation: p1,
  trigger: ".panel-one-img",
  start: "10% bottom",
});

const reveal = gsap.timeline();
reveal.to(".panel-one-desc-after", { height: 20 });
ScrollTrigger.create({
  toggleActions: "restart reverse restart reverse",
  animation: reveal,
  start: "2% top",
  end: "bottom",
  endTrigger: "#panel-2",
  trigger: ".panel-one-desc",
});

// PANEL 2
const p2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".panel-two-img",
    scrub: 2.5,
    end: () => "+=" + (panelsContainer.offsetWidth - innerWidth),
    start: "top top",
    containerAnimation: tween,
  },
});

p2.from(".panel-two-img", { xPercent: 15, scale: 1.5 });

const p2reveal = gsap.timeline();
p2reveal.from(".panel-two-heading", { x: 280 });

ScrollTrigger.create({
  trigger: ".panel-two-desc",
  toggleActions: "restart none none none",
  containerAnimation: tween,
  animation: p2reveal,
  start: "40% center",
  scrub: 2,
});

const sketch = gsap.timeline({
  scrollTrigger: {
    trigger: ".panel-two-desc",
    toggleActions: "restart reverse restart reverse",
    containerAnimation: tween,
    start: "40% center",
  },
});

sketch
  .from(".circle", {
    autoAlpha: 0,
  })
  .from(".line", {
    autoAlpha: 0,
  })
  .from(".sketch-note", {
    autoAlpha: 0,
  });

// PANEL 3
const p3headingHtml = turnInnerTextIntoHTML(
  ".panel-three-heading",
  "p3-animated-text"
);
document.querySelector(".panel-three-heading").innerHTML = p3headingHtml;

const p3 = gsap.timeline({
  scrollTrigger: {
    trigger: "#panel-3",
    containerAnimation: tween,
    start: "20% center",
  },
});

p3.from(".p3-animated-text", {
  y: "400%",
  ease: "back.out(1)",
  duration: 1,
  stagger: {
    each: 0.15,
  },
});

// PANEL 4
const p4 = gsap.timeline({
  scrollTrigger: {
    trigger: "#panel-4",
    containerAnimation: tween,
    start: "8% center",
    markers: true,
  },
});

p4.from(".p4-rect", { scale: 0.5 }).from(".p4-circle", {
  scale: 0,
});
