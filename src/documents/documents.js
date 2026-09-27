// Directors Document
db.directors.insertMany([
    {
        _id: ObjectId("665000000000000000000001"),
        name: "Christopher Nolan",
        biography: "Diretor britânico conhecido por filmes de ficção científica, ação e narrativas complexas.",
        nationality: "Britânica"
    },
    {
        _id: ObjectId("665000000000000000000002"),
        name: "Greta Gerwig",
        biography: "Diretora e roteirista norte-americana conhecida por obras contemporâneas e adaptações literárias.",
        nationality: "Norte-americana"
    }
]);

// Movies Document
db.movies.insertMany([
    {
        title: "A Origem",
        synopsis: "Um especialista em invadir sonhos recebe a missão de implantar uma ideia na mente de um alvo.",
        releaseYear: 2010,
        genre: "Ficção científica",
        director: ObjectId("665000000000000000000001")
    },
    {
        title: "Interestelar",
        synopsis: "Astronautas viajam por um buraco de minhoca em busca de um novo lar para a humanidade.",
        releaseYear: 2014,
        genre: "Ficção científica",
        director: ObjectId("665000000000000000000001")
    },
    {
        title: "O Cavaleiro das Trevas",
        synopsis: "Batman enfrenta uma ameaça criminosa que coloca Gotham em estado de caos.",
        releaseYear: 2008,
        genre: "Ação",
        director: ObjectId("665000000000000000000001")
    },
    {
        title: "Lady Bird: A Hora de Voar",
        synopsis: "Uma adolescente enfrenta conflitos familiares e busca seu próprio caminho para a vida adulta.",
        releaseYear: 2017,
        genre: "Drama",
        director: ObjectId("665000000000000000000002")
    },
    {
        title: "Adoráveis Mulheres",
        synopsis: "Quatro irmãs amadurecem e enfrentam desafios pessoais durante a Guerra Civil Americana.",
        releaseYear: 2019,
        genre: "Drama",
        director: ObjectId("665000000000000000000002")
    }
]);
