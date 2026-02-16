document.addEventListener("keydown", function(event)
{
    if(event.key === "Enter")
    {
        const container = document.querySelector(".slides");

        container.scrollBy({
            top: container.clientHeight,
            behavior: "smooth"
        });
    }
});