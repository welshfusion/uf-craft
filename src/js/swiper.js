// Import our CSS
import "@/scss/swiper.scss";

import Swiper from "swiper";
import { Navigation, Pagination, Autoplay, Thumbs } from "swiper/modules";

window.Swiper = Swiper;

let sliders = document.querySelectorAll(".swiper-slider");
sliders.forEach((slider) => {
  let settings = {};
  let modules = { modules: [] };

  settings["modules"] = [];
  if (slider.dataset.modulenav) {
    modules["modules"].push(Navigation);
  }

  if (slider.dataset.modulepagination) {
    modules["modules"].push(Pagination);
  }

  if (slider.dataset.moduleautoplay) {
    modules["modules"].push(Autoplay);
  }

  if (slider.dataset.settings) {
    settings = JSON.parse(slider.dataset.settings);
  }

  settings = merge(modules, settings);
  let swiper = new Swiper(slider, settings);
});

function merge(modules, settings) {
  for (var key in settings) {
    if (settings.hasOwnProperty(key)) modules[key] = settings[key];
  }
  return modules;
}

let thumbSlider = document.querySelector(".thumbslider");
if(thumbSlider) {
  var thumbslider = new Swiper(".thumbslider", {
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
      modules: [Navigation, Pagination, Autoplay, Thumbs],
  });

  var productslider = new Swiper(".productslider", {
      spaceBetween: 10,
      slidesPerView: 1,
      autoHeight: true,
      navigation: {
          nextEl: ".swiper-button-next-product",
          prevEl: ".swiper-button-prev-product",
      },
      thumbs: {
          swiper: thumbslider,
      },
      modules: [Navigation, Pagination, Autoplay, Thumbs],
  });
}
