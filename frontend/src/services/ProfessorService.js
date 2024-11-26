const API_URL = "http://localhost:3002/professores";

function GET_PROFESSORES() {
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

function POST_PROFESSOR(body) {
    return {
        url: API_URL + "/criar",
        options: {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        },
        body: JSON.stringify(body)
    };
}

function GET_PROFESSOR_BY_ID(id) {
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

function UPDATE_PROFESSOR(id, body) {
    return {
        url: API_URL + "/atualizar/" + id,
        options: {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body)
        },
    };
}

function DELETE_PROFESSOR(id) {
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

export default {GET_PROFESSORES, POST_PROFESSOR, GET_PROFESSOR_BY_ID, UPDATE_PROFESSOR, DELETE_PROFESSOR};