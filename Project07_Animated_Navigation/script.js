const menuBars = document.getElementById('menuBars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');

function toggleNav() {
    // Toggle: Menu Bars Open/Closed
    menuBars.classList.toggle('change');
}

// Event Listeners
menuBars.addEventListener('click', toggleNav);
nar1.addEventListener('click', toggleNav);
nar2.addEventListener('click', toggleNav);
nar3.addEventListener('click', toggleNav);
nar4.addEventListener('click', toggleNav);
nar5.addEventListener('click', toggleNav);