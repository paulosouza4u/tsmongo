import { User } from "../models/user";

export default abstract class UserRepository {
    abstract getById(id: string): User | null;
}

export class UserRepositoryMemory extends UserRepository {

    // Simulação do Banco
    users: User[] = [
    new User("user_id", "Nikola Tesla", "nikolatesla", "nikol@tesla.com.br", 1000),
    new User("1", "Ana Silva", "aninha_dev", "ana.silva@email.com", 1500),
    new User("2", "Carlos Souza", "carlos_souza", "carlos.souza@empresa.com", 5000),
    new User("3", "Mariana Oliveira", "mari_oli", "mariana.oliveira@dominio", 6000),
    new User("4", "João Pereira", "joao_p", "joao.pereira@provedor.com", 10000),
    new User("5", "Fernanda Lima", "feh_lima", "fernanda.lima@trabalho.com", 100),
    ];

    getById(id: string): User | null {
        return this.users.find(user => user.id === id) ?? null;
    }
    
}