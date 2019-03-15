const express = require('express');
const router = express.Router();
const upLoader = require('../configs/storage.config');
const cardsController = require('../controllers/cards.controller');



router.get('/', cardsController.list);
router.post('/', upLoader.single('attach'), cardsController.create);
router.get('/:id', cardsController.detail);
router.put('/:id', cardsController.update);
router.delete('/:id', cardsController.delete);

module.exports = router;
