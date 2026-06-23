const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const supplierController = require('../controllers/supplier.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.post(
  '/',
  authMiddleware.authUser,
  authMiddleware.allowRoles('supplier', 'admin'),
  [
    body('shopName').notEmpty().withMessage('Shop name is required'),
    body('address').notEmpty().withMessage('Address is required'),
    body('city').notEmpty().withMessage('City is required'),
    body('waterStock').optional().isNumeric().withMessage('Water stock must be a number'),
  ],
  supplierController.createSupplierProfile
);

router.get('/', authMiddleware.authUser, supplierController.getSuppliers);

router.get(
  '/me',
  authMiddleware.authUser,
  authMiddleware.allowRoles('supplier', 'admin'),
  supplierController.getMySupplierProfile
);

router.patch(
  '/stock',
  authMiddleware.authUser,
  authMiddleware.allowRoles('supplier', 'admin'),
  [
    body('waterStock').isNumeric().withMessage('Water stock must be a number'),
  ],
  supplierController.updateSupplierStock
);

module.exports = router;
