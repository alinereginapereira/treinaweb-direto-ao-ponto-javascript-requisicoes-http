// console.log(window.fetch)
const { fetch: origFetch } = window;

window.fetch = async function (...args) {
    console.log("Fetch com argumentos: ", args);
    const response = await origFetch(...args);


    response
        .clone()
        .json()
        .then((data) => console.log("response interceptada: ", data))
        .catch(err => console.log(err));


    return {
        ok: true,
        status: 200,
        json: async () => ({
            nome: "ariel"
        })
    }
}


fetch("http://localhost:3002/api/alunos")
    .then((response) => {
        console.log("fetch: ", response)
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })