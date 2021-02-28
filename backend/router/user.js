const express = require('express');
const userRoute = express.Router();

let userModel = require('../models/User');

userRoute.route('/').get((req, res, next) => {

    userModel.find((error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
})

userRoute.route('/users').post((req, res, next) => {
    userModel.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
})

userRoute.route('/users/:id/edit').get((req, res, next) => {
    userModel.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    })
})


userRoute.route('/users/:id').put((req, res, next) => {
    userModel.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
            console.log("Update suscess");
        }
    })
})

userRoute.route('/users/:id').delete((req, res, next) => {
    userModel.findByIdAndDelete(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg : data
            });
            console.log("Delete suscess");
        }
    })
})

module.exports = userRoute;