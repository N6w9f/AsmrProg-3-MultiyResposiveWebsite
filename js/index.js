let text =
  document.getElementsByClassName("landing")[0].children[0].children[0]
    .children[0];

setInterval(() => {
  if (window.innerWidth <= 991) {
    text.innerHTML = "Hello, I'm Nawaf Creative Developer";
  }
  if (window.innerWidth > 991) {
    text.innerHTML = "Hello, I'm Nawaf<br>Creative Developer";
  }
}, 1000);
