function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.body.addEventListener('click', function (event) {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    if (!menu.contains(event.target) && !icon.contains(event.target)) {
        menu.classList.remove("open");
        icon.classList.remove("open");
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const moonIcons = document.querySelectorAll('#moon, #moon-mobile');
    const sunIcons = document.querySelectorAll('#sun, #sun-mobile');
    const body = document.body;
    const themeIcons = document.querySelectorAll(".icon");

    function enableDarkTheme() {
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
        themeIcons.forEach((icon) => {
            icon.src = icon.getAttribute("src-dark");
        });
    }

    function disableDarkTheme() {
        body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');
        themeIcons.forEach((icon) => {
            icon.src = icon.getAttribute("src-light");
        });
    }

    moonIcons.forEach((moonIcon) => {
        moonIcon.addEventListener('click', enableDarkTheme);
    });

    sunIcons.forEach((sunIcon) => {
        sunIcon.addEventListener('click', disableDarkTheme);
    });

    // Check the saved theme from local storage
    if (localStorage.getItem('theme') === 'dark') {
        enableDarkTheme();
    } else {
        disableDarkTheme();
    }
});
