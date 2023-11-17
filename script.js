let slider = null;
function sliderInit() {
  if (!slider) {
    slider = new Swiper('.swiper1', {
      direction: 'horizontal',
      slidesPerView: "auto",
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

window.addEventListener("load", function() {
if (window.matchMedia("(max-width: 768px)").matches) {
    sliderInit();
    secondSliderInit();
}
  if (window.matchMedia("(max-width: 1399px) and (min-width: 768px)").matches) {
    secondSliderInit();
  }
});

window.addEventListener("resize", function() {
    if (window.matchMedia("(min-width: 1400px)").matches) {
      slider2 && secondSliderDestroy();
      // secondSliderDestroy()
    }
    if (window.matchMedia("(min-width: 768px) and (max-width: 1399px)").matches) {
     slider && sliderDestroy();
     !slider2 && secondSliderInit();
  }
  if (window.matchMedia("(max-width: 768px)").matches) {
    !slider && sliderInit();
    !slider2 && secondSliderInit();
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
const modalScrollContent = document.querySelector(".modal-window")
const burgerButton = document.querySelector(".menu-button")
const burgerWrapper = document.querySelector(".sidebar")
const burgerMenuWrapper = document.querySelector(".sidebar__wrapper")
const burgerCloseButton = document.querySelector(".sidebar__button")
const modalOverlay = document.querySelector(".overlay")
const links = document.querySelectorAll(".sidebar__menu--element")
const bodyScroll = document.body;
const sidebarWrapper = document.querySelector(".sidebar__wrapper")
const picture = document.querySelector(".picture-menu")
const orderButtonList = document.querySelectorAll(".order__button")
const contactSection = document.querySelector(".millenium-company")


const isOpenSidebars = () => {
  const isBurgerOpen = burgerWrapper.classList.contains("sidebar--open");
  const isModalOpen = !modalWrapper.classList.contains("modal--closed")
  return [isBurgerOpen, isModalOpen]
}

const toggleOverflowSidebars = () => {
  let sidebarsOpen = isOpenSidebars()
 const someIsOpen = sidebarsOpen.some((item) => item)
 return someIsOpen ?  bodyScroll.style.overflow = "hidden" : bodyScroll.style.overflow = "auto";
}


closeButton.addEventListener("click", function(){
    modalWrapper.classList.add("modal--closed");
    toggleOverflowSidebars()
})

callButton.addEventListener("click", function(){
  modalWrapper.classList.remove("modal--closed")
  toggleOverflowSidebars()
  modalScrollContent.style.overflow = "auto";

})

modalWrapper.addEventListener("click", function(e){
  if(e.target === modalOverlay){
    modalWrapper.classList.toggle("modal--closed");
    toggleOverflowSidebars()
  }

})

const toggleButtonStyle = () => {
  const isBurgerOpen = burgerWrapper.classList.contains("sidebar--open");
if(isBurgerOpen){
  picture.style.background = "#43CD93";
  picture.style.width = "41px";
  burgerMenuWrapper.style.overflow = "auto"
} else{
  picture.style.background = "#6B5AF9";
  picture.style.width = "15px";
}

}


burgerButton.addEventListener("click", function(){
    burgerWrapper.classList.toggle("sidebar--open");
    toggleButtonStyle();
    toggleOverflowSidebars()
  
  })
  
  burgerCloseButton.addEventListener("click", function(e){
   
    if(e.target === burgerCloseButton){
      burgerWrapper.classList.remove("sidebar--open");
      toggleButtonStyle()
      toggleOverflowSidebars()
    }
  
  })
  
  burgerWrapper.addEventListener("click", function(e){
  
    if(e.target === burgerWrapper){
      burgerWrapper.classList.remove("sidebar--open");
      toggleButtonStyle()
      toggleOverflowSidebars()
   
    }
  })
  
  
  document.body.addEventListener('click', e => {
    if (e.target.classList.contains('sidebar__menu--element')) {
      burgerWrapper.classList.remove("sidebar--open");
      toggleButtonStyle()
    }
  })
  
  document.body.addEventListener('click', e => {
    if (e.target.classList.contains('order__button')) {
      contactSection.scrollIntoView()
    }
  })
  
  const setModalScroll = () => {
    if (window.innerHeight > 514) {
      modalScrollContent.style.position = "absolute";
       } else{
         modalScrollContent.style.position = "relative"
       }
  }
  
  window.addEventListener("resize", function() {
  setModalScroll();
  });
  
  window.addEventListener("DOMContentLoaded", function() {
  setModalScroll();
  });