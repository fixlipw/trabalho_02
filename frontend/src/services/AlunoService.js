const API_URL = "http://localhost:3002/alunos";


function GET_ALUNOS() {
    return {
        url: API_URL + "/listar",
        options: {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        },
    };
}

function POST_ALUNO(body) {
    return {
        url: API_URL + "/criar",
        options: {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        },
    };
}

function GET_ALUNO_BY_ID(id) {
    return {
        url: API_URL + "/recuperar/" + id,
        options: {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        },
    };
}

function UPDATE_ALUNO(id, body) {
    return {
        url: API_URL + "/atualizar/" + id,
        options: {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        },
    };
}

function DELETE_ALUNO(id) {
    return {
        url: API_URL + "/apagar/" + id,
        options: {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        },
    };
}

function GET_MEDIA() {
    return {
        url: API_URL + "/media",
        options: {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        },
    };
}

export default { GET_ALUNOS, GET_MEDIA, POST_ALUNO, GET_ALUNO_BY_ID, UPDATE_ALUNO, DELETE_ALUNO };