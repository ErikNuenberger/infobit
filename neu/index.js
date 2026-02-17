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

function Skip_to_end()
{
    document.querySelector('.slides').scrollTo({ top: document.querySelector('.slides').scrollHeight, behavior: 'smooth' })
}