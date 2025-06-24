function changeHero() {
  document.getElementById("heroTitle").innerText = "Welcome to a Fresher FreshBox!";
}

function toggleFeatures() {
  let section = document.getElementById("features");
  if (section.style.display === "none" || section.style.display === "") {
    section.style.display = "flex";
  } else {
    section.style.display = "none";
  }
}

function submitEmail() {
  let email = document.getElementById("userEmail").value;
  if (email) {
    document.getElementById("message").innerText = "Thanks! We’ll be in touch soon.";
  }
}

let quotes = [
  "FreshBox is a game changer!",
  "Healthy eating made easy.",
  "Their mangoes are magic!"
];
let index = 0;
function nextTestimonial() {
  index = (index + 1) % quotes.length;
  document.getElementById("testimonial").innerText = quotes[index];
}

function getTotal() {
  let qty = document.getElementById("qty").value;
  let price = 25;
  let total = qty * price;
  if (qty >= 5) {
    total *= 0.9; // Take 10% off
  }
  document.getElementById("total").innerText = "You’ll pay: GHS " + total;
}

function changeBg() {
  // Use a visually appealing gradient background
  document.body.style.background = "linear-gradient(120deg, #b2e0ff 0%, #e0c3fc 100%)";
}

setInterval(() => {
  let now = new Date();
  document.getElementById("clock").innerText = now.toLocaleTimeString();
}, 1000);

function addToCart() {
  const msg = document.getElementById('cart-message');
  msg.innerText = 'Added to cart! 🛒';
  msg.classList.add('show');
  setTimeout(() => {
    msg.classList.remove('show');
    msg.innerText = '';
  }, 1800);
}