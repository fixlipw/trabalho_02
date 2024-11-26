import {createBrowserRouter} from "react-router-dom";
import {Base} from "./pages/Base/index.jsx";
import CriarAluno from "./pages/Aluno/Criar/index.jsx";
import EditarAluno from "./pages/Aluno/Editar/index.jsx";
import ListarAluno from "./pages/Aluno/Listar/index.jsx";
import ListarCurso from "./pages/Aluno/Curso/index.jsx";
import Resumo from "./pages/Resumo/index.jsx";
import CriarProfessor from "./pages/Professor/Criar/index.jsx";
import ListarProfessores from "./pages/Professor/Listar/index.jsx";
import EditarProfessor from "./pages/Professor/Editar/index.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Base />,
        children: [
            {
                path: "/",
                element: <Resumo />,
            },
            {
                path: "professor/editar/:id",
                element: <EditarProfessor />,
            },
            {
                path: "professor/listar",
                element: <ListarProfessores />,
            },
            {
                path: "professor/criar",
                element: <CriarProfessor />,
            },
            {
                path: "aluno/editar/:id",
                element: <EditarAluno />,
            },
            {
                path: "aluno/listarPorCurso",
                element: <ListarCurso />
            },
            {
                path: "aluno/listar",
                element: <ListarAluno />,
            },
            {
                path: "aluno/criar",
                element: <CriarAluno/>,
            }
        ]
    },
])
