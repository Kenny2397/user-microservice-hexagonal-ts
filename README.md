#### Pasos a seguir

1.- Instalar typescript
```bash
npm install -g typescript
```
2.- Instalar ts-node
```bash
npm install -g ts-node
```
3.- Init typescript
```bash
tsc --init
```
4.- Instalar ts-node-dev
```bash
pnpm i ts-node-dev -D
```
5.- Instalar sequelize-cli
```bash
npm install -g sequelize-cli
```
6.- Instalar jest
```bash
npm install -g jest
```
7.- Inicializar npm
```bash
npm init -y
```
8.- Inicializar el linter
```bash
npx eslint --init
```
9.- Agregar configuracion de vscode en carpeta .vscode/settings.json
```json
{
    "editor.detectIndentation": true,
    "editor.tabSize": 2,
    "editor.codeActionsOnSave": {
        "source.fixAll": true 
    },
    "jest.pathToJest": "node node_modules/jest/bin/jest.js",
}
```
10.- Estructura de carpetas del proyecto siguiendo la arquitectura hexagonal y clean code
```bash
project
├── src
│   ├── config
│   │   ├── config.ts 
│   ├── application
│   │   ├── dtos
│   │   │   ├── user-dto.ts
│   │   │   └── role-dto.ts
│   │   ├── services
│   │   │   ├── user-service.ts
│   │   │   └── role-service.ts
│   │   └── errors
│   │       ├── custom-error.ts
│   ├── domain
│   │   ├── models
│   │   │   ├── iuser-model.ts
│   │   │   └── irole-model.ts 
│   │   ├── repositories
│   │   │   ├── iuser-repository.ts
│   │   │   └── irole-repository.ts
│   ├── infrastructure
│   │   ├── database
│   │   │   ├── index.ts
│   │   │   ├── models
│   │   │   │   ├── user-model.ts
│   │   │   │   └── role-model.ts
│   │   │   ├── repositories
│   │   │   │   ├── sequelize-user-repository.ts
│   │   │   │   └── sequelize-role-repository.ts
│   │   ├── encryption
│   │   │   ├── hash-service.ts
│   │   ├── libs
│   │   │   ├── sequelize.ts
│   │   ├── entities
│   │   │   ├── user-entity.ts
│   │   │   └── role-entity.ts
│   │   ├── authentication
│   │   │   ├── jwt-service.ts
│   │   │   ├── passport-config.ts
│   │   │   └── local-strategy.ts
│   │   ├── middlewares
│   │   │   ├── error-handler.ts
│   │   │   └── auth-middleware.ts
│   │   └── web
│   │       ├── controllers
│   │       │   ├── user-controller.ts
│   │       │   ├── role-controller.ts
│   │       │   └── auth-controller.ts
│   │       ├── dependencies
│   │       │   ├── container.ts
│   │       ├── routes
│   │       │   ├── user-routes.ts
│   │       │   ├── role-routes.ts
│   │       │   └── index.ts
│   │       ├── utils
│   │       │   ├── docs
│   │       │   │   └── swagger.ts
│   │       │   └── shared
│   │       │       └── constants.ts
│   │       ├── app.ts
│   │       └── index.ts
├── tests
│   ├── unit
│   ├── integration
│   └── ...
├── .eslintrc.js
├── package.json
├── tsconfig.json
└── ...
```
