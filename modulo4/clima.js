// Reemplaza 'TU_API_KEY_AQUI' con tu API key de openweathermap.org
const apiKey = '486e95dde38060056fafe3ae30a74167';

document.getElementById('buscar').addEventListener('click', async () => {
    const ciudad = document.getElementById('ciudad').value.trim();
    if (!ciudad) return alert('Ingrese una ciudad');

    try {
        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(ciudad)}&units=metric&lang=es&appid=${apiKey}`
        );
        const data = await res.json();

        if (data.cod != 200) {
            document.getElementById('resultado').innerHTML = '❌ Ciudad no encontrada';
            return;
        }

        const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

        document.getElementById('resultado').innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>🌡️ Temp: ${data.main.temp}°C</p>
        <p>🌬️ Viento: ${data.wind.speed} km/h</p>
        <p>☁️ Clima: ${data.weather[0].description} <img src="${iconUrl}" alt="${data.weather[0].description}"></p>
    `;
    } catch (error) {
        console.error(error);
        document.getElementById('resultado').innerHTML = '⚠️ Error al conectar con la API';
    }
});

// Permitir buscar con Enter
document.getElementById('ciudad').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') document.getElementById('buscar').click();
});
