const listaNotas = document.getElementById("listaNotas");
let notas = JSON.parse(localStorage.getItem("notas")) || [];

function mostrarNotas() {
    listaNotas.innerHTML = "";
    notas.forEach((notaObj, i) => {
        const li = document.createElement("li");
        li.textContent = `${notaObj.texto} (${notaObj.fecha})`;
        listaNotas.appendChild(li);
    });
}

document.getElementById("guardar").addEventListener("click", () => {
    const texto = document.getElementById("nota").value.trim();
    if (texto) {
        const fecha = new Date().toLocaleString(); // fecha y hora local
        const nuevaNota = { texto, fecha };
        notas.push(nuevaNota);
        localStorage.setItem("notas", JSON.stringify(notas));
        mostrarNotas();
        document.getElementById("nota").value = "";
    }
});

document.getElementById("borrar").addEventListener("click", () => {
    localStorage.removeItem("notas");
    notas = [];
    mostrarNotas();
});

// Borrar elemento individual
let modoBorrar = false;

document.getElementById("borrar-individual").addEventListener("click", () => {
    modoBorrar = !modoBorrar;

    const items = listaNotas.querySelectorAll("li");
    items.forEach((li, i) => {
        li.style.color = modoBorrar ? "red" : "";
        li.addEventListener(
            "click",
            () => {
                notas.splice(i, 1);
                localStorage.setItem("notas", JSON.stringify(notas));
                mostrarNotas();
                modoBorrar = false;
            },
            { once: true }
        );
    });
});

mostrarNotas();
