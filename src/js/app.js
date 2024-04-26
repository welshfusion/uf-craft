// Import our CSS
import "@/scss/app.scss";

/**
 * Alpine JS
 * Best to put it last so that all other potential JS is available
 * when components start getting initialized.
 */
import AOS from "aos";
import Alpine from "alpinejs";
import focus from "@alpinejs/focus";

// Internal
import { menu } from "./components/menu.js";

window.addEventListener("load", (event) => {
    AOS.init({
        once: "true",
    });
});

// JS callback functions for:
// 1. Hamburger Menu toggle.
// 2. Show / Hide Mobile Menu (on hamburger button click)
menu();

window.Alpine = Alpine;
Alpine.plugin(focus);
window.addEventListener("load", function (event) {
    Alpine.start();
});

window.getCookie = function (cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == " ") {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
};
