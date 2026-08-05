function showImage(src) {
  const modalImage = document.getElementById("modalImage");

  if (modalImage) {
    modalImage.src = src;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (!window.bootstrap) {
    return;
  }

  document.querySelectorAll(".carousel").forEach((carousel) => {
    bootstrap.Carousel.getOrCreateInstance(carousel, {
      interval: 3500,
      pause: "hover",
      ride: "carousel",
      touch: true,
      wrap: true,
    });
  });
});
