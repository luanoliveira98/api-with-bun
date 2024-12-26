import Elysia from 'elysia'
import { auth } from '../auth'

export const signOutRoute = new Elysia()
  .use(auth)
  .post('/sign-out', async ({ signOut }) => {
    signOut()
  })
