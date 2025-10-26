
const mostrarFecha = () => {
    const date = new Date();
    const opciones = { weekday: 'short', month: 'short', day: 'numeric' };
    const fechaFormateada = new Intl.DateTimeFormat('es-ES', opciones).format(date);
    const fechaMayus = fechaFormateada.charAt(0).toUpperCase() + fechaFormateada.slice(1);
    document.getElementById('display-date').textContent = fechaMayus;
}

mostrarFecha();