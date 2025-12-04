# EjerciciosJs

Repositorio con ejercicios y mini-aplicaciones en JavaScript organizadas por módulos.

Descripción
- Colección de ejercicios pensada para clases prácticas de JavaScript (variables, estructuras de control, DOM, eventos, arreglos/objetos) y pequeñas aplicaciones (cronómetro, app del clima, notas, etc.).

Estructura destacada
- `index.html` - Página principal que recopila y enlaza los ejercicios y las aplicaciones.
- `script.js` - Archivo principal con los ejercicios y ejemplos (varias clases).
- `styles.css` - Estilos globales usados por `index.html`.
- `modulo4/` - Mini aplicaciones (ej.: `clima.html` + `clima.js`, `crono.html` + `crono.js`, `notas.html` + `notas.js`).
- `modulo5/` - (opcional) carpeta para un mini-proyecto gestor de tareas modular (si está presente contiene `storage.js`, `tasks.js`, `ui.js`, `main.js`, `styles.css`).

Cómo usar
1. Clonar el repositorio:

```powershell
git clone https://github.com/DalmauBenjamin/EjerciciosJs.git
cd Ejercicios
```

2. Abrir la página principal en tu navegador:

 - Abrir `index.html` (doble clic o `File -> Open` en el navegador).
 - O ejecutar un servidor local (recomendado si pruebas fetch/ APIs o módulos):

```powershell
# con Python 3
python -m http.server 8000
# luego abrir http://localhost:8000
```

Notas sobre APIs
- Algunas aplicaciones usan APIs públicas (por ejemplo OpenWeatherMap). Revisa `modulo4/clima.js` para añadir tu API key si la implementación la requiere.
- También hay versiones que usan Open-Meteo (sin clave) en otros archivos.

Contribuciones
- Si querés mejorar o añadir ejercicios: fork, crear una rama con tus cambios y abrir un pull request.

Licencia
- Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE`.

Contacto
- Autor: DalmauBenjamin (repositorio de ejemplo)