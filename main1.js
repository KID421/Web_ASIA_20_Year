window.onload = function () {
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

    var close = false;

    menu.addEventListener("click", function () {
        
        navbar.style.transition = "0.35s";
        if (close == false) {
            menu.style.backgroundImage = "url(./img/close.png)";
            close = true;
            navbar.style.transform = "scaleY(1)";
        }
        else if (close == true) {
            menu.style.backgroundImage = "url(./img/menu.png)";
            close = false;
            navbar.style.transform = "scaleY(0)";
        }
    });
    box.addEventListener("click", function () {
        // navbar.style.transform = "scaleY(0)";
    });
}