
  document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".images img");

    images.forEach(img => {
      if (img.complete) {
        img.classList.add("loaded");
      } else {
        img.addEventListener("load", () => {
          img.classList.add("loaded");
        });
      }
    });
  });
