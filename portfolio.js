document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".carousel").forEach((carousel) => {
    bootstrap.Carousel.getOrCreateInstance(carousel, {
      interval: 3500,
      pause: "hover",
      touch: true,
      wrap: true,
    });
  });
});
