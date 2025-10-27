window.addEventListener('beforeunload', () => {
    const btn = document.getElementById('whatsappBtn');
    btn.style.animation = 'slideDown 0.6s ease forwards';
  });

const phoneNumber = "201099783972";

document.querySelectorAll(".whatsappBtn").forEach(button => {
  button.addEventListener("click", () => {
    const message = encodeURIComponent(button.getAttribute("data-message"));
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank");
  });
});
