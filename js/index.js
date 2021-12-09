//waits for loading
document.addEventListener("DOMContentLoaded", function () {
  let wrapper = document.getElementById("wrapper");//id of wrapper
  let topLayer = wrapper.querySelector(".top"); //letting top layer as wrapper with query selector as top class
  let handle = wrapper.querySelector(".handle");//handle as wrapper with handle class
  let skew = 0;
  let delta = 0;

  if (wrapper.className.indexOf("skewed") != -1) {
    skew = 1000;//1000px used
  }

  wrapper.addEventListener("mousemove", function (e) {
    delta = (e.clientX - window.innerWidth / 2) * 0.5;//tracks mouse

    handle.style.left = e.clientX + delta + "px";

    topLayer.style.width = e.clientX + skew + delta + "px";//width will adjust along with handle
  });
});
