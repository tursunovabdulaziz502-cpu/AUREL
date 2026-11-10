const cards = document.querySelectorAll(".card");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalClose = document.getElementById("modalClose");

cards.forEach(function (card) {
  card.onclick = function () {
    modalImg.src = card.querySelector(".img").src;
    modalTitle.textContent = card.querySelector(".name").textContent;
    modal.classList.add("open");
  };
});

modalClose.onclick = function () {
  modal.classList.remove("open");
};

modal.onclick = function (e) {
  if (e.target === modal) {
    modal.classList.remove("open");
  }
};

const contactForm = document.getElementById("contactForm");
const contactBtn = document.getElementById("contactBtn");

contactForm.onsubmit = function (e) {
  e.preventDefault();
  contactBtn.textContent = "Thank you, we will reply soon";
  contactForm.reset();

  setTimeout(function () {
    contactBtn.innerHTML = "Send your enquiry <span>↗</span>";
  }, 3000);
};