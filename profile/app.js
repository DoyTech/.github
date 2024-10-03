document.addEventListener("DOMContentLoaded", () => {
  const logo = document.getElementById("logo");

  // Animate logo
  gsap.from(logo, {
    delay: 2,
    scale: 0,
    yPerecent: -70,
    duration: 2,
    opacity: 0,
    ease: "power2.out",
  });

  // Trigger confetti after 3 seconds
  setTimeout(() => {
    confetti({
      particleCount: 200,
      spread: 170,
      origin: { y: 0.6 },
    });
  }, 3000);
});
