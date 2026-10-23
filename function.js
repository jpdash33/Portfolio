const page = window.location.pathname.split("/").pop().toLowerCase();

function checkConnection() {
    if (!navigator.onLine && page !== "404.html") {
        sessionStorage.setItem("lastPage", window.location.href);
        window.location.replace("404.html");
    }
    else if (navigator.onLine && page === "404.html") {
        // back online while on the error page, return to where the user was
        const last = sessionStorage.getItem("lastPage") || "Home.html";
        window.location.replace(last);
    }
    // online and on a normal page: do nothing
}

checkConnection();
window.addEventListener("offline", checkConnection);
window.addEventListener("online", checkConnection);