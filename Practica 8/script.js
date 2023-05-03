const $grafica = document.querySelector("#grafica");
const etiquetas = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
const datosVentas2023 = {
    label: "Ventas por mes",
    data: [5000, 1500, 8000, 10000, 8150, 7000, 9000, 11000, 13000, 12000, 11500, 15000],
    backgroundColor: 'rgba(54, 162, 235, 0.2)',
    borderColor: 'rgba(54, 162, 235, 1)',
    borderWidth: 1,
};
new Chart($grafica, {
    type: 'line',
    data: {
        labels: etiquetas,
        datasets: [
            datosVentas2023,
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
        },
    }
});