const readmeButton = document.getElementById('readme-btn');
const readmeContent = document.getElementById('readme-content');

let readmeData = null; // Variable para guardar el contenido del README y no cargarlo cada vez

readmeButton.addEventListener('click', () => {
    const isHidden = readmeContent.style.display === 'none';

    if (isHidden) {
        // Si está oculto, lo mostramos
        readmeContent.style.display = 'block';
        
        // Si aún no hemos cargado el contenido, lo pedimos al servidor
        if (!readmeData) {
            readmeContent.innerHTML = 'Cargando...';
            fetch('/get-readme')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('La respuesta del servidor no fue correcta: ' + response.statusText);
                    }
                    return response.text();
                })
                .then(data => {
                    readmeData = data; // Guardamos el contenido para futuras veces
                    // Usamos marked.parse() para convertir el Markdown a HTML
                    readmeContent.innerHTML = marked.parse(readmeData);
                })
                .catch(error => {
                    readmeContent.textContent = 'Error al cargar el archivo README.md. Asegúrate de que el servidor está funcionando.';
                    console.error('Error al pedir el README:', error);
                });
        }
    } else {
        // Si ya se está mostrando, lo ocultamos
        readmeContent.style.display = 'none';
    }
});