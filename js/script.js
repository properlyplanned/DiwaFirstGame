 /* =========================================================
   DIWAFIRST PROMOTIONAL SLIDER
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const promotions = [
        {
            image: "images/Diwa Lucky.png",
            name: "DIWA LUCKY"
        },
        {
            image: "images/Diwa Top.png",
            name: "DIWA TOP"
        },
        {
            image: "images/Diwa Play.png",
            name: "DIWA PLAY"
        },
        {
            image: "images/Diwa King.png",
            name: "DIWA KING"
        },
        {
            image: "images/Diwa X.png",
            name: "DIWA X"
        },
        {
            image: "images/Diwa Game.png",
            name: "DIWA GAME"
        },
        {
            image: "images/Diwa Bet.png",
            name: "DIWA BET"
        },
        {
            image: "images/Diwa Win.png",
            name: "DIWA WIN"
        },
        {
            image: "images/Diwa Ace.png",
            name: "DIWA ACE"
        }
    ];


    /* =====================================================
       FIND PROMOTIONAL ELEMENTS
       ===================================================== */

    const promoLogo =
        document.querySelector(".promo-logo");

    const promoSmallText =
        document.querySelector(".promo-text span");

    const promoName =
        document.querySelector(".promo-text strong");

    const promoDots =
        document.querySelectorAll(".promo-dots span");

    const leftArrow =
        document.querySelector(".promo-arrow:first-of-type");

    const rightArrow =
        document.querySelector(".promo-arrow:last-of-type");


    /* =====================================================
       STOP IF PROMOTIONAL HTML IS MISSING
       ===================================================== */

    if (!promoLogo || !promoName) {
        console.warn(
            "Promotional slider elements were not found."
        );

        return;
    }


    let currentSlide = 0;
    let sliderTimer;


    /* =====================================================
       CHANGE SLIDE
       ===================================================== */

    function showSlide(index) {

        currentSlide =
            (index + promotions.length) %
            promotions.length;


        const promo =
            promotions[currentSlide];


        /* =================================================
           CHANGE PROMOTIONAL IMAGE
           ================================================= */

        promoLogo.innerHTML = `
            <img
                src="${promo.image}"
                alt="${promo.name}"
            >
        `;


        /* =================================================
           CHANGE WEBSITE NAME
           ================================================= */

        if (promoSmallText) {

            promoSmallText.textContent =
                "DIWAFIRST.COM";

        }


        /* =================================================
           CHANGE GAME NAME
           ================================================= */

        promoName.textContent =
            promo.name;


        /* =================================================
           UPDATE DOTS
           ================================================= */

        promoDots.forEach(function (dot, i) {

            dot.classList.toggle(
                "active",
                i === currentSlide
            );

        });


        /* =================================================
           IMAGE ANIMATION
           ================================================= */

        promoLogo.animate(
            [
                {
                    transform: "scale(.85)",
                    opacity: ".4"
                },
                {
                    transform: "scale(1)",
                    opacity: "1"
                }
            ],
            {
                duration: 350,
                easing: "ease-out"
            }
        );


        /* =================================================
           NAME ANIMATION
           ================================================= */

        promoName.animate(
            [
                {
                    opacity: ".3",
                    transform: "translateY(5px)"
                },
                {
                    opacity: "1",
                    transform: "translateY(0)"
                }
            ],
            {
                duration: 350,
                easing: "ease-out"
            }
        );
    }


    /* =====================================================
       AUTOMATIC SLIDER
       ===================================================== */

    function startSlider() {

        clearInterval(sliderTimer);

        sliderTimer =
            setInterval(function () {

                showSlide(
                    currentSlide + 1
                );

            }, 3500);
    }


    /* =====================================================
       LEFT ARROW
       ===================================================== */

    if (leftArrow) {

        leftArrow.addEventListener(
            "click",
            function () {

                showSlide(
                    currentSlide - 1
                );

                startSlider();

            }
        );
    }


    /* =====================================================
       RIGHT ARROW
       ===================================================== */

    if (rightArrow) {

        rightArrow.addEventListener(
            "click",
            function () {

                showSlide(
                    currentSlide + 1
                );

                startSlider();

            }
        );
    }


    /* =====================================================
       CLICK DOTS
       ===================================================== */

    promoDots.forEach(function (dot, index) {

        dot.addEventListener(
            "click",
            function () {

                showSlide(index);

                startSlider();

            }
        );

    });


    /* =====================================================
       START SLIDER
       ===================================================== */

    showSlide(0);

    startSlider();

});
// =========================================================
// APP SEARCH + GAME PAGE CONNECTIONS
// =========================================================

const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const appCards = document.querySelectorAll(".app-card");

const gamePages = {
    "diwa ace": "diwa-ace.html",
    "diwa lucky": "diwa-lucky.html",
    "diwa play": "diwa-play.html",
    "diwa king": "diwa-king.html",
    "diwa x": "diwa-x.html",
    "diwa game": "diwa-game.html",
    "diwa bet": "diwa-bet.html",
    "diwa win": "diwa-win.html",
    "diwa top": "diwa-top.html",
    "jeet spin": "jeet-spin.html",
    "diwa rummy": "diwa-rummy.html",
    "rummy zip": "rummy-zip.html",
    "diwa slots": "diwa-slots.html"
};


// SEARCH
searchForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const searchText = searchInput.value
        .trim()
        .toLowerCase();

    if (gamePages[searchText]) {

        window.location.href = gamePages[searchText];

        return;
    }

    appCards.forEach(function (card) {

        const appName = (
            card.dataset.name || ""
        ).toLowerCase();

        const matches =
            searchText === "" ||
            appName.includes(searchText);

        card.style.display = matches
            ? ""
            : "none";

    });

});

// GAME CARD CONNECTIONS
appCards.forEach(function (card) {

    card.style.cursor = "pointer";

    card.addEventListener("click", function () {

        const appName = (
            card.dataset.name || ""
        ).toLowerCase();

        const page = gamePages[appName];

        if (page) {
            window.location.href = page;
        }

    });

});