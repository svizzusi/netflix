let accordion = document.querySelectorAll('.accordion');
let x;
let activeAccordion = null;
console.log(accordion.length);
for (x = 0; x < accordion.length; x++) {
    accordion[x].addEventListener('click', () => {
        if (activeAccordion && activeAccordion !== this) {
            let activePanel = activeAccordion.nextElementSibling;
            activePanel.style.display = "none";
            activeAccordion.classList.remove('active');
        }
    })
}