gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);



function turnInnerTextIntoHTML(selector, animateClass) {
  if (animateClass == undefined) throw new Error("Must pass animateClass:string")
  
  let html = "<div style='display: inline-block;'>";
  const heading = document.querySelector(selector);

  heading.innerText.split("").map((letter) => {
    if (letter === " ") {
      html += `</div><span class="${animateClass}">&nbsp;</span><div style="display: inline-block;">`;
    } else {
      html += `<span class="${animateClass}">${letter}</span>`;
    }
  });
  return html;
}