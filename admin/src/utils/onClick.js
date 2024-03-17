const getId = (id) => {
  return document.querySelector(`#${id}`);
};

const hideSide = (act, div, btn) => {
  const bool = window.location.pathname.includes("template.html");

  if (act) {
    !div.classList.contains("close-toggle") &&
      div.classList.add("close-toggle");

    const src = bool
      ? "../../src/assets/svgs/ArrowSideRight.svg"
      : "./src/assets/svgs/ArrowSideRight.svg";

    btn.setAttribute("src", src);
  } else {
    div.classList.contains("close-toggle") &&
      div.classList.remove("close-toggle");

    const src = bool
      ? "../../src/assets/svgs/ArrowSideLeft.svg"
      : "./src/assets/svgs/ArrowSideLeft.svg";

    btn.setAttribute("src", src);
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

  if (event.target.id === "sign_in_btn") {
    const email = getId("email");
    const passw = getId("password");

    const payload = {
      email: email.value,
      pass: passw.value,
    };

    fetch("http://localhost:3000/api/v1/https/auth/signin", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          window.localStorage.setItem("token", data.token);
          window.location.href =
            "http://127.0.0.1:5500/src/templates/home.template.html";
        } else {
          console.log("invalid");
        }
      });
  }
});
