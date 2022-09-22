const express = require('express')
const createTrilhas = require('../controllers/trilhas/createTrilhas')
const getTrilhas = require('../controllers/trilhas/getTrilhas')
const trilhasRoutes = express.Router()

trilhasRoutes.post("/trilhas", createTrilhas)
trilhasRoutes.get("/trilhas", getTrilhas)

module.exports = trilhasRoutes;