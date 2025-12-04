// Cronómetro simple con alarma al llegar a 10 segundos
let segundos = 0;
let intervalo = null;
let alarmaDisparada = false;

function crearEstilosAlarma() {
    if (document.getElementById('estilos-crono-alarma')) return;
    const style = document.createElement('style');
    style.id = 'estilos-crono-alarma';
    style.textContent = `
        @keyframes vibrar {
            0% { transform: translateX(0); }
            20% { transform: translateX(-6px); }
            40% { transform: translateX(6px); }
            60% { transform: translateX(-4px); }
            80% { transform: translateX(4px); }
            100% { transform: translateX(0); }
        }
        .vibrar {
            animation: vibrar 0.6s linear 0s 5; /* 5 repeticiones */
        }
        #mensajeAlarma {
            margin-top: 10px;
            color: yellow;
            font-weight: bold;
        }
    `;
    document.head.appendChild(style);
}

function actualizarCronometro() {
    const hrs = String(Math.floor(segundos / 3600)).padStart(2, '0');
    const mins = String(Math.floor((segundos % 3600) / 60)).padStart(2, '0');
    const secs = String(segundos % 60).padStart(2, '0');

    document.getElementById('cronometro').textContent = `${hrs}:${mins}:${secs}`;

    // Disparar alarma cuando llega a 10 segundos (solo una vez hasta reiniciar)
    if (segundos === 10 && !alarmaDisparada) {
        alarmaDisparada = true;
        triggerAlarma();
    }
}

function triggerAlarma() {
    crearEstilosAlarma();
    const el = document.getElementById('cronometro');
    // añadir clase de vibracion
    el.classList.add('vibrar');

    // mostrar mensaje
    let mensaje = document.getElementById('mensajeAlarma');
    if (!mensaje) {
        mensaje = document.createElement('div');
        mensaje.id = 'mensajeAlarma';
        el.parentNode.insertBefore(mensaje, el.nextSibling);
    }
    mensaje.textContent = '¡Llegó a 10 segundos! ⏰';

    // reproducir un breve sonido (beep)
    try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.type = 'sine';
        o.frequency.value = 880; // A5
        o.connect(g);
        g.connect(ctx.destination);
        g.gain.value = 0.05;
        o.start();
        setTimeout(() => { o.stop(); ctx.close(); }, 400);
    } catch (e) {
        // no se pudo reproducir audio
        console.warn('Audio no disponible', e);
    }

    // quitar animacion y mensaje luego de 4 segundos
    setTimeout(() => {
        el.classList.remove('vibrar');
        if (mensaje) mensaje.textContent = '';
    }, 4000);
}

document.getElementById('iniciar').addEventListener('click', () => {
    if (!intervalo) {
        intervalo = setInterval(() => {
            segundos++;
            actualizarCronometro();
        }, 1000);
    }
});

document.getElementById('pausar').addEventListener('click', () => {
    clearInterval(intervalo);
    intervalo = null;
});

document.getElementById('reiniciar').addEventListener('click', () => {
    segundos = 0;
    alarmaDisparada = false;
    actualizarCronometro();
    clearInterval(intervalo);
    intervalo = null;
});

// Inicializar muestra
actualizarCronometro();
