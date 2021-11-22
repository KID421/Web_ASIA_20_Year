window.onload = function() {
    // var btn1 = document.getElementById("btn1");
    // var btn2 = document.getElementById("btn2");
    var box = document.getElementById("box");
    var navbar = document.getElementById("navbar");
    var menu = document.getElementById("menu-a");

    // btn1.addEventListener("mouseenter", function() {
    //     navbar.style.height = "20vh";
    // });
    // btn1.addEventListener("mouseleave", function() {
    //     navbar.style.height = "15vh";
    // });

    // btn2.addEventListener("mouseenter", function() {
    //     navbar.style.height = "33vh";
    // });
    // btn2.addEventListener("mouseleave", function() {
    //     navbar.style.height = "15vh";
    // });

    menu.addEventListener("click", function() {
        navbar.style.transform = "scaleY(1)";
        navbar.style.transition = "0.35s";
    });
    box.addEventListener("click", function() {
        navbar.style.transform = "scaleY(0)";
    });
}