

window.onload = function () {
    let htmlClassList = document.querySelector("html").classList;
    if(htmlClassList.contains("dark")){
        themeMode.innerHTML = `<i class="fas fa-sun"></i><span> Light Mode</span>`;
    }
}

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        center: true,
        mouseDrag: true,
        nav: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                nav: false
            },
            1300: {
                nav: true
            }
        }
    });
  });



var options = {
    strings: ['Fron-End Developer', 'Back-End Developer', "Mobile Developer"],
    typeSpeed: 50,
    fadeOut: true,
    loop: true,
    showCursor: false,
};

var typed = new Typed('.element', options);


var myElement = document.querySelector(".navbar");
// construct an instance of Headroom, passing the element
var headroom  = new Headroom(myElement);
// initialise
headroom.init();


let themeMode = document.getElementById("theme-mode");

themeMode.onclick = () => changeMode();
function changeMode(){
    let htmlClassList = document.querySelector("html").classList;
    let navBarClassList = document.querySelector("nav").classList;
    if(localStorage.theme == "dark"){
        htmlClassList.remove("dark");
        navBarClassList.remove("dark-nav");
        localStorage.removeItem("theme");
        themeMode.innerHTML = `<i class="fas fa-moon"></i><span> Dark Mode</span>`;
    }else {
        htmlClassList.add("dark");
        navBarClassList.add("dark-nav");
        localStorage.theme = "dark";
        themeMode.innerHTML = `<i class="fas fa-sun"></i><span> Light Mode</span>`;
    }
    console.log(localStorage.theme);
}