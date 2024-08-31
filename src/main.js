const headding = document.querySelector(".box h1");
const sound = document.getElementById("sounds");

const digitalClock = () => {
  const date = new Date();
  headding.innerHTML = `${
    date.getHours() < 10 ? "0" + date.getHours() : date.getHours()
  }:${date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}:${
    date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()
  } `;
};
digitalClock();

setInterval(() => {
  digitalClock();
  //   sound.play();
}, 1000);
