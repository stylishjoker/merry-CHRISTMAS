const container = document.getElementById("container");
const borderArray = ["50%", "50%"];
const blurArray = ["0", "5px"];
const colorArray = ["white", "white", "white"];
const width = document.documentElement.clientWidth;
const height = document.documentElement.clientHeight;
const count = 100;
const content = ["❅", "❆", ""];

const snow = () => {
  for (var i = 0; i < count; i++) {
    const randomLeft = Math.floor(Math.random() * width);
    const randomTop = Math.floor(Math.random() * height);
    const color = Math.floor(Math.random() * 3);
    const border = Math.floor(Math.random() * 2);
    const blur = Math.floor(Math.random() * 2);
    const shadow = Math.floor(Math.random() * 2);
    const widthElement = Math.floor(Math.random() * 5) + 5;
    const timeAnimation = Math.floor(Math.random() * 12) + 8;
    const opaShadow = Math.floor(Math.random() * 10) + 90;
    const fontsize = Math.floor(Math.random() * 25);

    const div = document.createElement("div");
    div.classList.add("snowElement");

    if (color === 2) {
      div.style.backgroundColor = colorArray[color];
    } else {
      div.style.color = "white";
      div.style.fontSize = fontsize + "px";
    }
    div.style.boxShadow = "0 0 15px 10px hsla(0,0%," + opaShadow + ",.5)";
    console.log("0 0 15px 10px hsla(0,0%," + opaShadow + ",.5)");
    div.style.position = "absolute";
    div.style.width = widthElement + "px";
    div.style.height = widthElement + "px";
    div.style.marginLeft = randomLeft + "px";
    div.style.marginTop = randomTop + "px";
    div.style.borderRadius = borderArray[border];
    div.style.filter = "blur(" + blurArray[blur] + ")";
    div.style.animation = "move " + timeAnimation + "s ease-in infinite";
    div.style.zIndex = "111";
    div.innerHTML = content[color];
    container.appendChild(div);
  }
};

const moon = () => {
  const div = document.createElement("div");
  div.classList.add("moon");
  container.appendChild(div);
};

const merry_christmas = () => {
  const textContent = ["merry", "christmas"];
  const div = document.createElement("div");
  div.classList.add("content");
  const HTML = textContent.map((_element) => {
    return `
      <span>${_element}</span>
    `;
  });
  div.innerHTML = HTML.join("");
  container.appendChild(div);
};

const snowman = (value, head, body) => {
  const div = document.createElement("div");
  div.classList.add("snowman-1");
  const div_head = document.createElement("div");
  div_head.classList.add("snowman-head");
  div_head.style.width = head + "px";
  div_head.style.height = head + "px";
  const div_body = document.createElement("div");
  div_body.classList.add("snowman-body");
  div_body.style.width = body + "px";
  div_body.style.height = body - 20 + "px";
  div.appendChild(div_head);
  div.appendChild(div_body);
  div.style.left = value + "%";
  container.appendChild(div);
};
const eye_snowman = () => {
  const html = `
    <div class="body">
    <div class="head"></div>
    <div class="hat"></div>
    <div class="scarf"></div>
    <div class="buttons"></div>
    <div class="hands">
      <div class="right-hand"></div>
      <div class="left-hand"></div>
    </div>
    <div class="shadow"></div>
  </div>
  `;
  const div = document.createElement("div");
  div.classList.add("snowman");
  div.innerHTML = html;
  container.appendChild(div);
};
// call funtion
snow();
moon();
merry_christmas();
eye_snowman();
// snowman(36, 120, 200);
snowman(47, 80, 120);
// eye_snowman();
