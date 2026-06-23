const { validationResult } = require('express-validator');
const orderModel = require('../models/order.model');
const supplierModel = require('../models/supplier.model');

module.exports.createOrder = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { supplier, quantity, deliveryLocation } = req.body;
  const selectedSupplier = await supplierModel.findOne({
    _id: supplier,
    approved: true,
  });

  if (!selectedSupplier) {
    return res.status(404).json({ message: 'Supplier not found or not approved' });
  }

  if (selectedSupplier.waterStock < quantity) {
    return res.status(400).json({ message: 'Supplier does not have enough stock' });
  }

  const amount = quantity * 20;

  const order = await orderModel.create({
    customer: req.user._id,
    supplier,
    quantity,
    amount,
    deliveryLocation,
  });

  selectedSupplier.waterStock -= quantity;
  await selectedSupplier.save();

  res.status(201).json({ order });
};

module.exports.getMyOrders = async (req, res) => {
  const orders = await orderModel
    .find({ customer: req.user._id })
    .populate('supplier')
    .sort({ createdAt: -1 });

  res.status(200).json({ orders });
};

module.exports.getSupplierOrders = async (req, res) => {
  const supplier = await supplierModel.findOne({ user: req.user._id });

  if (!supplier) {
    return res.status(404).json({ message: 'Supplier profile not found' });
  }

  const orders = await orderModel
    .find({ supplier: supplier._id })
    .populate('customer', 'fullname email phone location')
    .sort({ createdAt: -1 });

  res.status(200).json({ orders });
};

module.exports.updateOrderStatus = async (req, res) => {
  const { status } = req.body;
  const allowedStatuses = ['Pending', 'Accepted', 'Out for Delivery', 'Delivered', 'Cancelled'];

  if (!allowedStatuses.includes(status)) {
    return res.status(400).json({ message: 'Invalid order status' });
  }

  const supplier = await supplierModel.findOne({ user: req.user._id });

  if (!supplier) {
    return res.status(404).json({ message: 'Supplier profile not found' });
  }

  const order = await orderModel.findOneAndUpdate(
    { _id: req.params.id, supplier: supplier._id },
    { status },
    { new: true }
  );

  if (!order) {
    return res.status(404).json({ message: 'Order not found' });
  }

  res.status(200).json({ order });
};
