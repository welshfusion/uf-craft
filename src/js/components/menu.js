export function menu(wrapper = "main-menu") {
    const mainNavigationWrapper = document.querySelector("." + wrapper);
    //   const hamburger = mainNavigationWrapper.querySelector(".hamburger");
    //   hamburger.addEventListener("click", () => {
    //     if (hamburger.classList.contains("is-open")) {
    //       hamburger.classList.remove("is-open");
    //       mainNavigationWrapper
    //         .querySelector(".navigation-wrapper")
    //         .classList.remove("translate-x-0");
    //       mainNavigationWrapper
    //         .querySelector(".navigation-wrapper")
    //         .classList.add("translate-x-full");

    //       // Remove Blow chunk if client wants Sticky / Fixed menu
    //       document
    //         .querySelector("body")
    //         .classList.remove("max-h-screen", "overflow-hidden");
    //     } else {
    //       hamburger.classList.add("is-open");
    //       mainNavigationWrapper
    //         .querySelector(".navigation-wrapper")
    //         .classList.add("translate-x-0");
    //       mainNavigationWrapper
    //         .querySelector(".navigation-wrapper")
    //         .classList.remove("translate-x-full");

    //       // Remove Blow chunk if client wants Sticky / Fixed menu
    //       // Scroll to top in case user scroll down just a bit and then click on menu toggle.
    //       window.scrollTo({ top: 0, behavior: "smooth" });
    //       document
    //         .querySelector("body")
    //         .classList.add("max-h-screen", "overflow-hidden");
    //     }
    //   });

    if (mainNavigationWrapper) {
        let parentNavigationItemsForMobile = mainNavigationWrapper.querySelectorAll(
            ".js-toggle-mobile-inner-nav"
        );

        if (parentNavigationItemsForMobile) {
            parentNavigationItemsForMobile.forEach(function (item) {
                item.addEventListener("click", () => {
                    if (
                        item.parentElement.nextElementSibling.classList.contains(
                            "is-open"
                        )
                    ) {
                        item.parentElement.nextElementSibling.classList.remove(
                            "is-open"
                        );
                        item.parentElement.nextElementSibling.removeAttribute("style");
                        item.querySelector("div").classList.remove("hidden");
                    } else {
                        item.parentElement.nextElementSibling.classList.add("is-open");
                        item.parentElement.nextElementSibling.style.height =
                            item.parentElement.nextElementSibling.scrollHeight + "px";
                        item.querySelector("div").classList.add("hidden");
                    }
                });
            });
        }
    }
}
