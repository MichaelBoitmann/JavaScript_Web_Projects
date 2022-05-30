const toggleSwitch = document.querySelector('input[type="checkbox"]');

// Swtich Theme Dynamically
function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);
