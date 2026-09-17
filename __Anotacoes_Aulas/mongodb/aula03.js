
const LogAcessoLivro = {
    livroId: ref,
    usuarioId: ref,
    usuario: {
        nome: string,
        email: string
    },
}

const Livro = {
    titulo: string,
    autores: [{
        nome: string,
        nascimento: string
    }],
    log: [{
        nome: string
    }],
    capitulos: [{
        numero: number,
        titulo: string,
        paginas: string,
        resumo: string
    }],
    generos: [string],
    createdAt: Date,
}

// produto
db.authors.insertMany([
    {
        nome: "John Doe",
        email: "john.doe@example.com",
        phone: "+5511999998888",
        createdAt: new Date("2026-01-15T10:30:00.000Z"),
        updatedAt: new Date("2026-03-01T14:20:00.000Z"),
        deleteAt: null
    },
    {
        nome: "Maria Silva",
        email: "maria.silva@email.com",
        phone: "+5521987654321",
        createdAt: new Date("2026-02-10T08:15:00.000Z"),
        updatedAt: new Date("2026-02-10T08:15:00.000Z"),
        deleteAt: null
    },
    {
        nome: "Carlos Eduardo",
        email: "carlos.eduardo@tech.com",
        phone: "+5531977776666",
        createdAt: new Date("2025-11-20T16:45:00.000Z"),
        updatedAt: new Date("2026-01-05T09:10:00.000Z"),
        deleteAt: new Date("2026-02-28T18:00:00.000Z")
    },
    {
        nome: "Ana Beatris",
        email: "ana.beatris@desenvolvimento.io",
        phone: "+5541955554444",
        createdAt: new Date("2026-03-02T11:00:00.000Z"),
        updatedAt: new Date("2026-03-02T11:00:00.000Z"),
        deleteAt: null
    },
    {
        nome: "Lucas Oliveira",
        email: "lucas.oliveira@services.net",
        phone: "",
        createdAt: new Date("2025-08-12T13:22:00.000Z"),
        updatedAt: new Date("2025-09-30T17:05:00.000Z"),
        deleteAt: new Date("2025-10-01T08:30:00.000Z")
    }
]);

/* **
 {
 acknowledged: true,
    insertedIds: {
         '0': ObjectId('6aa0a2d42af2d3207c08d3fa'),
         '1': ObjectId('6aa0a2d42af2d3207c08d3fb'),
         '2': ObjectId('6aa0a2d42af2d3207c08d3fc'),
         '3': ObjectId('6aa0a2d42af2d3207c08d3fd'),
         '4': ObjectId('6aa0a2d42af2d3207c08d3fe')
    }
 }
 */

db.books.updateOne(
    {_id: ObjectId("6a9a104c5567cf73d993abad")},
    {
        $set: {
            authors: ObjectId("6aa0a2d42af2d3207c08d3fa")
        }
    }
);

const book = db.books.findOne(
    { _id: ObjectId("6a9a104c5567cf73d993abad") }
);

const authors = db.authors.find(
    { _id: book.authors }
);

db.books.aggregate([
    { $match: { _id: ObjectId("6a9a104c5567cf73d993abad") } },
    {
        $lookup: {
            from: "authors",
            foreignField: "_id",
            localField: "authors",
            as: "authorDetails"
        }
    }
]);

/**
*
        [ Coleção books ]                    [ Coleção authors ]
    +----------------------------+       +----------------------------+
    | _id: 6a9a...               |       | _id: 6aa0a2d4...           |
    | titulo: "Dom Casmurro"     |  ===> | nome: "John Doe"           |
    | authors: 6aa0a2d4... (ref) |       | email: "john.doe@..."      |
    +----------------------------+       +----------------------------+
                   \                                   /
                    \                                 /
                    [ Resultado Final do $lookup ]
                    +----------------------------------+
                    | _id: 6a9a...                     |
                    | titulo: "Dom Casmurro"           |
                    | authors: 6aa0a2d4...             |
                    | authorDetails: [{                |
                    |   nome: "John Doe",              |
                    |   email: "john.doe@..."          |
                    | }]                               |
                    +----------------------------------+
*
*/
