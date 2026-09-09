// use Plataforma LeituraGamificada

/**
 * Inserir
 * db.[collection]
 */
db.books.insertOne({
    title: "Título do Livro",
    authors: [
        "Autor 01", "Autor 02"
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null
});

db.books.insertMany([
    {
        title: "Clean Code: A Handbook of Agile Software Craftsmanship",
        authors: [
            "Robert C. Martin"
        ],
        isbn: "978-0132350884",
        publisher: "Prentice Hall",
        categories: ["Tecnologia", "Programação", "Engenharia de Software"],
        pageCount: 464,
        price: 189.90,
        language: "EN",
        isAvailable: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
    },
    {
        title: "O Enigma do Quarto 622",
        authors: [
            "Joël Dicker"
        ],
        isbn: "978-6555600322",
        publisher: "Intrínseca",
        categories: ["Ficção", "Mistério", "Suspense"],
        pageCount: 528,
        price: 59.90,
        language: "PT-BR",
        isAvailable: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
    },
    {
        title: "Domain-Driven Design: Tackling Complexity in the Heart of Software",
        authors: [
            "Eric Evans"
        ],
        isbn: "978-0321125217",
        publisher: "Addison-Wesley Professional",
        categories: ["Tecnologia", "Arquitetura de Software"],
        pageCount: 560,
        price: 245.00,
        language: "EN",
        isAvailable: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
    },
    {
        title: "Designing Data-Intensive Applications",
        authors: ["Martin Kleppmann"],
        isbn: "978-1449373320",
        publisher: "O'Reilly Media",
        categories: ["Tecnologia", "Bancos de Dados", "Arquitetura de Software"],
        pageCount: 616,
        price: 280.00,
        language: "EN",
        isAvailable: true,
        createdAt: new Date("2026-01-10T09:00:00Z"),
        updatedAt: new Date("2026-01-10T09:00:00Z"),
        deletedAt: null
    },
    {
        title: "O Senhor dos Anéis: A Sociedade do Anel",
        authors: ["J.R.R. Tolkien"],
        isbn: "978-8595084742",
        publisher: "HarperCollins",
        categories: ["Fantasia", "Ficção"],
        pageCount: 576,
        price: 64.90,
        language: "PT-BR",
        isAvailable: true,
        createdAt: new Date("2026-01-12T11:30:00Z"),
        updatedAt: new Date("2026-02-05T14:10:00Z"),
        deletedAt: null
    },
    {
        title: "Refactoring: Improving the Design of Existing Code",
        authors: ["Martin Fowler", "Kent Beck"],
        isbn: "978-0134494166",
        publisher: "Addison-Wesley",
        categories: ["Tecnologia", "Programação"],
        pageCount: 448,
        price: 210.00,
        language: "EN",
        isAvailable: false,
        createdAt: new Date("2026-01-18T15:20:00Z"),
        updatedAt: new Date("2026-03-01T10:00:00Z"),
        deletedAt: null
    },
    {
        title: "Duna",
        authors: ["Frank Herbert"],
        isbn: "978-8576573135",
        publisher: "Editora Aleph",
        categories: ["Ficção Científica", "Aventura"],
        pageCount: 680,
        price: 79.90,
        language: "PT-BR",
        isAvailable: true,
        createdAt: new Date("2026-01-20T08:45:00Z"),
        updatedAt: new Date("2026-01-20T08:45:00Z"),
        deletedAt: null
    },
    {
        title: "Sapiens: Uma Breve História da Humanidade",
        authors: ["Yuval Noah Harari"],
        isbn: "978-8535925661",
        publisher: "Companhia das Letras",
        categories: ["História", "Não-Ficção", "Antropologia"],
        pageCount: 464,
        price: 69.90,
        language: "PT-BR",
        isAvailable: true,
        createdAt: new Date("2026-01-22T13:15:00Z"),
        updatedAt: new Date("2026-02-18T09:30:00Z"),
        deletedAt: null
    },
    {
        title: "The Pragmatic Programmer: Your Journey to Mastery",
        authors: ["David Thomas", "Andrew Hunt"],
        isbn: "978-0135957059",
        publisher: "Addison-Wesley",
        categories: ["Tecnologia", "Carreira", "Programação"],
        pageCount: 352,
        price: 195.00,
        language: "EN",
        isAvailable: true,
        createdAt: new Date("2026-01-25T16:00:00Z"),
        updatedAt: new Date("2026-01-25T16:00:00Z"),
        deletedAt: null
    },
    {
        title: "1984",
        authors: ["George Orwell"],
        isbn: "978-8535914849",
        publisher: "Companhia das Letras",
        categories: ["Ficção", "Distopia", "Clássico"],
        pageCount: 416,
        price: 45.00,
        language: "PT-BR",
        isAvailable: true,
        createdAt: new Date("2026-01-28T10:10:00Z"),
        updatedAt: new Date("2026-02-28T18:00:00Z"),
        deletedAt: null
    },
    {
        title: "Building Microservices: Designing Fine-Grained Systems",
        authors: ["Sam Newman"],
        isbn: "978-1492034025",
        publisher: "O'Reilly Media",
        categories: ["Tecnologia", "Arquitetura de Software", "DevOps"],
        pageCount: 612,
        price: 260.00,
        language: "EN",
        isAvailable: false,
        createdAt: new Date("2026-02-02T12:00:00Z"),
        updatedAt: new Date("2026-02-25T11:20:00Z"),
        deletedAt: null
    },
    {
        title: "Algoritmos: Teoria e Prática",
        authors: ["Thomas H. Cormen", "Charles E. Leiserson", "Ronald L. Rivest", "Clifford Stein"],
        isbn: "978-8535236996",
        publisher: "Campus",
        categories: ["Tecnologia", "Ciência da Computação", "Algoritmos"],
        pageCount: 944,
        price: 320.00,
        language: "PT-BR",
        isAvailable: true,
        createdAt: new Date("2026-02-05T09:30:00Z"),
        updatedAt: new Date("2026-02-05T09:30:00Z"),
        deletedAt: null
    },
    {
        title: "A Revolução dos Bichos",
        authors: ["George Orwell"],
        isbn: "978-8535909555",
        publisher: "Companhia das Letras",
        categories: ["Ficção", "Sátira", "Clássico"],
        pageCount: 152,
        price: 34.90,
        language: "PT-BR",
        isAvailable: true,
        createdAt: new Date("2026-02-08T14:40:00Z"),
        updatedAt: new Date("2026-02-08T14:40:00Z"),
        deletedAt: null
    },
    {
        title: "Clean Architecture: A Craftsman's Guide to Software Structure",
        authors: ["Robert C. Martin"],
        isbn: "978-0134494166",
        publisher: "Prentice Hall",
        categories: ["Tecnologia", "Arquitetura de Software"],
        pageCount: 432,
        price: 175.00,
        language: "EN",
        isAvailable: true,
        createdAt: new Date("2026-02-12T08:15:00Z"),
        updatedAt: new Date("2026-03-02T15:00:00Z"),
        deletedAt: null
    },
    {
        title: "Cujo",
        authors: ["Stephen King"],
        isbn: "978-8556510129",
        publisher: "Suma",
        categories: ["Terror", "Suspense"],
        pageCount: 368,
        price: 54.90,
        language: "PT-BR",
        isAvailable: false,
        createdAt: new Date("2026-02-15T17:00:00Z"),
        updatedAt: new Date("2026-02-20T10:00:00Z"),
        deletedAt: new Date("2026-02-20T10:00:00Z")
    },
    {
        title: "JavaScript: The Definitive Guide",
        authors: ["David Flanagan"],
        isbn: "978-1491952023",
        publisher: "O'Reilly Media",
        categories: ["Tecnologia", "JavaScript", "Web Development"],
        pageCount: 704,
        price: 230.00,
        language: "EN",
        isAvailable: true,
        createdAt: new Date("2026-02-18T11:00:00Z"),
        updatedAt: new Date("2026-02-18T11:00:00Z"),
        deletedAt: null
    },
    {
        title: "O Hóspede Sombrio",
        authors: ["Clara Mendes", "Roberto Silva"],
        isbn: "978-6588900123",
        publisher: "Editora Fictícia",
        categories: ["Mistério", "Nacional"],
        pageCount: 280,
        price: 42.00,
        language: "PT-BR",
        isAvailable: true,
        createdAt: new Date("2026-02-22T19:30:00Z"),
        updatedAt: new Date("2026-02-22T19:30:00Z"),
        deletedAt: null
    },
    {
        title: "Node.js Design Patterns",
        authors: ["Mario Casciaro", "Luciano Mammino"],
        isbn: "978-1839214110",
        publisher: "Packt Publishing",
        categories: ["Tecnologia", "Node.js", "Backend"],
        pageCount: 664,
        price: 290.00,
        language: "EN",
        isAvailable: true,
        createdAt: new Date("2026-02-26T10:00:00Z"),
        updatedAt: new Date("2026-03-01T08:30:00Z"),
        deletedAt: null
    }
]);

/**
 * Consultar
 * fitro
 */ 
db.books.find({
    _id: ObjectId("6a9a04dd5567cf73d993ab9d")
});

// $ne, $lt, $gt, $regex
db.books.find(
    {
        deletedAt: {
            $eq: null
        }
    },
    {
        title: 1, createdAt: 1, authors: 1
    }
).sort({
    title: 1,
    authors: -1
}).skip(7).limit(7);

/**
 * Atualizar
 * db.books.updateOne
 */
db.books.updateMany(
    { _id: ObjectId('6a9a013d5567cf73d993ab9a') },
    {
        $set: {
            title: "Designing Data-Intensive Applications 2",
            isbn: "978-1449373321",
        },
        $addToSet: { authors: "Martin Kleppmann" }
    }
);

/**
 * Atualizar
 * db.books.updateMany
 * Soft delete >> updateAt: Date()
 */
db.books.deleteOne(
    { _id: ObjectId('6a9a104c5567cf73d993abac') }
);

/**
 * Index
 */
db.books.createIndex({ title: 1, isbn: 1 });
db.books.createIndex({ isbn: 1 }, { unique: true, sparce: true });
