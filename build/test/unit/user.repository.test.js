"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { RoleRepository } from '../../src/domain/repositories/role-repository'
const sequelize_user_repository_1 = require("../../src/infrastructure/database/repositories/sequelize-user-repository");
const fakeUserInput = {
    name: 'test',
    lastName: 'test',
    identifier: 2345346575,
    phone: '123456789',
    email: 'email@test.com',
    password: 'password',
    roleId: 1
};
const fakeUserOutput = {
    id: 1,
    name: 'test',
    lastName: 'test',
    identifier: 123456789,
    phone: '123456789',
    email: 'email@test.com',
    password: 'password',
    roleId: 1,
    createdAt: new Date()
};
const mockCreate = jest.fn();
// Stub: son programas que simulan el comportamiento de los componentes de software de los que depende un módulo que se somete a pruebas.
// prueba de caja negra
// const SequelizeStub = {
//   create: (_fakeUserInput: IUserDTO): IUserDTO => {
//     return fakeUserOutput
//   }
// }
// const SequelizeStub = {
//   create: mockCreate
// }
jest.mock('./../../src/infrastructure/libs/sequelize.ts', () => {
    jest.fn().mockImplementation(() => ({
        create: mockCreate
    }));
});
describe('createUser repository impl', () => {
    let userRepository;
    beforeEach(() => {
        userRepository = new sequelize_user_repository_1.SequelizeUserRepository();
        jest.clearAllMocks();
    });
    afterEach(() => {
        // Realiza las tareas de limpieza necesarias después de cada prueba.
    });
    describe('function create', () => {
        test('should create a new user using sequelize create', () => __awaiter(void 0, void 0, void 0, function* () {
            // arrange
            mockCreate.mockResolvedValue(fakeUserOutput);
            // act
            const newUser = yield userRepository.save(fakeUserInput);
            // assert
            expect(newUser).toEqual(fakeUserOutput);
            expect(mockCreate).toHaveBeenCalledTimes(1);
            expect(mockCreate).toHaveBeenCalledWith(fakeUserInput);
            // const userDto = { email: 'test@example.com', password: 'password' }
            // const existingUser = null
            // const createdUser = { id: 1, ...userDto, password: 'hashedPassword' }
            // const spy = jest.spyOn(userService, 'findByEmail') // Simula el resultado de la función findByEmail
            //   .mockResolvedValue(existingUser) // Simula el resultado de la función findByEmail
            // jest.spyOn(UserRepositoryImpl, 'create').mockResolvedValue(createdUser) // Simula el resultado de la función create
            // jest.spyOn(global, 'hashPassword').mockResolvedValue('hashedPassword') // Simula el resultado de la función hashPassword
            // const result = await createdUser(userDto)
            // // Asegúrate de que se hayan llamado a los métodos esperados con los argumentos correctos
            // expect(UserRepositoryImpl.findByEmail).toHaveBeenCalledWith(userDto.email)
            // expect(global.hashPassword).toHaveBeenCalledWith(userDto.password)
            // expect(UserRepositoryImpl.create).toHaveBeenCalledWith({ ...userDto, password: 'hashedPassword' })
            // // Verifica que el resultado retornado sea el usuario creado
            // expect(result).toEqual(createdUser)
        }));
    });
});
