/* =========================================
   MENU DE NAVEGAÇÃO MOBILE
========================================= */

const menuToggle = document.querySelector(".menu-toggle");

const navigation = document.querySelector(".navigation");

if (menuToggle && navigation) {

    menuToggle.addEventListener("click", () => {

        const isActive = navigation.classList.toggle("active");

        menuToggle.setAttribute("aria-expanded", String(isActive));

        menuToggle.setAttribute(
            "aria-label",
            isActive ? "Fechar menu" : "Abrir menu"
        );

    });


    /* =========================================
       FECHAR MENU AO CLICAR EM UM LINK
    ========================================= */

    const navigationLinks = navigation.querySelectorAll("a");

    navigationLinks.forEach((link) => {

        link.addEventListener("click", () => {

            navigation.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.setAttribute("aria-label", "Abrir menu");

        });

    });


    /* =========================================
       FECHAR MENU COM A TECLA ESC
    ========================================= */

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {

            navigation.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.setAttribute("aria-label", "Abrir menu");

        }

    });

}


/* =========================================
   ANO AUTOMÁTICO DO RODAPÉ
========================================= */

const currentYear = document.querySelector("#current-year");

if (currentYear) {

    currentYear.textContent = new Date().getFullYear();

}