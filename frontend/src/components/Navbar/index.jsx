import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { Link } from "react-router-dom";

const Navbar = () => {
    const routes = [
        "professor/listar",
        "professor/criar",
        "aluno/listar",
        "aluno/criar",
        "aluno/listarPorCurso"
    ];

    return (
        <nav className="navbar navbar-expand-lg py-3" aria-label="Main navigation">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item dropdown">
                            <button
                                className="nav-link dropdown-toggle"
                                id="navbarDropdownProfessor"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                aria-labelledby="navbarDropdownProfessor"
                            >
                                Professor
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownProfessor">
                                <li>
                                    <Link className="dropdown-item" to={routes[0]}>Listar Professor</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to={routes[1]}>Criar Professor</Link>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <button
                                className="nav-link dropdown-toggle"
                                id="navbarDropdownAluno"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                aria-labelledby="navbarDropdownAluno"
                            >
                                Aluno
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownAluno">
                                <li>
                                    <Link className="dropdown-item" to={routes[2]}>Listar Alunos</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to={routes[4]}>Listar Alunos Por Curso</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to={routes[3]}>Criar Aluno</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
