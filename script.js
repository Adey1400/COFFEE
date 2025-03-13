function imgSlider(anything){ 
      document.querySelector('.starbucks').src = anything;
}
function changeCircleColor(newColor) {
    const circle = document.querySelector('.circle');
    circle.style.background = newColor;
  }
  document.querySelectorAll(".instagram").forEach(button => {
    button.addEventListener("click", () => {
        console.log("Instagram clicked");
        window.location.href = "https://www.instagram.com/starbucks/?hl=en";
    });
});

document.querySelectorAll(".facebook").forEach(button => {
    button.addEventListener("click", () => {
        console.log("Facebook clicked");
        window.location.href = "https://www.facebook.com/Starbucks/";
    });
});

document.querySelectorAll(".twitter").forEach(button => {
    button.addEventListener("click", () => {
        console.log("Twitter clicked");
        window.location.href = "https://twitter.com/StarbucksIndia";
    });
});
document.querySelector(".learn-btn").addEventListener("click", () => {
    document.getElementById("modal").style.display = "flex";
});

document.querySelector(".close-btn").addEventListener("click", () => {
    document.getElementById("modal").style.display = "none";
});

document.getElementById("modal").addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) { 
        document.getElementById("modal").style.display = "none";
    }
});