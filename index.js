
async function getAlunos() {
    return await fetch("http://localhost:3002/api/alunos")
        .then((response) => {
            console.log(response);
            return response.json();
        }).then((data) => {
            console.log(data);
            return data;
        });
}


getAlunos();
