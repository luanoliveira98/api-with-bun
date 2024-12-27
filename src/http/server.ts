import { Elysia } from 'elysia'
import { registerRestaurantRoute } from './routes/register-restaurant.route'
import { sendAuthLinkRoute } from './routes/send-auth-link.route'
import { authenticateFromLinkRoute } from './routes/authenticate.route'
import { signOutRoute } from './routes/sign-out.route'
import { getProfileRoute } from './routes/get-profile.route'
import { getManagedRestarauntRoute } from './routes/get-managed-restaurant.route'
import { getOrderDetailsRoute } from './routes/get-order-details.route'
import { approveOrderRoute } from './routes/approve-order.route'
import { cancelOrderRoute } from './routes/cancel-order.route'
import { deliverOrderRoute } from './routes/deliver-order.route'
import { dispatchOrderRoute } from './routes/dispatch-order.route'
import { getOrdersRoute } from './routes/get-orders.route'
import { getMonthReceipt } from './routes/get-month-receipt.route'
import { getDayOrdersAmountRoute } from './routes/get-day-orders-amount.route'
import { getMonthOrdersAmount } from './routes/get-month-orders-amount.route'
import { getMonthCanceledOrdersAmountRoute } from './routes/get-month-canceled-orders-amount.route'
import { getPopularProductsRoute } from './routes/get-popular-products.route'
import { getDailyReceiptInPeriodRoute } from './routes/get-daily-receipt-in-period.route'

const app = new Elysia()
  .use(registerRestaurantRoute)
  .use(sendAuthLinkRoute)
  .use(authenticateFromLinkRoute)
  .use(signOutRoute)
  .use(getProfileRoute)
  .use(getManagedRestarauntRoute)
  .use(getOrderDetailsRoute)
  .use(approveOrderRoute)
  .use(cancelOrderRoute)
  .use(deliverOrderRoute)
  .use(dispatchOrderRoute)
  .use(getOrdersRoute)
  .use(getMonthReceipt)
  .use(getDayOrdersAmountRoute)
  .use(getMonthOrdersAmount)
  .use(getMonthCanceledOrdersAmountRoute)
  .use(getPopularProductsRoute)
  .use(getDailyReceiptInPeriodRoute)
  .onError(({ code, error, set }) => {
    switch (code) {
      case 'VALIDATION': {
        set.status = error.status
        return error.toResponse()
      }
      case 'NOT_FOUND': {
        return new Response(null, { status: 404 })
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
