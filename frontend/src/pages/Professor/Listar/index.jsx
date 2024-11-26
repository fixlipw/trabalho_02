import {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import useFetch from "../../../hooks/useFetch.jsx";
import ProfessorService from "../../../services/ProfessorService.js";

const ListarProfessores = () => {

    const [professores, setProfessores] = useState([]);

    const { request } = useFetch();

    useEffect(() => {
        const getProfessoresOptions = ProfessorService.GET_PROFESSORES();
        request(getProfessoresOptions.url, getProfessoresOptions.options).then((response) => {
            setProfessores(response.json);
            console.log(response);
        });
    }, [request]);

    const handleDelete = id => {
        if (window.confirm(`Tem certeza que deseja excluir id: ${id}?`)) {
            const deleteOptions = ProfessorService.DELETE_PROFESSOR(id);
            request(deleteOptions.url, deleteOptions.options).then(() => {
                const result = professores.filter(professor => professor.id !== id);
                setProfessores(result);
            });
        }
    };

    const renderizarProfessores = () => {
        return professores.map(professor => {
            return (
                <tr key={professor.id}>
                    <th scope="row">{professor.id}</th>
                    <td>{professor.nome}</td>
                    <td>{professor.curso}</td>
                    <td>{professor.titulacao}</td>
                    <td>
                        <div className="container d-flex justify-content-between align-items-center">
                            <Link to={`/professor/editar/${professor.id}`} className="btn btn-primary">
                                Editar
                            </Link>
                            <button type="button" className="btn btn-danger" onClick={() => handleDelete(professor.id)}>
                                Apagar
                            </button>
                        </div>
                    </td>
                </tr>
            );
        });
    }

    return (
        <article className="container mb-4 bg-light p-4 rounded shadow-sm">
            <header>
                <div className="container d-flex justify-content-between align-items-center">
                    <h2>Listar Professores</h2>
                </div>
            </header>
            <section className="p-4">
                <table className="table table-striped table-bordered table-content">
                    <thead>
                    <tr>
                        <th scope="col" style={{width: "10%"}}>ID</th>
                        <th scope="col" style={{width: "33%"}}>Nome</th>
                        <th scope="col" style={{width: "25%"}}>Curso</th>
                        <th scope="col" style={{width: "15%"}}>Titulação</th>
                        <th scope="col" style={{width: "17%"}}></th>
                    </tr>
                    </thead>
                    <tbody>
                    {renderizarProfessores()}
                    </tbody>
                </table>
            </section>
        </article>
    );
}

export default ListarProfessores