const express = require('express');
const alterandoPostController = require('../controllers/posts/alterandoPostController');
const criandoPostController = require('../controllers/posts/criandoPostController');
const deletandoPostController = require('../controllers/posts/deletandoPostController');
const pegandoPostController = require('../controllers/posts/pegandoPostController');
const postsRoute = express.Router();

postsRoute.post('/post', criandoPostController);
postsRoute.get('/post', pegandoPostController);
postsRoute.put('/post/:id', alterandoPostController);
postsRoute.delete('/post/:id', deletandoPostController);

module.exports = postsRoute;