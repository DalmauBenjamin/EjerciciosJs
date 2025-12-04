const listaNotas = document.getElementById('listaNotas');
let notas = JSON.parse(localStorage.getItem('notas')) || [];

function mostrarNotas() {
    listaNotas.innerHTML = '';
    notas.forEach((notaObj, i) => {
        const li = document.createElement('li');

        const textoSpan = document.createElement('span');
        textoSpan.textContent = `${notaObj.texto} (${notaObj.fecha}) `;

        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.addEventListener('click', () => {
            notas.splice(i, 1);
            localStorage.setItem('notas', JSON.stringify(notas));
            mostrarNotas();
        });

        li.appendChild(textoSpan);
        li.appendChild(btnEliminar);
        listaNotas.appendChild(li);
    });
}

document.getElementById('guardar').addEventListener('click', () => {
    const texto = document.getElementById('nota').value.trim();
    if (texto) {
        const fecha = new Date().toLocaleString();
        const nuevaNota = { texto, fecha };
        notas.push(nuevaNota);
        localStorage.setItem('notas', JSON.stringify(notas));
        mostrarNotas();
        document.getElementById('nota').value = '';
    }
});

document.getElementById('borrar').addEventListener('click', () => {
    localStorage.removeItem('notas');
    notas = [];
    mostrarNotas();
});

// permitir guardar con Enter
document.getElementById('nota').addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        document.getElementById('guardar').click();
    }
});

mostrarNotas();
