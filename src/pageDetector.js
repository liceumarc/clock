const clock = document.querySelector('a[href="#clock"]');
const alarm = document.querySelector('a[href="#alarm"]');
const stopwatch = document.querySelector('a[href="#stopwatch"]');
const timer = document.querySelector('a[href="#timer"]');

function detectPage(){
    const currentPage = window.location.hash.substring(1);
    const allHighlighted = document.querySelectorAll(".resaltado");
    allHighlighted.forEach(el => el.classList.remove("resaltado"));
    switch(currentPage) {
        case "clock":
            clock.classList.add("resaltado")
            break;
        case "alarm":
            alarm.classList.add("resaltado")

            break;
        case "stopwatch":
            stopwatch.classList.add("resaltado")

            break;
        case "timer":
            timer.classList.add("resaltado")

            break;
        default:
            console.log("Pagina no encontrada");
    }
    
}

detectPage();

window.addEventListener("hashchange", detectPage);