const router = document.querySelector(".router_ripped2");
const switchEl = document.querySelector(".switch_ripped2");

const T22 = document.getElementById("T22");
const T23 = document.getElementById("T23");

const clickR = document.getElementById("click_on_R");
const clickS = document.getElementById("click_on_S");

const infobit = document.querySelector(".infobit5");
const arrows = document.querySelectorAll(".Pfeil, .Pfeil2");
const clicks = document.querySelectorAll("#T20, #T21");




router.addEventListener("click", () =>
{
    router.classList.add("clicked");
    T22.classList.add("show");
    clickS.classList.add("show");
    infobit.classList.add("infobitMove");
    document.getElementById("click_on_S").classList.add("active");

});


switchEl.addEventListener("click", () =>
{

    switchEl.classList.add("clicked");
    T23.classList.add("show");

    arrows.forEach(el => el.style.display = "none");
    clicks.forEach(el => el.style.display = "none");
});

document.querySelectorAll(".info-btn").forEach(btn=>
{
    btn.addEventListener("click", e=>
    {
        const popup = btn.nextElementSibling;
        popup.classList.toggle("active");
    });
});
