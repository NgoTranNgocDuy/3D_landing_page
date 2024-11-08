const boxes = document.querySelectorAll(".box");
const heading = document.querySelector(".heading span");
const btn = document.querySelector(".btn");

const colors = [
  "#efd81d",
  "#61dbfb",
  "#41b883",
  "#b52e31",
  "#43853d",
  "#cf649a",
  "#e04e39",
];

const techs = ["JS", "React", "Vue", "Angular", "Node", "Sass", "Ember"];
const techUrls = {
  JS: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  React: "https://reactjs.org/",
  Vue: "https://vuejs.org/",
  Angular: "https://angular.io/",
  Node: "https://nodejs.org/",
  Sass: "https://sass-lang.com/",
  Ember: "https://emberjs.com/"
};
const descriptions = {
  JS: "JavaScript: A versatile language primarily used for web development.",
  React: "React: A JavaScript library for building user interfaces.",
  Vue: "Vue: A progressive framework for building UIs and single-page applications.",
  Angular: "Angular: A platform for building mobile and desktop web applications.",
  Node: "Node.js: A JavaScript runtime for server-side programming.",
  Sass: "Sass: A preprocessor scripting language that is interpreted into CSS.",
  Ember: "Ember: A framework for building ambitious web applications."
};
let current = 1;
const tooltip = document.querySelector(".tooltip");
const centerTooltip = document.querySelector(".center-tooltip");

boxes.forEach((box, index) => {
  box.addEventListener("mouseover", () => {
    const techName = techs[index];
    centerTooltip.textContent = descriptions[techName];
    centerTooltip.style.opacity = 1; // Show the tooltip
    
    // Set the box shadow color based on the framework's color
    centerTooltip.style.boxShadow = `
      0 0 10px ${colors[index]},
      0 0 20px ${colors[index]},
      0 0 30px ${colors[index]},
      0 0 40px ${colors[index]}`;
  });

  box.addEventListener("mouseout", () => {
    centerTooltip.style.opacity = 0; // Hide the tooltip
    centerTooltip.style.boxShadow = "none"; // Remove the box shadow
  });
});

const textStyle = () => {
  heading.style.color = colors[current - 1];
  heading.textContent = techs[current - 1];
  btn.style.backgroundColor = colors[current - 1];
  btn.firstElementChild.textContent = techs[current - 1];
};
// update button with correct urls
btn.addEventListener("click", () => {
  const techName = techs[current - 1];
  const url = techUrls[techName];
  if (url) {
    window.location.href = url;
  }
});

btn.addEventListener("click", () => {
  document.body.classList.add("fade-out");
  setTimeout(() => {
      window.location.href = url;
  }, 500);
});

let interval = setInterval(() => {
  boxes.forEach((box) => {
    if (current > boxes.length) current = 1;

    if (box.classList[1].split("-")[1] * 1 === current) {
      box.classList.add("active");
    } else {
      box.classList.remove("active");
    }
  });
  textStyle();
  current++;
}, 5000);

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    boxes.forEach((cube) => {
      cube.classList.remove("active");
    });
    box.classList.add("active");

    current = box.classList[1].split("-")[1] * 1;

    textStyle();

    clearInterval(interval);
  });
});
