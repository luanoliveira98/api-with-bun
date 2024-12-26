import { Elysia } from 'elysia'
import { registerRestaurantRoute } from './routes/register-restaurant.route'
import { sendAuthLinkRoute } from './routes/send-auth-link.route'
import { authenticateFromLinkRoute } from './routes/authenticate.route'
import { signOutRoute } from './routes/sign-out.route'

const app = new Elysia()
  .use(registerRestaurantRoute)
  .use(sendAuthLinkRoute)
  .use(authenticateFromLinkRoute)
  .use(signOutRoute)

app.listen(3333, () => {
  console.log('HTTP server running!')
})
