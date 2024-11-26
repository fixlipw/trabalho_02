import {useEffect, useState} from "react";
import AlunoService from "../../../services/AlunoService.js";
import {useNavigate, useParams} from "react-router-dom";
import useFetch from "../../../hooks/useFetch.jsx";

const EditarAluno = () => {

    const [nome, setNome] = useState('');
    const [curso, setCurso] = useState('');
    const [ira, setIra] = useState(0);

    const {id} = useParams();
    const navigate = useNavigate();

    const { request } = useFetch();

    useEffect(() => {
        const getAlunoOptions = AlunoService.GET_ALUNO_BY_ID(id);
        request(getAlunoOptions.url, getAlunoOptions.options).then((response) => {
            const aluno = response.json;
            if (aluno) {
                setNome(aluno.nome);
                setCurso(aluno.curso);
                setIra(aluno.ira);
                console.log(aluno);
            }
        });
    }, [id, request]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const alunoEditado = { nome, curso, ira };

        const updateAlunoOptions = AlunoService.UPDATE_ALUNO(id, alunoEditado);
        request(updateAlunoOptions.url, updateAlunoOptions.options).then(() => {
            navigate("/aluno/listar");
        });
    };

    const handleInputName = e => setNome(e.target.value);
    const handleInputCurso = e => setCurso(e.target.value);
    const handleInputIra = e => setIra(Number(e.target.value));

    return (
        <article className="container mb-4 bg-light p-4 rounded shadow-sm">
            <header>
                <div className="container d-flex justify-content-between align-items-center">
                    <h2>Editar Aluno</h2>
                </div>
            </header>

            <section className="p-4">
                <form className="form-content" onSubmit={handleSubmit}>
                    <fieldset>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="inputNome">Nome</label>
                            <input
                                className="form-control"
                                type="text"
                                name="nome"
                                id="inputNome"
                                onChange={handleInputName}
                                value={nome}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label" htmlFor="selectCurso">Curso</label>
                            <select
                                className="form-control"
                                id="selectCurso"
                                onChange={handleInputCurso}
                                value={curso}
                            >
                                <option value="Sistemas de Informação">Sistemas de Informação</option>
                                <option value="Ciência da Computação">Ciências da Computação</option>
                                <option value="Engenharia de Computação">Engenharia de Computação</option>
                                <option value="Redes de Computadores">Redes de Computadores</option>
                                <option value="Design Digital">Design Digital</option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <label className="form-label" htmlFor="inputIra">IRA</label>
                            <input
                                className="form-control"
                                type="number"
                                name="ira"
                                id="inputIra"
                                onChange={handleInputIra}
                                value={ira}
                            />
                        </div>

                        <div className="my-3">
                            <button type="submit" className="btn btn-primary">
                                Submeter Aluno
                            </button>
                        </div>
                    </fieldset>
                </form>
            </section>
        </article>
    );
};

export default EditarAluno