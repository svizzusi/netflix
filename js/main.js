let accordion = document.querySelectorAll(".accordion");
let i;
let activeAccordion = null;

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function() {
    if (activeAccordion && activeAccordion !== this) {
      let activePanel = activeAccordion.nextElementSibling;
      activePanel.style.display = "none";
      activeAccordion.classList.remove("active");
    }

    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    
    if (panel.style.display === "block") {
      panel.style.display = "none";
      activeAccordion = null;
    } else {
      panel.style.display = "block";
      activeAccordion = this;
    }
  });
}


// let accordion = document.querySelectorAll(".accordion");
// let x;
// let activeAccordion = null;
// for (x = 0; x < accordion.length; x++) {
//     accordion[x].addEventListener("click", function() {
//         if (activeAccordion && activeAccordion !== this) {
//             let activePanel = activeAccordion.nextElementSibling;
//             activePanel.style.display = "none";
//             activeAccordion.classList.remove("active");
//         }
//         this.classlist.toggle("active");
//         let panel = this.nextElementSibling;
//         if (panel.style.display === "block") {
//             panel.style.display = "none";
//             activeAccordion = null;
//         } else {
//             panel.style.display = "block";
//             activeAccordion = this;
//         }
//     })
// }
