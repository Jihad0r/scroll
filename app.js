let up = document.querySelector(".up");
let list = document.querySelector("nav");
let year = document.querySelector(".year")
let list_ = document.querySelector("ul")
let appear = document.querySelector(".list")


year.innerHTML = new Date().getFullYear()

window.addEventListener("scroll", function () {
    const scrollHeight = window.pageYOffset;
    const navHeight = list.getBoundingClientRect().height;
    if (scrollHeight > navHeight) {
        list.classList.add("down");
    } else {
        list.classList.remove("down");
    }
    if (scrollHeight > 500) {
        up.classList.add("up");
    } else {
        up.classList.remove("up");
    }
});



up.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
})  
appear.addEventListener("click", function () {
    if (list_.classList.contains("appear")) {
        list_.classList.remove("appear")
    } else {
        list_.classList.add("appear")
    }
})