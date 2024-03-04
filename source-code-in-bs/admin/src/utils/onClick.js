const getId = (id) => {
  return document.querySelector(`#${id}`);
};

const hideSide = (act, div, btn) => {
  if (act) {
    !div.classList.contains("close-toggle") &&
      div.classList.add("close-toggle");

    btn.setAttribute("src", "./src/assets/svgs/ArrowSideRight.svg");
  } else {
    div.classList.contains("close-toggle") &&
      div.classList.remove("close-toggle");

    btn.setAttribute("src", "./src/assets/svgs/ArrowSideLeft.svg");
  }
};

document.body.addEventListener("click", (event) => {
  if (event.target.id === "toggle-side-right") {
    const btn = getId("toggle-side-right");
    const act = btn.getAttribute("src").includes("ArrowSideLeft");
    const div = getId("side-bar");

    hideSide(act, div, btn);
  }

  if (event.target.id === "toggle-side-left") {
    const btn = getId("toggle-side-left");
    const act = btn.getAttribute("src").includes("ArrowSideLeft");
    const div = getId("side-bar");

    hideSide(act, div, btn);
  }
});
