const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const videoGamesRouter = require("./videoGamesRouter.js")
const gender = require("./genderRouter.js")

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/videogames", videoGamesRouter);
router.use("/gender", gender);


module.exports = router;
