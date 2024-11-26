import {useEffect, useState} from "react";
import AlunoService from "../../../services/AlunoService.js";
import {Link} from "react-router-dom";
import useFetch from "../../../hooks/useFetch.jsx";

const ListarCurso = () => {

    const [alunos, setAlunos] = useState([]);
    const [media, setMedia] = useState(0);
    const [colored, setColored] = useState(false);

    const { request } = useFetch();

    useEffect(() => {
        const getAlunosOptions = AlunoService.GET_ALUNOS();
        request(getAlunosOptions.url, getAlunosOptions.options).then((response) => {
            setAlunos(response.json);
        });

        const getMediaOptions = AlunoService.GET_MEDIA();
        request(getMediaOptions.url, getMediaOptions.options).then((response) => {
            setMedia(response.json);
        });
    }, [request]);

    const handleColorir = () => {
        setColored(!colored);
    }

    const getClass = (ira) => {
        if (!colored) return "aluno";
        return ira < media ? "table-danger" : "table-info";
    }

    const handleDelete = id => {
        if (window.confirm(`Tem certeza que deseja excluir id: ${id}`)) {
            const deleteOptions = AlunoService.DELETE_ALUNO(id);
            request(deleteOptions.url, deleteOptions.options).then(() => {
                const result = alunos.filter((aluno) => aluno.id !== id);
                setAlunos(result);

                const getMediaOptions = AlunoService.GET_MEDIA();
                request(getMediaOptions.url, getMediaOptions.options).then((response) => {
                    setMedia(response.json);
                });
            });
        }
    }

    const renderizarAlunos = () => {
        return alunos.map((aluno) => {
            return (
                <tr key={aluno.id} className={getClass(aluno.ira)}>
                    <th scope="row">{aluno.id}</th>
                    <td>{aluno.nome}</td>
                    <td>{aluno.curso}</td>
                    <td>{aluno.ira}</td>
                    <td>
                        <div className="container d-flex justify-content-between align-items-center">
                            <Link to={`/aluno/editar/${aluno.id}`} className="btn btn-primary">
                                Editar
                            </Link>
                            <button type="button" className="btn btn-danger" onClick={() => handleDelete(aluno.id)}>
                                Apagar
                            </button>
                        </div>
                    </td>
                </tr>
            )
        })
    }

    return (
        <article className="container mb-4 bg-light p-4 rounded shadow-sm">
            <header>
                <div className="container d-flex justify-content-between align-items-center">
                    <h2>Listar Alunos</h2>
                    <button className="btn btn-secondary" onClick={handleColorir}>
                        {colored ? "Voltar ao Normal" : "Comparar por Média da Turma"}
                    </button>
                </div>
            </header>
            <section className="p-4">
                <table className="table table-striped table-bordered table-content">
                    <thead>
                    <tr>
                        <th scope="col" style={{width: "10%"}}>ID</th>
                        <th scope="col" style={{width: "35%"}}>Nome</th>
                        <th scope="col" style={{width: "33%"}}>Curso</th>
                        <th scope="col" style={{width: "5%"}}>IRA</th>
                        <th scope="col" style={{width: "17%"}}></th>
                    </tr>
                    </thead>
                    <tbody>
                    {renderizarAlunos()}
                    <tr>
                        <th scope="row">Média IRA</th>
                        <td>-----</td>
                        <td>-----</td>
                        <td>{media}</td>
                        <td>-----</td>
                    </tr>
                    </tbody>
                </table>
            </section>
        </article>
    )
}

export default ListarCurso;