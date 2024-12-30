const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchbtn');
const cards = document.querySelectorAll('.card');

searchInput.addEventListener('focus', function() {
    searchButton.style.outline = '3px solid #000';
});

searchInput.addEventListener('blur', function() {
    searchButton.style.outline = 'none';
});

searchInput.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase(); 

    cards.forEach(card => {
        const cardTitle = card.querySelector('p').textContent.toLowerCase();  
        if (cardTitle.includes(searchTerm)) {
            card.style.display = '';  
        } else {
            card.style.display = 'none';
        }
    });
});
// Telefon kartalarini olish
const phoneContainer = document.getElementById('phoneContainer');
const phones = Array.from(phoneContainer.getElementsByClassName('card'));  // 'phone' ni 'card' ga almashtirdik

// Tugmalarga hodisalar qo'shish
document.getElementById('iphoneBtn').addEventListener('click', function() {
    filterPhones('iphone');
});

document.getElementById('samsungBtn').addEventListener('click', function() {
    filterPhones('samsung');
});

document.getElementById('redmiBtn').addEventListener('click', function() {
    filterPhones('redmi');
});

function filterPhones(category) {
    const filteredPhones = phones.filter(function(card) {
        return card.getAttribute('data-category') === category;  
    });

    phoneContainer.innerHTML = '';  

    filteredPhones.forEach(function(card) {
        phoneContainer.appendChild(card); 
    });
    
}
document.getElementById('reverseBtn').addEventListener('click', function() {
    const phoneContainer = document.getElementById('phoneContainer');  
    const phones = Array.from(phoneContainer.getElementsByClassName('card'));  

    const reversedPhones = phones.reverse();

    phoneContainer.innerHTML = ''; 
    reversedPhones.forEach(card => {
        phoneContainer.appendChild(card); 
    });
});

document.getElementById('iphoneBtn').addEventListener('click', function() {
    filterPhones('iphone');
    updateButtonStyles('iphone');
});

document.getElementById('samsungBtn').addEventListener('click', function() {
    filterPhones('samsung');
    updateButtonStyles('samsung');
});

document.getElementById('redmiBtn').addEventListener('click', function() {
    filterPhones('redmi');
    updateButtonStyles('redmi');
});

function filterPhones(category) {
    const allCards = document.querySelectorAll('.card');
    allCards.forEach(card => {
        if (card.getAttribute('data-category') === category || category === 'all') {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function updateButtonStyles(selectedCategory) {
    const buttons = document.querySelectorAll('.buttons button');

    buttons.forEach(button => {
        button.classList.remove('active');
    });

    const selectedButton = document.getElementById(`${selectedCategory}Btn`);
    selectedButton.classList.add('active');
}
document.addEventListener("DOMContentLoaded", function() {
    const pushBtn = document.getElementById("pushBtn");
    const phoneContainer = document.getElementById("phoneContainer");
  
    pushBtn.addEventListener("click", function() {
      const firstCard = phoneContainer.querySelector(".card");
  
      const clonedCard = firstCard.cloneNode(true);
  
      phoneContainer.appendChild(clonedCard);
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    const unshiftBtn = document.getElementById("unshiftBtn");
    const phoneContainer = document.getElementById("phoneContainer");
  
    unshiftBtn.addEventListener("click", function() {
      const lastCard = phoneContainer.querySelector(".card:last-child");
  
      const clonedCard = lastCard.cloneNode(true);
  
      phoneContainer.insertBefore(clonedCard, phoneContainer.firstChild);
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const phoneContainer = document.getElementById("phoneContainer");
    const spliceBoshiBtn = document.getElementById("spliceBoshi");
    const spliceOxiriBtn = document.getElementById("spliceOxiri");

    // "splice boshidan" tugmasi bosilganda
    spliceBoshiBtn.addEventListener("click", function () {
        let cards = Array.from(phoneContainer.getElementsByClassName("card"));

        // Massivning boshidan bitta kartani olib tashlash
        cards.splice(0, 1);

        // O'zgartirilgan massivni HTMLga qayta joylashtirish
        phoneContainer.innerHTML = ''; // Kontentni tozalash
        cards.forEach(card => {
            phoneContainer.appendChild(card); // Har bir kartani qayta joylashtirish
        });
    });

    // "splice oxiridan" tugmasi bosilganda
    spliceOxiriBtn.addEventListener("click", function () {
        let cards = Array.from(phoneContainer.getElementsByClassName("card"));

        // Massivning oxiridan bitta kartani olib tashlash
        cards.splice(cards.length - 1, 1);

        // O'zgartirilgan massivni HTMLga qayta joylashtirish
        phoneContainer.innerHTML = ''; // Kontentni tozalash
        cards.forEach(card => {
            phoneContainer.appendChild(card); // Har bir kartani qayta joylashtirish
        });
    });
});

window.addEventListener('scroll', function() {
    const scrollBg = document.getElementById('scroll-bg');
    if (window.scrollY > 45) {
        scrollBg.classList.add('sticky-active');
    } else {
        scrollBg.classList.remove('sticky-active');
    }
});

document.querySelector('button[type="reset"]').addEventListener('click', function() {
    location.reload();
});