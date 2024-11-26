import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

const ResumoProjeto = () => {
    return (
        <main className="container mb-4 bg-light p-4 rounded shadow-sm">
            <header className="mb-4">
                <h1 className="text-center">Resumo do Projeto</h1>
            </header>

            <section>
                <p>
                    Este projeto tem como objetivo desenvolver um sistema de gestão de alunos e professores,
                    permitindo realizar operações básicas como cadastro, listagem, edição e exclusão de registros.
                    O sistema é simples, porém robusto, projetado para gerenciar os dados de alunos e professores em
                    um ambiente acadêmico.
                </p>
            </section>

            <section>
                <h2 className="mb-4">Funcionalidades</h2>
                <ul>
                    <li><strong>Cadastro de Alunos:</strong> Permite adicionar novos alunos ao sistema.</li>
                    <li><strong>Cadastro de Professores:</strong> Permite adicionar novos professores ao sistema.</li>
                    <li><strong>Listagem de Alunos e Professores:</strong> Exibe todos os registros cadastrados.</li>
                    <li><strong>Edição de Registros:</strong> Permite editar os dados de alunos ou professores.</li>
                    <li><strong>Exclusão de Registros:</strong> Permite excluir alunos ou professores do sistema.</li>
                    <li><strong>Filtragem por Curso:</strong> Permite visualizar alunos agrupados por curso.</li>
                </ul>
            </section>

            <section>
                <h2 className="mb-4">Tecnologias Usadas</h2>
                <p>O sistema foi desenvolvido utilizando as seguintes tecnologias:</p>
                <ul>
                    <li><strong>Frontend:</strong> React.js, Bootstrap</li>
                    <li><strong>Backend:</strong> Node.js (com Express para criação da API)</li>
                    <li><strong>Banco de Dados:</strong> Local com JSON</li>
                    <li><strong>Controle de Versão:</strong> Git (com GitHub para o repositório)</li>
                </ul>
            </section>

            <section>
                <h2 className="mb-4">Estrutura de Pastas</h2>
                <p>A organização do projeto foi pensada para garantir modularidade e facilidade de manutenção. Abaixo, uma descrição das pastas principais:</p>
                <ul>
                    <li>
                        <strong>src/assets:</strong> Armazena arquivos estáticos como imagens e ícones usados no projeto.
                    </li>
                    <li>
                        <strong>src/components:</strong> Contém componentes reutilizáveis da interface, como a Navbar.
                    </li>
                    <li>
                        <strong>src/hooks:</strong> Reúne hooks personalizados, como o <code>useFetch</code>, usado para fazer requisições HTTP de forma reutilizável.
                    </li>
                    <li>
                        <strong>src/pages:</strong> Contém as páginas da aplicação, organizadas por funcionalidade. Exemplos:
                        <ul>
                            <li><strong>Aluno:</strong> Páginas para criar, listar, editar e gerenciar alunos.</li>
                            <li><strong>Professor:</strong> Páginas para criar, listar, editar e gerenciar professores.</li>
                            <li><strong>Resumo:</strong> Página de resumo do projeto.</li>
                            <li><strong>Base:</strong> Estrutura principal que organiza o layout da aplicação.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>src/services:</strong> Centraliza a lógica de comunicação com a API, como <code>AlunoService</code> e <code>ProfessorService</code>.
                    </li>
                    <li>
                        <strong>src/routes.jsx:</strong> Define as rotas do sistema, conectando URLs às respectivas páginas.
                    </li>
                    <li>
                        <strong>src/main.jsx:</strong> Ponto de entrada da aplicação, onde os provedores e rotas são configurados.
                    </li>
                </ul>
            </section>
        </main>
    );
};

export default ResumoProjeto;
