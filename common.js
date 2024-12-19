window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    loader.style.display = "none";
});

function renderPhoneMenu(){
    document.querySelector(".phone-menu").style.left = "0";
    document.querySelector(".phone-menu").style.width = "100%";
}

function hidePhoneMenu(){
    document.querySelector(".phone-menu").style.left = "-50px";
    document.querySelector(".phone-menu").style.width = "0%";
}

function renderSubMenu(className){
    document.querySelector("."+className).style.display = "block";
}

function hideSubMenu(className){
    document.querySelector("."+className).style.display = "none";
}

function emptyCart(){
    document.querySelector('.empty-cart-msg').style.top = "135px";

    setTimeout(() => {
        document.querySelector('.empty-cart-msg').style.top = "0";
    }, 1000);
}

function hideAppAd(){
    document.querySelector(".app-ad").style.display = "none";
    document.querySelector("header").style.top = "0px";
}

const toggleButton = document.querySelector(".down");
const dropdownMenu = document.querySelector(".drop-down");
const headerLoc = document.querySelector(".header-loc");

toggleButton.addEventListener("click", () => {
    if (dropdownMenu.style.display === "block") {
        dropdownMenu.style.display = "none";
        toggleButton.classList.remove("up");
        toggleButton.classList.add("down");
    } else {
        dropdownMenu.style.display = "block";
        toggleButton.classList.remove("down");
        toggleButton.classList.add("up");
    }
});

dropdownMenu.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        toggleButton.textContent = event.target.textContent;
        dropdownMenu.style.display = "none";
        toggleButton.classList.remove("up");
        toggleButton.classList.add("down");
    }
});

document.addEventListener("click", (event) => {
    if (!headerLoc.contains(event.target)) {
        dropdownMenu.style.display = "none";
        toggleButton.classList.remove("up");
        toggleButton.classList.add("down");
    }
});

function renderSearchBar(){
    document.querySelector(".search-bar-panel").style.display = "flex";
}

function hideSearchBar(){
    document.querySelector(".search-bar-panel").style.display = "none";
}

const backToTopButton = document.querySelector(".backtoup");

window.onscroll = () => {
    if (document.documentElement.scrollTop > 300 || document.body.scrollTop > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

backToTopButton.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};