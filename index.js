const bars = document.querySelectorAll('.fa-bars')[0];
const links = document.querySelectorAll('.contents')[0];
bars.addEventListener("click" , ()=>{
    links.classList.toggle("active");
    bars.classList.toggle("fa-xmark");
});