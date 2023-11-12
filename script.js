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
    console.log('я отработал')
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
} else{
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


const closeButton = document.querySelector(".modal-close-button")
btn.addEventListener("click", function(){
    console.log(closeButton)
    console.log('эй')
    btn.classList.toggle("close-button--active")
})





