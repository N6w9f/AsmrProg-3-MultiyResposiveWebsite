let text = document.getElementsByClassName("card")[0].children[1].children[0];

setInterval(() => {
  if (window.innerWidth <= 357) {
    text.innerHTML = "I'm Nawaf<br>Al-rmadi";
  }
  if (window.innerWidth > 357) {
    text.innerHTML = "I'm Nawaf Al-rmadi";
  }
}, 1000);
