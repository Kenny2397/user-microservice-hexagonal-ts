// import * as awilix from 'awilix'
// import { UserController } from '../controllers/user-controller'
// import { UserService } from '../../../application/services/user-service'
// // import { IUserService } from '../../../domain/use-cases/iuser-service'
// import { SequelizeUserRepository } from '../../database/repositories/sequelize-user-repository'

// const container = awilix.createContainer()

// // container.loadModules(['src/**/*.ts', 'repositories/**/*.ts'], {
// //   resolverOptions: {
// //     injectionMode: awilix.InjectionMode.CLASSIC
// //   }
// // })

// container.register({
//   userService: awilix.asClass(UserService),
//   userController: awilix.asClass(UserController),
//   sequelizeUserRepository: awilix.asClass(SequelizeUserRepository)
// })

// container.register(
//   'iUserRepository', awilix.asClass(UserService).singleton())

// export const userService = container.resolve('userService')
// export const userController = container.resolve('userController')
// export const userRepositoryImpl = container.resolve('sequelizeUserRepository')
