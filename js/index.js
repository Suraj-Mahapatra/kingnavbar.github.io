const menu = document.querySelector(".menubtn");
const navheader = document.querySelector(".header");

 const togglenav = () => {
    // alert("please lol");
    navheader.classList.toggle("active");
}

menu.addEventListener('click', () => togglenav());