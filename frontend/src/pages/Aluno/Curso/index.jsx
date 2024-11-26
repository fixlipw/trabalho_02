import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js"

import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import AlunoService from "../../../services/AlunoService.js";
import useFetch from "../../../hooks/useFetch.jsx";

const ListarCurso = () => {

    const [alunos, setAlunos] = useState([]);
    const [colored, setColored] = useState(false);
    const [alunosPorCurso, setAlunosPorCurso] = useState({})

    const { request } = useFetch();

    useEffect(() => {
        const getAlunosOptions = AlunoService.GET_ALUNOS();
        request(getAlunosOptions.url, getAlunosOptions.options).then((response) => {
            if (response.json) {
                setAlunos(response.json);
                agruparAlunos(response.json);
            }
        });
    }, [request]);

    const handleDelete = (id) => {
        if (window.confirm(`Tem certeza que deseja excluir id: ${id}`)) {
            const deleteAlunoOptions = AlunoService.DELETE_ALUNO(id);
            request(deleteAlunoOptions.url, deleteAlunoOptions.options).then(() => {
                const result = alunos.filter((aluno) => aluno.id !== id);
                setAlunos(result);
            });
        }
    };

    const handleColorir = () => {
        setColored(!colored);
    }

    const getClass = (ira) => {
        if (!colored) return "aluno";
        return ira < 7 ? "table-danger" : "table-info";
    }

    const agruparAlunos = (alunos) => {
        const agrupados = {};
        alunos.forEach(aluno => {
            if (!agrupados[aluno.curso]) {
                agrupados[aluno.curso] = [];
            }
            agrupados[aluno.curso].push(aluno);
        });
        setAlunosPorCurso(agrupados);
    };

    const renderizarAlunosPorCurso = () => {
        return Object.keys(alunosPorCurso).map((curso) => (
            <section key={curso} className="p-4">
                <table className="table table-striped table-bordered table-content">
                    <thead>
                    <tr>
                        <th className="table-light" colSpan="4">{curso}</th>
                    </tr>
                    <tr>
                        <th scope="col" style={{width: "5%"}}>ID</th>
                        <th scope="col" style={{width: "73%"}}>Nome</th>
                        <th scope="col" style={{width: "5%"}}>IRA</th>
                        <th scope="col" style={{width: "17%"}}></th>
                    </tr>
                    </thead>
                    <tbody>
                    {alunosPorCurso[curso].map((aluno) => (
                        <tr key={aluno.id} className={getClass(aluno.ira)}>
                            <th scope="row">{aluno.id}</th>
                            <td>{aluno.nome}</td>
                            <td>{aluno.ira}</td>
                            <td>
                                <div className="container d-flex justify-content-between align-items-center">
                                    <Link to={`/aluno/editar/${aluno.id}`} className="btn btn-primary">
                                        Editar
                                    </Link>
                                    <button type="button" className="btn btn-danger"
                                            onClick={() => handleDelete(aluno.id)}>
                                        Apagar
                                    </button>
                                </div>
                            </td>
                        </tr>))}
                    </tbody>
                </table>
            </section>
        ));
    };


    return (
        <article className="container mb-4 bg-light p-4 rounded shadow-sm">
            <header>
                <div className="container d-flex justify-content-between align-items-center">
                    <h2>Listar Alunos Por Curso</h2>
                    <button className="btn btn-secondary" onClick={handleColorir}>
                        {colored ? "Voltar ao Normal" : "Comparar Média"}
                    </button>
                </div>
            </header>

            {renderizarAlunosPorCurso()}

        </article>
    )
}

export default ListarCurso;