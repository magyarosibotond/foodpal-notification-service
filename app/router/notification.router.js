import { notificationService } from '../service';

const express = require('express');
var router = express.Router();

router.post('/email', (req, res, next) => {
  notificationService.sendEmail(req.body.email, req.body.message)
    .then(response => res.send(response))
    .catch(err => next(err));
});

router.post('/sms', (req, res, next) => {
  notificationService.sendSms(req.body.phone_number, req.body.message)
    .then(response => req.send(response))
    .catch(err => next(err));
});

export { router as notificationRouter };
