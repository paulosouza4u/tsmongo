import { IUserDTO } from "../dtos/user.dto";
import { User } from "../models/user";

export interface IUserProfile extends IUserDTO {
    id: string,
    booksRead: number,
    totalXP: number,
}

// Simulação do Banco
const users: IUserProfile[] = [
  {
    id: "user_id",
    name: "Nikola Tesla",
    username: "nikolatesla",
    email: "nikol@tesla.com.br",
    booksRead: 0,
    totalXP: 0,
  },
  {
    id: "1",
    name: "Ana Silva",
    username: "aninha_dev",
    email: "ana.silva@email.com",
    booksRead: 23,
    totalXP: 1850,
  },
  {
    id: "2",
    name: "Carlos Souza",
    username: "carlos_souza",
    email: "carlos.souza@empresa.com",
    booksRead: 47,
    totalXP: 3420,
  },
  {
    id: "3",
    name: "Mariana Oliveira",
    username: "mari_oli",
    email: "mariana.oliveira@dominio.com",
    booksRead: 12,
    totalXP: 780,
  },
  {
    id: "4",
    name: "João Pereira",
    username: "joao_p",
    email: "joao.pereira@provedor.com",
    booksRead: 38,
    totalXP: 2950,
  },
  {
    id: "5",
    name: "Fernanda Lima",
    username: "feh_lima",
    email: "fernanda.lima@trabalho.com",
    booksRead: 56,
    totalXP: 5100,
  },
];

export const getUserProfileById = (id: String) => {
    return users.filter(user => user.id === id)[0];
}

export const saveANewUser = (newUser: IUserDTO) => {
    // TODO: Implementar camanda Repository
    const user = User.createNewUser(newUser);

    const { username, name, email } = user;
    const userProfile = {
        id: '6', 
        username, name, email,
        booksRead: 0,
        totalXP: 0,
    }
    users.push(userProfile);

    return user;
}