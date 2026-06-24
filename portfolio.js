
const header = document.getElementById("main-header");
 
window.addEventListener("scroll", () => {
 
    if (window.scrollY > 80) {
    
        header.classList.add("scrolled");
    } else {
        
        header.classList.remove("scrolled");
    }
 
});


// On récupère tous les boutons et tous les panneaux
const tabBtns = document.querySelectorAll(".tab-btn");
const tabPanels = document.querySelectorAll(".tab-panel");

// Pour chaque bouton, on écoute le clic
tabBtns.forEach(btn => {
  btn.addEventListener("click", () => {

    tabBtns.forEach(b => b.classList.remove("active"));
    tabPanels.forEach(p => p.classList.remove("active"));
    btn.classList.add("active");
    const cible = btn.dataset.target; 
    document.getElementById(cible).classList.add("active");

  });
});
 
