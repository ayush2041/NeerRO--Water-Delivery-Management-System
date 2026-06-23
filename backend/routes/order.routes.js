const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const orderController = require('../controllers/order.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.post(
  '/',
  authMiddleware.authUser,
  [
    body('supplier').isMongoId().withMessage('Valid supplier id is required'),
    body('quantity').isNumeric().withMessage('Quantity must be a number'),
    body('deliveryLocation.latitude').isNumeric().withMessage('Latitude is required'),
    body('deliveryLocation.longitude').isNumeric().withMessage('Longitude is required'),
  ],
  orderController.createOrder
);

router.get('/my-orders', authMiddleware.authUser, orderController.getMyOrders);

router.get(
  '/supplier-orders',
  authMiddleware.authUser,
  authMiddleware.allowRoles('supplier', 'admin'),
  orderController.getSupplierOrders
);

router.patch(
  '/:id/status',
  authMiddleware.authUser,
  authMiddleware.allowRoles('supplier', 'admin'),
  orderController.updateOrderStatus
);

module.exports = router;
