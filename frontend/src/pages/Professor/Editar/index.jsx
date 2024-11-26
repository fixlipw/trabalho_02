import {useEffect, useState} from "react"
import {useNavigate, useParams} from "react-router-dom"
import useFetch from "../../../hooks/useFetch.jsx";
import ProfessorService from "../../../services/ProfessorService.js";

const EditarProfessor = () => {

    const [nome, setNome] = useState("")
    const [curso, setCurso] = useState("")
    const [titulacao, setTitulacao] = useState("MESTRADO")
    const [interesses, setInteresses] = useState({es: false, lc: false, mc: false})
    const [universidades, setUniversidades] = useState({ufc: false, ifce: false})

    const handleInputName = (event) => setNome(event.target.value)
    const handleInputCurso = (event) => setCurso(event.target.value)
    const handleSelect = (event) => setTitulacao(event.target.value)
    const handleCheckbox = (event) => setInteresses({...interesses, [event.target.name]: event.target.checked})
    const handleRadio = (event) => setUniversidades({...universidades, [event.target.value]: event.target.checked})

    const {id} = useParams()
    const navigate = useNavigate()
    const { request } = useFetch();


    useEffect(() => {
        const getProfessorOptions = ProfessorService.GET_PROFESSOR_BY_ID(id);
        request(getProfessorOptions.url, getProfessorOptions.options).then(response => {
            const professor = response.json;

            console.log(professor)

            if (professor) {
                setNome(professor.nome);
                setCurso(professor.curso);
                setTitulacao(professor.titulacao);
                setInteresses(professor.interesses || { es: false, lc: false, mc: false });
                setUniversidades(professor.universidade || { ufc: false, ifce: false });
            }
        });
    }, [id, request]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const professorEditado = {nome, curso, titulacao, interesses, universidade: universidades}

        console.log(professorEditado)

        const updateProfessorOptions = ProfessorService.UPDATE_PROFESSOR(id, professorEditado)
        request(updateProfessorOptions.url, updateProfessorOptions.options).then(() => {
            navigate("/professor/listar")
        });
    }

    return (
        <article className="container mb-4 bg-light p-4 rounded shadow-sm">
            <header>
                <div className="container d-flex justify-content-between align-items-center">
                    <h2>Editar Professor</h2>
                </div>
            </header>

            <section className="p-4">
                <form className="form-content" onSubmit={handleSubmit}>
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
                        <label className="form-label" htmlFor="inputCurso">Curso</label>
                        <select
                            className="form-control"
                            id="selectCurso"
                            name="curso"
                            onChange={handleInputCurso}
                            value={curso}
                        >
                            <option value="">Selecione um curso...</option>
                            <option value="SI">Sistemas de Informação</option>
                            <option value="CC">Ciência da Computação</option>
                            <option value="EC">Engenharia de Computação</option>
                            <option value="RC">Redes de Computadores</option>
                            <option value="DD">Design Digital</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label className="form-label" htmlFor="selectTitulacao">Titulação</label>
                        <select
                            className="form-select"
                            id="selectTitulacao"
                            onChange={handleSelect}
                            value={titulacao}
                        >
                            <option value="GRADUACAO">GRADUAÇÃO</option>
                            <option value="MESTRADO">MESTRADO</option>
                            <option value="DOUTORADO">DOUTORADO</option>
                        </select>
                    </div>

                    <div className="container d-flex justify-content-xl-start">
                        <div>
                            <label className="form-label">Áreas de Interesse</label>
                            <fieldset className="scheduler-border">
                                <div className="form-check">
                                    <input
                                        id="idES"
                                        type="checkbox"
                                        className="form-check-input"
                                        checked={interesses.es}
                                        onChange={handleCheckbox}
                                        name="es"
                                    />
                                    <label
                                        htmlFor="idES"
                                        className="form-check-label"
                                    >
                                        Engenharia de Software
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        id="idLC"
                                        type="checkbox"
                                        className="form-check-input"
                                        checked={interesses.lc}
                                        onChange={handleCheckbox}
                                        name="lc"
                                    />
                                    <label
                                        htmlFor="idLC"
                                        className="form-check-label"
                                    >
                                        Lógica Computacional
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        id="idMC"
                                        type="checkbox"
                                        className="form-check-input"
                                        checked={interesses.mc}
                                        onChange={handleCheckbox}
                                        name="mc"
                                    />
                                    <label
                                        htmlFor="idMC"
                                        className="form-check-label"
                                    >
                                        Matemática Computacional
                                    </label>
                                </div>
                            </fieldset>
                        </div>

                        <div className="mx-5">
                            <label className="form-label">Universidade de Origem</label>
                            <fieldset className="scheduler-border">
                                <div className="form-check">
                                    <input
                                        id="idUFC"
                                        className="form-check-input"
                                        type="radio"
                                        name="universidade"
                                        checked={universidades.ufc}
                                        value="ufc"
                                        onChange={handleRadio}
                                    />
                                    <label
                                        htmlFor="idUFC"
                                        className="form-check-label"
                                    >
                                        Universidade Federal do Ceará
                                    </label>
                                </div>

                                <div className="form-check">
                                    <input
                                        id="idIFCE"
                                        className="form-check-input"
                                        type="radio"
                                        name="universidade"
                                        checked={universidades.ifce}
                                        value="ifce"
                                        onChange={handleRadio}
                                    />
                                    <label
                                        htmlFor="idIFCE"
                                        className="form-check-label"
                                    >
                                        Instituto Federal do Ceará
                                    </label>
                                </div>
                            </fieldset>
                        </div>
                    </div>

                    <div className="my-3">
                        <button className="btn btn-primary" type="submit">
                            Atualizar Professor
                        </button>
                    </div>
                </form>
            </section>
        </article>
    );
}

export default EditarProfessor