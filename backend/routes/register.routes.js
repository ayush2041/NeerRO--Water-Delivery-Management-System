const express = require('express');
const router = express.Router();
const {body} = require("express-validator");
const userController = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/register', [
    body('fullname.firstname').isLength({min:3}).withMessage('First name must be at least 3 characters long'),
    body('email').isEmail().withMessage('Please provide a valid email address'),
    body('phone').isLength({ min: 10 }).withMessage('Phone number must be at least 10 characters long'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('location.latitude').isNumeric().withMessage('Latitude is required'),
    body('location.longitude').isNumeric().withMessage('Longitude is required'),
  ],
    userController.registerUser);

router.post('/login', [
    body('email').isEmail().withMessage('Please provide a valid email address'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  ],
    userController.loginUser);

router.get('/profile', authMiddleware.authUser, userController.getUserProfile);

module.exports = router;
