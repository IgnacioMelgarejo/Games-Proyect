const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const videoGamesRouter = require("./videoGamesRouter.js")
const genderRouter = require("./genderRouter.js")

const router = Router();


router.use("/videogames", videoGamesRouter);

router.use("/gender", genderRouter);


module.exports = router;
