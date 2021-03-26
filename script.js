function activateNav() {
    const menuBtn = document.getElementById("menu-btn");
    const nav = document.getElementById("nav-links");

    menuBtn.addEventListener("click", function () {
        nav.classList.toggle("nav-active")
    })
}



activateNav();