const { validationResult } = require('express-validator');
const supplierModel = require('../models/supplier.model');

module.exports.createSupplierProfile = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const existingSupplier = await supplierModel.findOne({ user: req.user._id });

  if (existingSupplier) {
    return res.status(409).json({ message: 'Supplier profile already exists' });
  }

  const { shopName, address, city, waterStock } = req.body;

  const supplier = await supplierModel.create({
    user: req.user._id,
    shopName,
    address,
    city,
    waterStock,
  });

  res.status(201).json({ supplier });
};

module.exports.getSuppliers = async (req, res) => {
  const suppliers = await supplierModel
    .find({ approved: true })
    .populate('user', 'fullname email phone location role');

  res.status(200).json({ suppliers });
};

module.exports.getMySupplierProfile = async (req, res) => {
  const supplier = await supplierModel
    .findOne({ user: req.user._id })
    .populate('user', 'fullname email phone location role');

  if (!supplier) {
    return res.status(404).json({ message: 'Supplier profile not found' });
  }

  res.status(200).json({ supplier });
};

module.exports.updateSupplierStock = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const supplier = await supplierModel.findOneAndUpdate(
    { user: req.user._id },
    { waterStock: req.body.waterStock },
    { new: true }
  );

  if (!supplier) {
    return res.status(404).json({ message: 'Supplier profile not found' });
  }

  res.status(200).json({ supplier });
};
