import { Elysia } from 'elysia'
import { registerRestaurantRoute } from './routes/register-restaurant.route'
import { sendAuthLinkRoute } from './routes/send-auth-link.route'
import { authenticateFromLinkRoute } from './routes/authenticate.route'
import { signOutRoute } from './routes/sign-out.route'
import { getProfileRoute } from './routes/get-profile.route'
import { getManagedRestarauntRoute } from './routes/get-managed-restaurant.route'
import { getOrderDetailsRoute } from './routes/get-order-details.route'

const app = new Elysia()
  .use(registerRestaurantRoute)
  .use(sendAuthLinkRoute)
  .use(authenticateFromLinkRoute)
  .use(signOutRoute)
  .use(getProfileRoute)
  .use(getManagedRestarauntRoute)
  .use(getOrderDetailsRoute)
  .onError(({ code, error, set }) => {
    switch (code) {
      case 'VALIDATION': {
        set.status = error.status
        return error.toResponse()
      }
      default: {
        console.log(error)

        return new Response(null, { status: 500 })
      }
    }
  })

app.listen(3333, () => {
  console.log('HTTP server running!')
})
