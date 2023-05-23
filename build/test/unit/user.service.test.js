"use strict";
// import UserService from '../../src/application/services/user-service'
// import { UserRepository } from '../../src/domain/repositories/user-repository'
// import { RoleRepository } from '../../src/domain/repositories/role-repository'
// import UserRepositoryImpl from '../../src/infrastructure/database/repositories/sequelize-user-repository'
// import RoleRepositoryImpl from '../../src/infrastructure/database/repositories/sequelize-role-repository'
// import { IUserDTO } from '../../src/application/dtos/user-dto'
// const fakeUserInput: IUserDTO = {
//   name: 'test',
//   lastName: 'test',
//   identifier: 2345346575,
//   phone: '123456789',
//   email: 'email@test.com',
//   password: 'password',
//   roleId: 1
// }
// const fakeUserOutput: IUserDTO = {
//   name: 'test',
//   lastName: 'test',
//   identifier: 123456789,
//   phone: '123456789',//   email: 'email@test.com',
//   password: 'password',
//   roleId: 1
// }
// const spyCreate = jest.fn()
// const spyFindByEmail = jest.fn()
// // Stub: son programas que simulan el comportamiento de los componentes de software de los que depende un módulo que se somete a pruebas.
// // prueba de caja negra
// // const SequelizeStub = {
// //   create: (_fakeUserInput: IUserDTO): IUserDTO => {
// //     return fakeUserOutput
// //   }
// // }
// const SequelizeStub = {
//   create: spyCreate,
//   findByEmail: spyFindByEmail
// }
// jest.mock('./../../src/infrastructure/libs/sequelize.ts', () => {
//   jest.fn().mockImplementation(() => {
//     return SequelizeStub
//   })
// })
// describe('createUser', () => {
//   let userService: UserService
//   beforeEach(() => {
//     const userRepository: UserRepository = new UserRepositoryImpl()
//     const roleRepository: RoleRepository = new RoleRepositoryImpl()
//     userService = new UserService(userRepository, roleRepository)
//     jest.clearAllMocks()
//   })
//   afterEach(() => {
//     // Realiza las tareas de limpieza necesarias después de cada prueba.
//   })
//   describe('when the email already exists', () => {
//     test('should create a new user if the email does not exist', async () => {
//       // arrange
//       spyCreate.mockResolvedValue(fakeUserOutput)
//       spyFindByEmail.mockResolvedValue({ email: 'email@test.com' })
//       // act
//       const newUser = await userService.createUser(fakeUserInput)
//       // assert
//       expect(newUser).toEqual(fakeUserOutput)
//       expect(spyCreate).toHaveBeenCalledTimes(1)
//       expect(spyCreate).toHaveBeenCalledWith(fakeUserInput)
//       // const userDto = { email: 'test@example.com', password: 'password' }
//       // const existingUser = null
//       // const createdUser = { id: 1, ...userDto, password: 'hashedPassword' }
//       // const spy = jest.spyOn(userService, 'findByEmail') // Simula el resultado de la función findByEmail
//       //   .mockResolvedValue(existingUser) // Simula el resultado de la función findByEmail
//       // jest.spyOn(UserRepositoryImpl, 'create').mockResolvedValue(createdUser) // Simula el resultado de la función create
//       // jest.spyOn(global, 'hashPassword').mockResolvedValue('hashedPassword') // Simula el resultado de la función hashPassword
//       // const result = await createdUser(userDto)
//       // // Asegúrate de que se hayan llamado a los métodos esperados con los argumentos correctos
//       // expect(UserRepositoryImpl.findByEmail).toHaveBeenCalledWith(userDto.email)
//       // expect(global.hashPassword).toHaveBeenCalledWith(userDto.password)
//       // expect(UserRepositoryImpl.create).toHaveBeenCalledWith({ ...userDto, password: 'hashedPassword' })
//       // // Verifica que el resultado retornado sea el usuario creado
//       // expect(result).toEqual(createdUser)
//     })
//   })
// })
