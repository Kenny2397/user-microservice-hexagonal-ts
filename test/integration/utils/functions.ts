import { Application } from 'express'
import request from 'supertest'

interface EmailRole {
  admin: string
  owner: string
  employee: string
}
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export async function loginTest (app: Application, role: keyof EmailRole) {
  const emailRole: EmailRole = {
    admin: 'kenny1@pragma.com',
    owner: 'kenny2@pragma.com',
    employee: 'kenny3@pragma.com'
  }

  const login = await request(app)
    .post('/api/v1/auth/login')
    .send({
      email: emailRole[role],
      password: 'kennyluquegaaa'
    })

  return login.body.token
}

export function IdentifierEmailRandomValue (): any {
  const randomNum = Math.floor(Math.random() * 9000) + 1000

  const identifierRandom = `456${randomNum}324`
  const emailRandom = `kenny${randomNum}@pragma.com`

  return {
    identifierRandom,
    emailRandom
  }
}
