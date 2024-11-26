const professores = [
    {
        id: 0,
        nome: "Camila Andrade",
        curso: "CC",
        titulacao: "DOUTORADO",
        interesses: {es: true, lc: false, mc: true},
        universidade: {ufc: true, ifce: false}
    },
    {
        id: 1,
        nome: "Roberto Silva",
        curso: "SI",
        titulacao: "MESTRADO",
        interesses: {es: false, lc: true, mc: false},
        universidade: {ufc: true, ifce: false}
    },
    {
        id: 2,
        nome: "Marcelo Queiroz",
        curso: "ES",
        titulacao: "DOUTORADO",
        interesses: {es: false, lc: true, mc: true},
        universidade: {ufc: false, ifce: true}
    },
    {
        id: 3,
        nome: "Ana Beatriz Moura",
        curso: "EC",
        titulacao: "MESTRADO",
        interesses: {es: true, lc: false, mc: false},
        universidade: {ufc: false, ifce: true}
    },
    {
        id: 4,
        nome: "Gustavo Lima",
        curso: "DD",
        titulacao: "DOUTORADO",
        interesses: {es: true, lc: false, mc: false},
        universidade: {ufc: true, ifce: false}
    },
    {
        id: 5,
        nome: "Juliana Prado",
        curso: "SI",
        titulacao: "MESTRADO",
        interesses: {es: false, lc: true, mc: true},
        universidade: {ufc: false, ifce: true}
    },
    {
        id: 6,
        nome: "Victor Almeida",
        curso: "CC",
        titulacao: "DOUTORADO",
        interesses: {es: false, lc: false, mc: true},
        universidade: {ufc: true, ifce: false}
    }
];


const alunos = [
    {
        id: 0,
        nome: "Mariana Costa",
        curso: "Engenharia de Computação",
        ira: 8.5
    },
    {
        id: 1,
        nome: "Lucas Pereira",
        curso: "Ciência da Computação",
        ira: 9.0
    },
    {
        id: 2,
        nome: "Sofia Fernandes",
        curso: "Design Digital",
        ira: 7.8
    },
    {
        id: 3,
        nome: "Enzo Rocha",
        curso: "Redes de Computadores",
        ira: 6.5
    },
    {
        id: 4,
        nome: "Alice Freitas",
        curso: "Sistemas de Informação",
        ira: 9.3
    },
    {
        id: 5,
        nome: "Gabriel Lima",
        curso: "Engenharia de Computação",
        ira: 7.2
    },
    {
        id: 6,
        nome: "Fernanda Souza",
        curso: "Ciência da Computação",
        ira: 8.1
    },
    {
        id: 7,
        nome: "João Victor",
        curso: "Redes de Computadores",
        ira: 5.8
    },
    {
        id: 8,
        nome: "Beatriz Almeida",
        curso: "Design Digital",
        ira: 8.0
    },
    {
        id: 9,
        nome: "Rafael Torres",
        curso: "Sistemas de Informação",
        ira: 7.5
    },
    {
        id: 10,
        nome: "Larissa Oliveira",
        curso: "Engenharia de Computação",
        ira: 9.1
    }
];


module.exports = {professores, alunos}