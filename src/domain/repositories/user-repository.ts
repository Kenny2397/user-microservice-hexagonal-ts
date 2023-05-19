import { User, CreateUser } from '../models/user'

export interface UserRepository {
  findById(id: number): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  create(user: CreateUser): Promise<User>;
  update(id: number, userData: User): Promise<any>;
  delete(id: number): Promise<void>;
  findAll(): Promise<User[]>;
}
