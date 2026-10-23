const validPages = [
    "Home.html",
    "about.html",
    "project.html",
    "404.html"
];

const currentPage = window.location.pathname.split("/").pop();

if (currentPage && !validPages.includes(currentPage)) {
    window.location.replace("404.html");
}