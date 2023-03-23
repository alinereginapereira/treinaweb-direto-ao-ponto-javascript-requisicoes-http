// izEpTZSPnqntc7WR
async function getAlunos() {
    return await fetch("http://localhost:3002/api/alunos")
        .then((response) => {
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


async function editarAluno() {
    const aluno = {
        nome: "Marina Silva",
        idade: 28,
        sexo: "Feminino",
        curso: "Gestão TI",
        notas: [8.0, 7.5, 9.2],
        id: "izEpTZSPnqntc7WR"
    }


    fetch("http://localhost:3002/api/alunos?id=izEpTZSPnqntc7WR", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(aluno),
    })
        .then(response => response.json()
        ).then((data) => {
            console.log(data);
        })
}


async function editarValorAluno() {
    const aluno = {
        idade: 30,
    }


    fetch("http://localhost:3002/api/alunos?" + new URLSearchParams({
        id: "izEpTZSPnqntc7WR",
        nome: "ariel+sardinha"
    }), {
        method: "PATH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(aluno),
    })
        .then(response => response.json()
        ).then((data) => {
            console.log(data);
        })
}