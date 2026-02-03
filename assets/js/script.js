// --- 1. CÓDIGO DEL AÑO ---
const currentYear = new Date().getFullYear();
const yearElement = document.getElementById('year');

if (yearElement) {
    yearElement.textContent = currentYear;
}


const scrollBtn = document.getElementById("scrollTopBtn");


function scrollFunction() {
    
    if (!scrollBtn) return;

    
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
}


window.onscroll = function() {
    scrollFunction();
};


if (scrollBtn) {
    scrollBtn.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}