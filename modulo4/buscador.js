document.getElementById("buscar").addEventListener("click", () => {
    const user = document.getElementById("usuario").value.trim();
    if (!user) return alert("Ingrese un usuario");

    document.getElementById("resultado").innerHTML = "🔄 Buscando...";

    fetch(`https://api.github.com/users/${user}`)
        .then((res) => {
            if (!res.ok) throw new Error("Usuario no encontrado");
            return res.json();
        })
        .then((data) => {
            document.getElementById("resultado").innerHTML = `
        <img src="${data.avatar_url}" alt="Avatar">
        <h2>${data.login}</h2>
        <p>👥 Seguidores: ${data.followers}</p>
        <p>📦 Repos públicos: ${data.public_repos}</p>
        <a href="${data.html_url}" target="_blank">Ver perfil</a>
        <h3>📂 Últimos repositorios:</h3>
        <ul id="repos"></ul>
        `;
            return fetch(`https://api.github.com/users/${user}/repos`);
        })
        .then((res) => res.json())
        .then((repos) => {
            const lista = document.getElementById("repos");

            repos.slice(0, 5).forEach(repo => {
                const li = document.createElement("li");
                li.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.name}</a>`;
                lista.appendChild(li);
            });
        })
        .catch((error) => {
            document.getElementById("resultado").innerHTML = `❌ ${error.message}`;
        })
        .finally(() => console.log("🟦 Búsqueda finalizada"));
});
