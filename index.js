// izEpTZSPnqntc7WR
async function getAlunos() {
    return await fetch("http://localhost:3002/api/alunos")
        .then((response) => {
            console.log(response);
            console.log(response.headers.get("Date"))
            return response.json();
        }).then((data) => {
            console.log(data);
            return data;
        });
}


getAlunos();
