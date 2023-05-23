import request from 'supertest'

import app from '../../src/app'
import { loginTest, IdentifierEmailRandomValue } from './utils/functions'

describe('USER TEST', () => {
  describe('POST /api/v1/users create a new user', () => {
    it('validate auth Admin user', async function () {
      const response = await request(app)
        .post('/api/v1/users')
        .send()

      expect(response.status).toEqual(401)
    })

    it('validate required fields with Admin user', async function () {
      const token = await loginTest(app, 'admin')
      console.log(token)
      const response = await request(app)
        .post('/api/v1/users')
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        .set('Authorization', `Bearer ${token}`)
        .send()

      expect(response.status).toEqual(400)
      expect(response.headers['content-type']).toMatch(/json/)
      expect(response.body.error).toEqual('Bad Request')
      expect(response.body.message).toEqual('"name" is required. "lastName" is required. "identifier" is required. "phone" is required. "email" is required. "password" is required. "roleId" is required')
    })

    it('responds with status code 200 to create a new user with role Admin', async function () {
      const { identifierRandom, emailRandom } = IdentifierEmailRandomValue()
      const token: string = await loginTest(app, 'admin')

      const response = await request(app)
        .post('/api/v1/users')
        .set('Authorization', `Bearer ${token}`)
        .send({
          name: 'kenny',
          lastName: 'luque',
          identifier: identifierRandom,
          phone: '+23423456',
          email: emailRandom,
          password: 'kennyluquegaaa',
          roleId: '1'
        })
      expect(response.status).toEqual(200)
      expect(response.headers['content-type']).toMatch(/json/)
    })
  })
})

describe('OWNER TEST', () => {
  describe('POST /api/v1/users/owner  create owner account', () => {
    it('responds with status code 401 to create a new user Owner with role Admin without token authorization', async () => {
      const response = await request(app)
        .post('/api/v1/users/owner')
        .send()
      expect(response.status).toEqual(401)
    })

    it('responds with status code 400 to create a new user Owner with role Admin', async () => {
      const token: string = await loginTest(app, 'admin')

      const response = await request(app)
        .post('/api/v1/users/owner')
        .set('Authorization', `Bearer ${token}`)
        .send()
      expect(response.status).toEqual(400)
    })

    it('responds with status code 200 to create a new user Owner with role Admin sending correct fields', async () => {
      const { identifierRandom, emailRandom } = IdentifierEmailRandomValue()
      const token: string = await loginTest(app, 'admin')

      const response = await request(app)
        .post('/api/v1/users/owner')
        .set('Authorization', `Bearer ${token}`)
        .send({
          name: 'kenny',
          lastName: 'luque',
          identifier: identifierRandom,
          phone: '+23423456',
          email: emailRandom,
          password: 'kennyluquegaaa'
        })
      expect(response.status).toEqual(200)
      expect(response.headers['content-type']).toMatch(/json/)
    })
  })
})

describe('EMPLOYEE TEST', () => {
  describe('POST /api/v1/users/employee  create employee account', () => {
    it('responds with status code 401 to create a new user Employee with role Owner without token authorization', async () => {
      const response = await request(app)
        .post('/api/v1/users/employee')
        .send()
      expect(response.status).toEqual(401)
    })

    it('responds with status code 400 to create a new user Employee with role Owner', async () => {
      const token: string = await loginTest(app, 'owner')

      const response = await request(app)
        .post('/api/v1/users/employee')
        .set('Authorization', `Bearer ${token}`)
        .send()
      expect(response.status).toEqual(400)
    })

    it('responds with status code 200 to create a new user Employee with role Owner', async () => {
      const { identifierRandom, emailRandom } = IdentifierEmailRandomValue()
      const token: string = await loginTest(app, 'owner')

      const response = await request(app)
        .post('/api/v1/users/employee')
        .set('Authorization', `Bearer ${token}`)
        .send({
          name: 'kenny',
          lastName: 'luque',
          identifier: identifierRandom,
          phone: '+23423456',
          email: emailRandom,
          password: 'kennyluquegaaa'
        })
      expect(response.status).toEqual(200)
      expect(response.headers['content-type']).toMatch(/json/)
    })
  })
})
