import {useState} from "react";
import {useNavigate} from "react-router-dom";
import useFetch from "../../../hooks/useFetch.jsx"
import AlunoService from "../../../services/AlunoService.js";


const CriarAluno = () => {
    const [nome, setNome] = useState('');
    const [curso, setCurso] = useState('');
    const [ira, setIra] = useState(0);

    const navigate = useNavigate();
    const { request } = useFetch();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (nome && curso && ira >= 0) {
            const { url, options } = AlunoService.POST_ALUNO({
                nome: nome,
                curso: curso,
                ira: ira,
            });

            await request(url, options);

            navigate("/aluno/listar");
        } else {
            alert("Todos os campos devem ser preenchidos!");
        }
    };

    const handleInputName = e => setNome(e.target.value);
    const handleInputCurso = e => setCurso(e.target.value);
    const handleInputIra = e => setIra(Number(e.target.value));

    return (
        <article className="container mb-4 bg-light p-4 rounded shadow-sm">
            <header>
                <div className="container d-flex justify-content-between align-items-center">
                    <h2>Criar Aluno</h2>
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
                                value={curso}
                                id="selectCurso"
                                onChange={handleInputCurso}
                            >
                                <option value="">Selecione um curso...</option>
                                <option value="Sistemas de Informação">Sistemas de Informação</option>
                                <option value="Ciências da Computação">Ciência da Computação</option>
                                <option value="Engenharia da Computação">Engenharia de Computação</option>
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

export default CriarAluno;
