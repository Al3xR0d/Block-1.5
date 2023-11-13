let slider = null;
function sliderInit() {
  if (!slider) {
    slider = new Swiper('.swiper1', {
      direction: 'horizontal',
      slidesPerView: 1,
      pagination: {
          el: '.swiper-pagination',
          clickable: true,
      },
     
    });
}

}

function sliderDestroy() {
    
  if (slider) {
    slider.destroy();
    slider = null;
  }
}

let slider2 = null;
function secondSliderInit() {
  if (!slider2) {
    slider2 = new Swiper('.swiper-2', {
      direction: 'horizontal',
      slidesPerView: 1,
      pagination: {
          el: '.swiper-pagination-2',
          clickable: true,
      },
    });
  }
}

function secondSliderDestroy() {
  if (slider2) {
    slider2.destroy();
    slider2 = null;
  }
}

window.addEventListener("resize", function() {
if (window.matchMedia("(max-width: 767px)").matches) {
  sliderInit();
  secondSliderInit();
} else {
  sliderDestroy();
}
});

window.addEventListener("resize", function() {
    if (window.matchMedia("(min-width: 1160px)").matches) {
        secondSliderDestroy();
    }
    });


const btn = document.querySelector(".arrow");
const container = document.querySelector(".swiper");

btn.addEventListener("click", function() {
    btn.classList.toggle("active");
    container.classList.toggle("swiper--active");
});

const callButton = document.querySelector(".info-bar__button")
const closeButton = document.querySelector(".modal-close-button")
const modalWrapper = document.querySelector(".modal")
const burgerButton = document.querySelector(".menu-button")
const burgerWrapper = document.querySelector(".sidebar")
const burgerCloseButton = document.querySelector(".sidebar__button")
const modalOverlay = document.querySelector(".overlay")
const links = document.querySelectorAll("sidebar__menu--element")
const bodyScroll = document.body;

const picture = document.querySelector(".picture-menu")

closeButton.addEventListener("click", function() {
    modalWrapper.classList.add("modal--closed");
    bodyScroll.style.overflow = "auto";
})

callButton.addEventListener("click", function() {
  
  modalWrapper.classList.remove("modal--closed");
  bodyScroll.style.overflow = "hidden";
})

modalWrapper.addEventListener("click", function(e) {
  if(e.target === modalOverlay){
    modalWrapper.classList.toggle("modal--closed");
    bodyScroll.style.overflow = "auto";
  }

})

const toggleButtonStyle = () => {
  const isOpen = burgerWrapper.classList.contains("sidebar--open");
if (isOpen) {
  picture.style.background = "#43CD93";
  picture.style.width = "41px";
} else {
  picture.style.background = "#6B5AF9";
  picture.style.width = "15px";
}
}

burgerButton.addEventListener("click", function() {
  burgerWrapper.classList.toggle("sidebar--open");
  bodyScroll.style.overflow = "hidden";
  toggleButtonStyle();
  burgerWrapper.classList.contains("sidebar--open") ? bodyScroll.style.overflow = "hidden" : bodyScroll.style.overflow = "auto";
})

burgerCloseButton.addEventListener("click", function(e) {
  if (e.target === burgerCloseButton){
    burgerWrapper.classList.remove("sidebar--open");
    bodyScroll.style.overflow = "auto";
    toggleButtonStyle();
  }

})

burgerWrapper.addEventListener("click", function(e) {
  if (e.target === burgerWrapper){
    burgerWrapper.classList.remove("sidebar--open");
    bodyScroll.style.overflow = "auto";
    toggleButtonStyle();
  }
})


document.body.addEventListener('click', e => {
  if (e.target.classList.contains('sidebar__menu--element')) {
    burgerWrapper.classList.remove("sidebar--open");
    bodyScroll.style.overflow = "auto";
    toggleButtonStyle();
  }
})



