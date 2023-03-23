// oF8pTXvzVZLBdW6g
async function getAlunos() {
    const url = new URL("/api/alunos?id=oF8pTXvzVZLBdW6g", "http://localhost:3002")

    const myRequest = new Request(url, {
        method: "GET",
        headers: {
            Accept: 'application/json',
            "Accept-Language": "pt-BR"
        },

    });
    return await fetch(myRequest)
        .then((response) => {

            return response.json();
        }).then((data) => {
            console.log(data);
            return data;
        });
}


getAlunos();
