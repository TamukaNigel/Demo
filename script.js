function displayMyMobileMenuFunc() {
    var x = document.getElementById("mymenu");
    if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
        x.style.display = "flex";
        x.style.flexDirection = "row";
  }
}