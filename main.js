const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
const menuIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", function (e) {
    e.preventDefault();

    navMenu.classList.toggle("active");

    // icon change
    if (navMenu.classList.contains("active")) {
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-xmark");
    } else {
        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");
    }
});
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    alert("Message Sent Successfully!");

    contactForm.reset();
});




// Typewriter Effect

const texts = [
    "Fresh Vegetables",
    "Daily Grocery Items",
    "Best Quality Products",
    "Big Summer Sale"
];

let textIndex = 0;
let charIndex = 0;

const typewriter = document.getElementById("typewriter");

function typeEffect() {
    if (charIndex < texts[textIndex].length) {
        typewriter.textContent += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(eraseEffect, 1500);
    }
}

function eraseEffect() {
    if (charIndex > 0) {
        typewriter.textContent = texts[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 50);
    } else {
        textIndex++;
        if (textIndex >= texts.length) {
            textIndex = 0;
        }
        setTimeout(typeEffect, 500);
    }
}

typeEffect();


const cartButtons = document.querySelectorAll(".add-to-cart");
const cartItemsContainer = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const clearCartBtn = document.getElementById("clear-cart");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function renderCart() {
    cartItemsContainer.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;

        cartItemsContainer.innerHTML += `
            <div class="cart-item">
                <span>${item.name} - ₹${item.price}</span>
                <button class="remove-btn" onclick="removeItem(${index})">
                    Remove
                </button>
            </div>
        `;
    });

    cartTotal.textContent = total;
}

cartButtons.forEach(button => {
    button.addEventListener("click", () => {
        const product = {
            name: button.dataset.name,
            price: Number(button.dataset.price)
        };

        cart.push(product);

        saveCart();
        renderCart();
    });
});

function removeItem(index) {
    cart.splice(index, 1);
    saveCart();
    renderCart();
}

clearCartBtn.addEventListener("click", () => {
    cart = [];
    saveCart();
    renderCart();
});

renderCart();



const cementButtons = document.querySelectorAll(".cement-btn");

cementButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        alert("Cement Order Request Sent Successfully!");
    });
});