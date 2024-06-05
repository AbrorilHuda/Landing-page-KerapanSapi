const preloader = document.querySelector("#preloader");
if (preloader) {
    window.addEventListener("load", () => {
            preloader.remove();
    });
}

const menu = document.querySelector(".menu");
menu.addEventListener("click", function (e) {
    const targetMenu = e.target;
    if (targetMenu.classList.contains("nav-link")) {
        const menuLinkActive = document.querySelector("ul li a.active");
        if (
            menuLinkActive !== null &&
            targetMenu.getAttribute("href") !==
                menuLinkActive.getAttribute("href")
        ) {
            menuLinkActive.classList.remove("active");
        }
        targetMenu.classList.add("active");
    }
});
