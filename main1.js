window.onload = function() {
    var navbar = document.getElementById("navbar");
    var btn1 = document.getElementById("btn1");
    var btn2 = document.getElementById("btn2");

    btn1.addEventListener("mouseenter", function() {
        navbar.style.height = "20vh";
    });
    btn1.addEventListener("mouseleave", function() {
        navbar.style.height = "15vh";
    });

    btn2.addEventListener("mouseenter", function() {
        navbar.style.height = "31vh";
    });
    btn2.addEventListener("mouseleave", function() {
        navbar.style.height = "15vh";
    });
}