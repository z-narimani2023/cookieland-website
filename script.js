const btn = document.getElementById("nav-toggle");
const links = document.getElementById("nav-links");
const header = document.getElementById("nav-h3");
const headers = document.getElementById("navbar");
const scroll_links = document.querySelectorAll(".scroll-link");

btn.addEventListener("click", () => {
    links.classList.toggle("show-links");
});
window.onscroll = function() {
    var top = window.scrollY;
    console.log(top);
    if (top >= 450) {
        header.classList.add("active");
        btn.classList.add("toggle-scroll");
        headers.classList.add("headers");
    } else {
        header.classList.remove("active");
        btn.classList.remove("toggle-scroll");
        headers.classList.remove("headers");
    }
}
scroll_links.forEach(link => {
    link.addEventListener("click", e => {

        e.preventDefault();
        links.classList.remove("show-links");

        const id = e.target.getAttribute("href").slice(1);
        const element = document.getElementById(id);

        let position = element.offsetTop - 62;

        window.scrollTo({
            left: 0,
            top: position,
            behavior: "smooth"
        });
    });
});