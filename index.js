
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

async function criarAluno() {
    const aluno = {
        nome: "Elton Fonseca",
        idade: 36,
        sexo: "Masculino",
        curso: "Gestão TI",
        notas: [8.0, 7.5, 9.2]
    }


    await fetch("http://localhost:3002/api/alunos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(aluno)
    }).then((response) => {
        console.log(response);
        return response.json();
    }).then((data) => {
        console.log(data);
        return data;
    });
}

// criarAluno();


