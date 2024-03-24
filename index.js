

const accordions = document.querySelectorAll(".faq-accordion");

accordions.forEach(accordion => {
  accordion.addEventListener("click", () => {
    accordion.classList.toggle("active");
    const panel = accordion.nextElementSibling;
    panel.style.maxHeight = panel.style.maxHeight ? null : `${panel.scrollHeight}px`;
  });
});

/* Burger Menu */
const burgerMenu = document.getElementById('burger-menu');
const overlay = document.getElementById('menu');

/* burgerMenu.addEventListener('click', () => {
    this.classList.toggle('overlay'); */

burgerMenu.addEventListener('click',function(){
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});


// open modal by id
function openModal(id) {
  document.getElementById(id).classList.add('open');
  document.body.classList.add('jw-modal-open');
}

// close currently open modal
function closeModal() {
  document.querySelector('.jw-modal.open').classList.remove('open');
  document.body.classList.remove('jw-modal-open');
}

window.addEventListener('load', function() {
  // close modals on background click
  document.addEventListener('click', event => {
      if (event.target.classList.contains('jw-modal')) {
          closeModal();
      }
  });
});

function viewMore() {
    const photosElement = document.querySelector(".photo-gallery");
    if (photosElement) {
      photosElement.classList.toggle("expanded");
      document.getElementById("view-more").textContent = photosElement.classList.contains("expanded") ? "View Less" : "View More";
    } else {
      console.error("Element with class 'photos' not found");
    }
  }

  
  