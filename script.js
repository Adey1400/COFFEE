function imgSlider(anything){ 
      document.querySelector('.starbucks').src = anything;
}
function changeCircleColor(newColor) {
    const circle = document.querySelector('.circle');
    circle.style.background = newColor;
  }
  document.getElementById("instagram").addEventListener("click", () => {
    console.log("Instagram clicked");
    window.location.href = "https://www.instagram.com/starbucks/?hl=en";
});

document.getElementById("facebook").addEventListener("click", () => {
    console.log("Facebook clicked");
    window.location.href = "https://www.facebook.com/Starbucks/";
});

document.getElementById("twitter").addEventListener("click", () => {
    console.log("Twitter clicked");
    window.location.href = "https://twitter.com/StarbucksIndia";
});