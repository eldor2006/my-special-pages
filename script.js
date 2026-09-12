let currentScreen = 1;

const totalScreens = 10;

const counter = document.getElementById("counter");
const progressLine = document.getElementById("progressLine");


function updateProgress() {

    counter.textContent =
        String(currentScreen).padStart(2, "0")
        + " / "
        + String(totalScreens).padStart(2, "0");

    const percent =
        (currentScreen / totalScreens) * 100;

    progressLine.style.width = percent + "%";
}


function nextScreen() {

    if (currentScreen >= totalScreens) {
        return;
    }

    const current =
        document.getElementById(
            `screen${currentScreen}`
        );

    const next =
        document.getElementById(
            `screen${currentScreen + 1}`
        );


    current.classList.remove("active");

    setTimeout(() => {

        next.classList.add("active");

        currentScreen++;

        updateProgress();

    }, 150);

}


function restart() {

    const current =
        document.getElementById(
            `screen${currentScreen}`
        );

    current.classList.remove("active");

    currentScreen = 1;

    setTimeout(() => {

        document
            .getElementById("screen1")
            .classList.add("active");

        updateProgress();

        window.scrollTo(0, 0);

    }, 150);

}


/* =========================
   CARD REVEAL
========================= */

function revealCard(card) {

    const message =
        document.getElementById("cardMessage");

    card.classList.toggle("selected");

    if (card.classList.contains("selected")) {

        card.style.borderColor =
            "rgba(255,255,255,0.35)";

        card.style.color = "#eee";

    } else {

        card.style.borderColor =
            "rgba(255,255,255,0.1)";

        card.style.color = "#aaa";

    }


    /*
       Oxirgi karta bosilganda
       maxsus yozuv chiqadi.
    */

    if (card.classList.contains("special-card")) {

        message.classList.add("show");

        setTimeout(() => {

            message.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }, 100);

    }

}


/* =========================
   KEYBOARD
========================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "ArrowRight") {
            nextScreen();
        }

        if (
            event.key === "ArrowLeft" &&
            currentScreen > 1
        ) {

            goBack();

        }

    }
);


function goBack() {

    if (currentScreen <= 1) {
        return;
    }

    const current =
        document.getElementById(
            `screen${currentScreen}`
        );

    const previous =
        document.getElementById(
            `screen${currentScreen - 1}`
        );


    current.classList.remove("active");

    setTimeout(() => {

        previous.classList.add("active");

        currentScreen--;

        updateProgress();

    }, 150);

}


/* Boshlang‘ich holat */

updateProgress();