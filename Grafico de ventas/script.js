const ctx = document.getElementById('graficoVentas');
const form = document.getElementById('formVentas');

let ventas = JSON.parse(localStorage.getItem('ventas')) || [];

const chart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ventas.map(v => v.mes),
    datasets: [{
      label: 'Monto de Ventas ($)',
      data: ventas.map(v => v.monto),
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(75, 192, 192)',
        'rgb(255, 205, 86)',
        'rgb(201, 203, 207)',
        'rgb(54, 162, 235)'
      ],
      hoverOffset: 4,
    }]
  },
});

form.addEventListener('submit', e => {
  e.preventDefault();
  const mes = document.getElementById('mes').value.trim();
  const monto = parseFloat(document.getElementById('monto').value);

  if (mes && !isNaN(monto)) {
    ventas.push({ mes, monto });
    localStorage.setItem('ventas', JSON.stringify(ventas));
    chart.data.labels = ventas.map(v => v.mes);
    chart.data.datasets[0].data = ventas.map(v => v.monto);
    chart.update();
    form.reset();
  }
});

// Reiniciar datos: borra la clave 'ventas' y actualiza el gráfico
function reiniciarDatos() {
  if (!confirm('¿Estás seguro de que quieres reiniciar todos los datos de ventas? Esta acción no se puede deshacer.')) return;
  localStorage.removeItem('ventas'); // usa localStorage.clear() para borrar TODO el almacenamiento local
  ventas = [];
  chart.data.labels = [];
  chart.data.datasets[0].data = [];
  chart.update();
}

// Conectar botón (si existe en la página)
const btnReiniciar = document.getElementById('btn-reiniciar');
if (btnReiniciar) btnReiniciar.addEventListener('click', reiniciarDatos);