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
    document.querySelector('.slides').scrollTo({ top: document.querySelector('.slides').scrollHeight, behavior: 'smooth' })
}