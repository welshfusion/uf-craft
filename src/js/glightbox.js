// Import our CSS
import "@/scss/glightbox.scss";

import GLightbox from 'glightbox';

var lightboxInlineIframe = GLightbox({
    selector: '.glightbox'
});

const experienceFormLightbox = GLightbox({
    closeButton: true,
    selector: null,
    skin: "experience-form-wrapper glightbox-clean",
    width: "100%",
});

let experienceForms = document.querySelectorAll(".glightbox-popup-form");
experienceForms.forEach(element => {
    let apiForm = element.getAttribute("data-apiForm");
    element.addEventListener('click', function(e) {
        e.preventDefault();
        let paragraphText = element.querySelector(".p-txt");
        let paragraphLoader = element.querySelector(".p-loader");

        if (paragraphText) {
            paragraphText.style.display = "none";
        }

        if (paragraphLoader) {
            paragraphLoader.style.display = "inline-block";
        }
        element.setAttribute("disabled", "");

        let url = "/apis/" + apiForm + "?event=" + element.getAttribute("data-event") + '&form=' + element.getAttribute("data-form");
        if (element.getAttribute('data-form') == 'gallery-form') {
            url = url + '&selected=' + element.getAttribute("data-selected") + '&field=' + element.getAttribute("data-watch");
        }

        fetch(url, {
            method: "GET",
            cache: "no-cache",
            redirect: "follow",
            credentials: "same-origin",
            headers: {
                "X-Requested-With": "XMLHttpRequest"
            },
        })
        .then((response) => response.text())
        .then((data) => {
            // console.log(data);
            let replaceContent = '';
            if(typeof(element.dataset.heading) !== "undefined" && element.dataset.heading.trim()) {
                replaceContent += `<h3 class="text-2xl md:text-3.5xl font-bold mb-3">${element.dataset.heading}</h3>`;
            }

            if(typeof(element.dataset.subheading) !== "undefined" && element.dataset.subheading.trim()) {
                replaceContent += `<h4 class="text-xl font-bold mb-3">${element.dataset.subheading}</h4>`;
            }

            if(typeof(element.dataset.text) !== "undefined" && element.dataset.text.trim()) {
                replaceContent += `<div class="mb-3">${element.dataset.text}</div>`;
            }

            experienceFormLightbox.setElements([{
                content: replaceContent + data
            }]);
            experienceFormLightbox.open();

            setTimeout(function() {
                if (element.getAttribute('data-form') != 'gallery-form') {
                    window.Formie.initForms();
                }

                if (paragraphText) {
                    paragraphText.style.display = "inline-block";
                }

                if (paragraphLoader) {
                    paragraphLoader.style.display = "none";
                }
            }, 50);
        });
    });
});

// lightboxInlineIframe.reload();
