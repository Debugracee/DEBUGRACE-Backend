const express = require('express')
const createTrilhas = require('../controllers/trilhas/createTrilhas')
const deleteTrilhas = require('../controllers/trilhas/deleteTrilhas')
const getTrilhas = require('../controllers/trilhas/getTrilhas')
const putTrilha = require('../controllers/trilhas/putTrilhas')
const trilhasRoutes = express.Router()

trilhasRoutes.post("/trilhas", createTrilhas)
trilhasRoutes.get("/trilhas", getTrilhas)
trilhasRoutes.put("/trilhas/:id", putTrilha)
trilhasRoutes.delete("/trilhas/:id", deleteTrilhas)

module.exports = trilhasRoutes;
