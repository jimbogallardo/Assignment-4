// document.addEventListener("DOMContentLoaded", function() {
//   let selectedBackground;
//   const backgroundSelect = document.querySelector(".bg-select");
//   const backgroundImageContainer = document.querySelector(".background-image");

//   backgroundImageContainer.classList.remove("default-background-image");
//   backgroundImageContainer.style.backgroundImage = 'url("./images/nyc.jpg");

//   backgroundSelect.addEventListener("change", function(event) {
//     selectedBackground = event.target.value;
//     if (backgroundImageContainer.classList.contains("default-background-image"))
//     backgroundImageContainer.classList.remove
//       });
// });

// // const defaultCity = document.querySelector("#defaultCity");
// //   const austin = document.querySelector("#austin");
// //   const la = document.querySelector("#la");
// //   const nyc = document.querySelector("#nyc");
// //   const sf = document.querySelector("#sf");
// //   const sydney = document.querySelector("#sydney");

// //   defaultCity.addEventListener("click", function() {
// //     document.body.style.backgroundImage = url = "austin.jpg";
// //   });
// //   austin.addEventListener("click", function() {
// //     document.body.style.backgroundImage = url = "austin.jpg";
// //   });
// //   la.addEventListener("click", function() {
// //     document.body.style.backgroundImage = url = "la.jpg";
// //   });
// //   nyc.addEventListener("click", function() {
// //     document.body.style.backgroundImage = url = "nyc.jpg";
// //   });
// //   sf.addEventListener("click", function() {
// //     document.body.style.backgroundImage = url = "sf.jpg";
// //   });
// //   sydney.addEventListener("click", function() {
// //     document.body.style.backgroundImage = url = "sydney.jpg";
// //   });
// // });

document.addEventListener("DOMContentLoaded", function() {
  let selectedBackground;
  const backgroundSelect = document.querySelector(".bg-select");
  const backgroundImageContainer = document.querySelector(".background-image");
  backgroundSelect.addEventListener("change", function(event) {
    selectedBackground = event.target.value;
    if (
      backgroundImageContainer.classList.contains("default-background-image")
    ) {
      backgroundImageContainer.classList.remove("default-background-image");
    }
    backgroundImageContainer.style.backgroundImage = `url("./images/${selectedBackground}.jpg")`;
  });
});
