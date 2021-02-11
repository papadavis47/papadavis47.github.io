const hacking = document.getElementById("binary");

function swapImage(id, primary, secondary) {
  var src = document.getElementById(id).src;
  if (src.match(primary)) {
    document.getElementById(id).src = secondary;
  } else {
    document.getElementById(id).src = primary;
  }
}

hacking.addEventListener("click", (e) => {
  swapImage("binary", "assets/binary.jpg", "assets/react.jpg");
});
