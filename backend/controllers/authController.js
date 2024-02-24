const User = require('../models/userSchema');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { ErrorHandler } = require('../utils/ErrorHandler');

const isEmpty = (value) => !value.trim();

const Register = async (req, res) => {
    try {
        const { name, email, password, confirmPassword } = req.body;

        if (isEmpty(name) || isEmpty(email) || isEmpty(password) || isEmpty(confirmPassword)) {
            return res.status(400).json({
                error: 'All fields are mandatory!'
            });
        }

        if (password !== confirmPassword) {
            return res.status(400).json({
                error: 'Password did not match!'
            });
        }

        const encryptedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, email, password: encryptedPassword });
        await newUser.save();

        const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET);

        return res.status(200).json({
            message: 'Registration Successfull!',
            token
        });
    } catch (error) {
        return ErrorHandler(res, 500, 'Internal Server Error!');
    }
};

const Login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (isEmpty(email)) {
            return res.status(400).json({
                error: 'Please enter your email!'
            });
        }

        if (isEmpty(password)) {
            return res.status(400).json({
                error: 'Please enter password to login'
            });
        }

        const validUser = await User.findOne({ email }, 'email password');

        if (!validUser) {
            return ErrorHandler(res, 401, 'User not found, please register again!');
        }

        const isValidPassword = await bcrypt.compare(password, validUser.password);

        if (!isValidPassword) {
            return ErrorHandler(res, 401, 'Invalid Password!');
        }

        const token = jwt.sign({ userId: validUser._id }, process.env.JWT_SECRET);

        return res.status(200).json({
            message: 'Login Successfull!',
            token
        });
    } catch (error) {
        return ErrorHandler(res, 500, 'Internal Server Error!');
    }
};

module.exports = { Register, Login };
