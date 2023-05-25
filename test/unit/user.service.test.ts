// import { UserService } from '../../src/application/services/user-service'
// import { IUserRepository } from '../../src/domain/repositories/iuser-repository'
// import { IRoleRepository } from '../../src/domain/repositories/irole-repository'
import { SequelizeUserRepository } from '../../src/infrastructure/database/repositories/sequelize-user-repository'
// import { SequelizeRoleRepository } from '../../src/infrastructure/database/repositories/sequelize-role-repository'
import { UserModel } from '../../src/domain/models/iuser-model'
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
//   phone: '123456789',
//   email: 'email@test.com',
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
//     const userRepository: IUserRepository = new SequelizeUserRepository()
//     const roleRepository: IRoleRepository = new SequelizeRoleRepository()
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

// Tests that a user can be saved successfully.
it('test_save_user_successfully', async () => {
  // Arrange
  const userRepo = new SequelizeUserRepository()
  const user = new UserModel({
    id: 1,
    name: 'John',
    lastName: 'Doe',
    identifier: 123456789,
    phone: '1234567890',
    email: 'johndoe@example.com',
    password: 'password123'
  })

  // Act
  const savedUser = await userRepo.save(user)

  // Assert
  expect(savedUser).toBeDefined()
  expect(savedUser.id).toBeDefined()
  expect(savedUser.name).toBe(user.name)
  expect(savedUser.lastName).toBe(user.lastName)
  expect(savedUser.identifier).toBe(user.identifier)
  expect(savedUser.phone).toBe(user.phone)
  expect(savedUser.email).toBe(user.email)
  expect(savedUser.password).toBe(user.password)
})

// Tests that all users can be found successfully.
it('test_find_all_users_successfully', async () => {
  // Arrange
  const userRepo = new SequelizeUserRepository()

  // Act
  const users = await userRepo.findAll()

  // Assert
  expect(users).toBeDefined()
  expect(users.length).toBeGreaterThan(0)
})
