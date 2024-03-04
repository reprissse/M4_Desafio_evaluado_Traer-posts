// función asincrónica llamada getPosts
async function getPosts() {
    // contenedor para los posts
    const postContainer = document.getElementById('post-data');


    
    // bloque try-catch para manejar los errores
    try {
        // solicitud a la API usando fetch y async-await
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');

        // Si la respuesta no es exitosa (error)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Convertimos la respuesta en JSON
        const posts = await response.json();

        // Para cada post en el array posts, se crea un (li) con el método forEach
        posts.forEach(post => {
            // lista (li), nodo padre
            const li = document.createElement('li');

            // título del post (negrita)
            const title = document.createElement('b');
            title.textContent = `${post.title}`;

            // span (para el cuerpo del post)
            const body = document.createElement('span');
            body.textContent = post.body;

            // título y el cuerpo (nodos hijos) al nodo padre
            li.appendChild(title);
            li.appendChild(body);

            // Añadimos el elemento de lista al contenedor de posts
            postContainer.appendChild(li);
        });
    } catch (error) {
        // Si ocurre un error, lo mostramos en la consola y mostramos un mensaje de error en el contenedor de posts
        console.error('Error:', error);
        postContainer.innerHTML = 'No se pudieron cargar los posts.';
    }
}

