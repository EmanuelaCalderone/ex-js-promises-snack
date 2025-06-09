
/* 1. Ottieni il titolo di un post con una Promise.

Crea una funzione getPostTitle(id) che accetta un id e restituisce una Promise che recupera il titolo di un post dal link https://dummyjson.com/posts/{id}*/

function getPostTitle(id) {
    return new Promise((resolve, reject) => {
        fetch(`https://dummyjson.com/posts/{id}`)
            .then(response => res.json())
            .then(post => resolve(post.title))
            .catch(reject)
    })
}

getPostTitle(1)
    .then(title => consolel.log(title))
    .catch(errore => console.error(errore))


/*2. Crea la funzione lanciaDado() che restituisce una Promise che, dopo 3 secondi, genera un numero casuale tra 1 e 6. Tuttavia, nel 20% dei casi, il dado si "incastra" e la Promise va in reject.*/

function lanciaDado() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const numero = Math.floor(Math.random() * 6) + 1
            if (Math.random() < 0.2) {
                reject('il dado si è incastrato');
            } else {
                resolve(`numero generato: ${numero}`)
            }
        }, 3000)
    });
}

lanciaDado()
    .then(numero => console.log(numero))
    .catch(error => console.log(error));



