const mainTitle = document.querySelector(".main-title");
const wip = document.querySelector(".wip");
const t1 = document.querySelector(".t1");
const t2 = document.querySelector(".t2");
const t3 = document.querySelector(".t3");
const t4 = document.querySelector(".t4");

const clearOpacity = (element, delay) => {
  setTimeout(function () {
    element.style.opacity = "0";
  }, delay);
};

/* This function animates the opacity from 0 to 1 or 1 to 0  */

const setOpacity = (element, duration, v1, v2, delay) => {
  setTimeout(function () {
    let opacity = v1;
    let id = setInterval(frame, duration);
    function frame() {
      if (opacity == v2) {
        clearInterval(id);
      } else {
        if (v1 < v2) {
          opacity = opacity + 0.01;
          element.style.opacity = opacity;
        } else {
          opacity = opacity - 0.01;
          element.style.opacity = opacity;
        }
      }
    }
  }, delay);
};

clearOpacity(t4, 3000);
clearOpacity(t3, 3200);
clearOpacity(t2, 3400);
clearOpacity(t1, 3600);

setOpacity(mainTitle, 10, 1, 0, 4200);
setOpacity(wip, 20, 0, 1, 5300);
