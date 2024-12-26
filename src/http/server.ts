import { Elysia } from 'elysia'
import { registerRestaurantRoute } from './routes/register-restaurant.route'
import { sendAuthLinkRoute } from './routes/send-auth-link.route'
import { authenticateFromLinkRoute } from './routes/authenticate.route'

const app = new Elysia()
  .use(registerRestaurantRoute)
  .use(sendAuthLinkRoute)
  .use(authenticateFromLinkRoute)

app.listen(3333, () => {
  console.log('HTTP server running!')
})
