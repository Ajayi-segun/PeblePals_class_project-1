

function is_game_started() {
    return false;
}

function is_page_active(page_name) {
    const url_full = window.location.href;
    const found = url_full.search(page_name.toLowerCase());

    if (url_full == "http://127.0.0.1:5500/" || url_full == "http://127.0.0.1:5500/index.html") {
        if (page_name == "HOME") {
            return true
        }
    }
    return found > 0
}

const nav_links = [
    { "label": "HOME", "link": "/" },
    { "label": "ABOUT", "link": "/about.html" },
    { "label": "TESTIMONIALS", "link": "/testimonials.html" },
    is_game_started() ? { "label": "GAME", "link": "/game.html" } : { "label": "ADOPT", "link": "/adopt.html" }
]

let nav_container = document.getElementById("main-nav");

function createNavButton(button) {
    nav_container.innerHTML += `<a class="nav-link 
        ${is_page_active(button.label) ? "active" : ""}
    "
    href="${button.link}">${button.label}</a>`;
}

nav_links.forEach(createNavButton);