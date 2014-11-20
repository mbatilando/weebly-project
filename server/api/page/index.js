'use strict';

var express = require('express');
var controller = require('./page.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/no-cache/', controller.nIndex);
// router.get('/:id', controller.show);
router.get('/:id.:optional?', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;