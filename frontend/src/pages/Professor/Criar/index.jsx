import {useState} from "react";
import {useNavigate} from "react-router-dom";
import ProfessorService from "../../../services/ProfessorService.js";
import useFetch from "../../../hooks/useFetch.jsx";

const CriarProfessor = () => {

    const [nome, setNome] = useState('');
    const [curso, setCurso] = useState('');
    const [titulacao, setTitulacao] = useState('');
    const [interesses, setInteresses] = useState({es: false, lc: false, mc: false});
    const [universidades, setUniversidade] = useState({ufc: false, ifce: false});

    const handleInputName = e => setNome(e.target.value);
    const handleInputCurso = e => setCurso(e.target.value);
    const handleSelect = e => setTitulacao(e.target.value);
    const handleRadio = e => setUniversidade({...universidades, [e.target.value]: e.target.checked})
    const handleCheckbox = e => setInteresses({...interesses, [e.target.name]: e.target.checked})

    const navigate = useNavigate()
    const { request } = useFetch();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (nome && curso && titulacao) {
            const {url, options} = ProfessorService.POST_PROFESSOR({
                nome: nome,
                curso: curso,
                titulacao: titulacao,
                interesses: interesses,
                universidades: universidades,
            });

            await request(url, options);
            navigate("/professor/listar");
        }

        alert("Todos os campos devem ser preenchidos!");
    }

    return (
        <article className="container mb-4 bg-light p-4 rounded shadow-sm">
            <header>
                <div className="container d-flex justify-content-between align-items-center">
                    <h2>Criar Professor</h2>
                </div>
            </header>

            <section className="p-4">
                <form className="form-content" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Nome</label>
                        <input className="form-control" type="text" value={nome} onChange={handleInputName}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Curso</label>
                        <select className="form-control" value={curso} onChange={handleInputCurso}>
                            <option value="">Selecione um curso...</option>
                            <option value="Sistemas de Informação">Sistemas de Informação</option>
                            <option value="Ciências da Computação">Ciência da Computação</option>
                            <option value="Engenharia da Computação">Engenharia de Computação</option>
                            <option value="Redes de Computadores">Redes de Computadores</option>
                            <option value="Design Digital">Design Digital</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Titulação</label>
                        <select className="form-select" value={titulacao} onChange={handleSelect}>
                            <option value="GRADUACAO">GRADUAÇÃO</option>
                            <option value="MESTRADO">MESTRADO</option>
                            <option value="DOUTORADO">DOUTORADO</option>
                        </select>
                    </div>
                    <div>
                        <label className="form-label">Áreas de Interesse</label>
                        <fieldset className="scheduler-border">
                            <div className="form-check">
                                <input
                                    id="idES"
                                    type="checkbox"
                                    className="form-check-input"
                                    checked={interesses.es}
                                    name="es"
                                    onChange={handleCheckbox}
                                />
                                <label htmlFor="idES" className="form-check-label">Engenharia de Software</label>
                            </div>
                            <div className="form-check">
                                <input
                                    id="idLC"
                                    type="checkbox"
                                    className="form-check-input"
                                    checked={interesses.lc}
                                    name="lc"
                                    onChange={handleCheckbox}
                                />
                                <label htmlFor="idLC" className="form-check-label">Lógica Computacional</label>
                            </div>
                            <div className="form-check">
                                <input
                                    id="idMC"
                                    type="checkbox"
                                    className="form-check-input"
                                    checked={interesses.mc}
                                    name="mc"
                                    onChange={handleCheckbox}
                                />
                                <label htmlFor="idMC" className="form-check-label">Matemática Computacional</label>
                            </div>
                        </fieldset>
                    </div>
                    <div>
                        <label className="form-label">Universidade de Origem</label>
                        <fieldset className="scheduler-border">
                            <div className="form-check">
                                <input
                                    id="idUFC"
                                    className="form-check-input"
                                    type="radio"
                                    name="universidade"
                                    value="ufc"
                                    checked={universidades.ufc}
                                    onChange={handleRadio}
                                />
                                <label htmlFor="idUFC" className="form-check-label"> Universidade Federal do Ceará</label>
                            </div>

                            <div className="form-check">
                                <input
                                    id="idIFCE"
                                    className="form-check-input"
                                    type="radio"
                                    name="universidade"
                                    value="ifce"
                                    checked={universidades.ifce}
                                    onChange={handleRadio}
                                />
                                <label htmlFor="idIFCE" className="form-check-label">Instituto Federal do Ceará</label>
                            </div>
                        </fieldset>
                    </div>

                    <div className="my-3">
                        <button className="btn btn-success" type="submit">
                            Submeter Professor
                        </button>
                    </div>
                </form>
            </section>
        </article>
    );
}

export default CriarProfessor