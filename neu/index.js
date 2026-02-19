document.addEventListener("keydown", function(event)
{
    if(event.key === "Enter")
    {
        const container = document.querySelector(".slides");

        container.scrollBy({left: window.innerWidth, behavior:"smooth"});
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".slides");

    window.addEventListener("wheel", (e)=>{
        if(Math.abs(e.deltaY) > Math.abs(e.deltaX)){
            e.preventDefault();
            slider.scrollBy({
                left: e.deltaY,
                behavior: "smooth"
            });
        }
    }, { passive:false });
});



function Skip_to_end()
{
    const slider = document.querySelector('.slides');

    slider.scrollTo({left: slider.scrollWidth, behavior: 'smooth'});
}

function Back()
{
    const slider = document.querySelector('.slides');
    slider.scrollTo({left: 0,behavior: 'smooth'});
}




function Next_Slide()
{
    const container = document.querySelector('.slides');
    const slides = document.querySelectorAll('.slide');

    const slideWidth = slides[0].offsetWidth;
    const currentIndex = Math.round(container.scrollLeft / slideWidth);

    if(currentIndex < slides.length - 1)
    {
        container.scrollTo({left: (currentIndex + 1) * slideWidth, behavior: "smooth"});
    }
}


function Last_Slide()
{
    const container = document.querySelector('.slides');
    const slides = document.querySelectorAll('.slide');

    const slideWidth = slides[0].offsetWidth;
    const currentIndex = Math.round(container.scrollLeft / slideWidth);

    if(currentIndex > 0)
    {
        container.scrollTo({left: (currentIndex - 1) * slideWidth, behavior: "smooth"});
    }
}