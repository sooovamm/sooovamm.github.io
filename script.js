// script.js

document.addEventListener("DOMContentLoaded", function () {
  /* ===== Smooth Scrolling ===== */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });

  /* ===== Sticky Navbar Effect ===== */
  const header = document.querySelector("header");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.style.backgroundColor = "#222"; // Darker background on scroll
      header.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2)";
    } else {
      header.style.backgroundColor = "rgba(26, 16, 16, 0.85)";
      header.style.boxShadow = "none";
    }
  });

  /* ===== Typing Animation for Hero Section ===== */
  const heroText = document.querySelector(".hero h1");
  const textArray = ["Hey There👋"];
  let textIndex = 0;
  let charIndex = 0;
  
  function typeText() {
    if (charIndex < textArray[textIndex].length) {
      heroText.textContent += textArray[textIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeText, 100);
    } 
 /* =====   else {
      setTimeout(eraseText, 20); // Pause before erasing
    } ===== */
  }

  function eraseText() {
    if (charIndex > 0) {
      heroText.textContent = textArray[textIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(eraseText, 50);
    } else {
      textIndex = (textIndex + 1) % textArray.length;
      setTimeout(typeText, 500);
    }
  }

  typeText(); // Start animation

  /* ===== Portfolio Hover Animation ===== */
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  portfolioItems.forEach(item => {
    item.addEventListener("mouseover", () => {
      item.style.transform = "scale(1.05)";
      item.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.2)";
    });

    item.addEventListener("mouseleave", () => {
      item.style.transform = "scale(1)";
      item.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
    });
  });

  /* ===== Services Card Hover Effect ===== */
  const serviceCards = document.querySelectorAll(".service-card");

  serviceCards.forEach(card => {
    card.addEventListener("mouseover", () => {
      card.style.transform = "rotate(3deg)";
      card.style.boxShadow = "0 15px 25px rgba(0, 0, 0, 0.15)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "rotate(0deg)";
      card.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
    });
  });

  /* ===== Contact Form Validation ===== */
  const contactForm = document.querySelector(".contact form");

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.querySelector(".contact input[name='name']").value.trim();
    const email = document.querySelector(".contact input[name='email']").value.trim();
    const message = document.querySelector(".contact textarea").value.trim();

    if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields before submitting.");
      return;
    }

    alert("Thank you for reaching out! Your message has been sent successfully.");
    contactForm.reset();
  });

});
