const links = document.querySelectorAll('nav a');
const icons = {
    clock: ['./src/assets/icons/clockNotSelected.svg', './src/assets/icons/clockSelected.svg'],
    alarm: ['./src/assets/icons/alarmNotSelected.svg', './src/assets/icons/alarmSelected.svg'],
    stopwatch: ['./src/assets/icons/stopwatchNotSelected.svg', './src/assets/icons/stopwatchSelected.svg'],
    timer: ['./src/assets/icons/timerNotSelected.svg', './src/assets/icons/timerSelected.svg']
};

links.forEach(link =>{
    link.addEventListener('click', () => {
        const current = link.getAttribute('href').replace('#', '');
        links.forEach(l => {
            const name = l.getAttribute('href').replace('#', '');
            const img = l.querySelector('img');
            img.src = icons[name][0];
        })
        link.querySelector('img').src = icons[current][1];
    })
})