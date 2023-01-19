const Router = require('express')
const router = new Router()

const userRouter = require('../routes/userRouter')
const roleRouter = require('../routes/roleRouter')
const couponsRouter = require('../routes/couponsRouter')
const reviewsRouter = require('../routes/reviewsRouter')



router.use('/users', userRouter)
router.use('/coupons', couponsRouter)
router.use('/reviews', reviewsRouter)
router.use('/role', roleRouter)


module.exports = router;