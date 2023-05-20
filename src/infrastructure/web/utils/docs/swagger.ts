import { Application } from 'express'

import swaggerUi from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc'

const swaggerDefinition = {

  openapi: '3.0.0',
  info: {
    title: 'REST API Plaza de comidas',
    version: '2.0.0',
    description: `You have found the Plazoleta Documentation! These pages are dedicated to showing you all the ways you can use Plazoleta's products. Whether you're looking to create new restaurants 
      for your new customers or employees, receive automatic notifications related to your order statuses, view restaurants and manage the preparation of dishes, Plazoleta has something for you.
      \nThis page provides a comprehensive presentation of Plazoleta's content documentation, so you know where to start or where to look if you need information on a specific feature. The Plazoleta API is organized around REST.
      Our API has predictable resource-oriented URLs, accepts form-encoded request bodies, returns JSON-encoded responses, and uses standard HTTP response codes, authentication, and verbs.

    \nAPI that allows the management of orders from different restaurants in a food court.
    \nSome useful links:
    \n- [The Plazoleta repository](https://github.com/swagger-api/swagger-petstore)
    \n- [The source API definition for the Plazoleta](https://github.com/swagger-api/swagger-petstore/blob/master/src/main/resources/openapi.yaml)
    `,
    termsOfService: 'http://swagger.io/terms/',
    contact: {
      name: 'Kenny Luque',
      email: 'kenny.luque@pragma.com.co'
    },
    license: {
      name: 'Apache 2.0',
      url: 'http://www.apache.org/licenses/LICENSE-2.0.html'
    }
  },
  servers: [
    {
      url: 'http://localhost:3000'
    }
  ],
  contact: {
    email: 'kenny.luque@pragma.com.co'
  },
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer'
      }
    },
    schemas: {
      Login: {
        type: 'object',
        required: ['email', 'password'],
        properties: {
          email: {
            type: 'string',
            example: 'kenny1@pragma.com'
          },
          password: {
            type: 'string',
            example: 'kennyluquegaaa'
          }
        }
      },
      Usermaster: {
        type: 'object',
        required: ['name', 'lastName', 'identifier', 'phone', 'email', 'password', 'roleId'],
        properties: {
          name: {
            type: 'string',
            example: 'kenny'
          },
          lastName: {
            type: 'string',
            example: 'luque'
          },
          identifier: {
            type: 'integer($int64)',
            example: '7123124529'
          },
          phone: {
            type: 'string',
            example: '+23423456'
          },
          email: {
            type: 'string',
            example: 'ke4nny1234@pragma.com.co'
          },
          password: {
            type: 'string',
            example: 'kennyluquegaaa'
          },
          roleId: {
            type: 'integer($int64)',
            example: '1'
          }
        }
      },
      User: {
        type: 'object',
        required: ['name', 'lastName', 'identifier', 'phone', 'email', 'password'],
        properties: {
          name: {
            type: 'string',
            example: 'kenny'
          },
          lastName: {
            type: 'string',
            example: 'luque'
          },
          identifier: {
            type: 'integer($int64)',
            example: '72112234529'
          },
          phone: {
            type: 'string',
            example: '+234234456'
          },
          email: {
            type: 'string',
            example: 'ke4nny19374@pragma.com.co'
          },
          password: {
            type: 'string',
            example: 'kennyluquegaaa'
          }
        }
      },
      UserGet: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            example: 'kenny'
          },
          lastName: {
            type: 'string',
            example: 'luque'
          },
          identifier: {
            type: 'integer($int64)',
            example: '72112234529'
          },
          phone: {
            type: 'string',
            example: '+234234456'
          },
          email: {
            type: 'string',
            example: 'ke4nny19374@pragma.com.co'
          },
          roleId: {
            type: 'integer($int64)',
            example: '2'
          },
          createdAt: {
            type: 'date-time',
            example: '2023-05-12T15:39:50.476Z'
          }
        }
      }
    }
  }
}

const options = {
  swaggerDefinition,
  apis: ['./src/**/*.ts', './src/**/*.js']
}

const swaggerSpec = swaggerJSDoc(options)

function swaggerDocs (app: Application, port: number | string): void {
  // Swagger page
  app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

  // Docs in JSON format
  app.get('/api/v1/docs.json', (_req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.send(swaggerSpec)
  })

  console.log(
    `INFO:     Docs are available on http://localhost:${port}/api/v1/docs`
  )
}

export default swaggerDocs
