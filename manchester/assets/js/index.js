const $ = document.querySelector.bind(document);

$(".header__option-language").onclick = () => {
    $(".language__option").classList.toggle("active");
}

// Tablet menu
$(".tablet-menu").onclick = () => {
    $(".overplay").classList.add("active");
    $(".tablet-menu__container").classList.add("active");
}

$(".close__menu-tablet").onclick = () => {
    $(".overplay").classList.remove("active");
    $(".tablet-menu__container").classList.remove("active");
}

$(".overplay").onclick = () => {
    $(".overplay").classList.remove("active");
    $(".tablet-menu__container").classList.remove("active");
    $(".mobile-menu__container").classList.remove("active");
}


// Mobile menu

$(".mobile-menu").onclick = () => {
    $(".overplay").classList.add("active");
    $(".mobile-menu__container").classList.add("active");
}

$(".close__menu-mobile").onclick = () => {
    $(".overplay").classList.remove("active");
    $(".mobile-menu__container").classList.remove("active");
}


