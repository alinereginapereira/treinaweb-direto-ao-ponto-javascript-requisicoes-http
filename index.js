const controller = new AbortController();

async function getAlunos() {
    const url = new URL("/api/alunos?id=oF8pTXvzVZLBdW6g", "http://localhost:3002")

    const myRequest = new Request(url, {
        method: "GET",
        headers: {
            Accept: 'application/json',
            "Accept-Language": "pt-BR"
        },
        signal: controller.signal
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
setTimeout(() => {
    controller.abort();
}, 2000)
