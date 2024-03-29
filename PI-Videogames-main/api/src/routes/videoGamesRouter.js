const { Router } = require("express");
const { get_VideoGames, post_Video_Games, get_id_videoGame, get_all_platforms } = require("../controllers/videoGames")

const videoGamesRouter = Router();

videoGamesRouter.get("/", get_VideoGames)

videoGamesRouter.get("/platforms", get_all_platforms)

videoGamesRouter.post("/", post_Video_Games)

videoGamesRouter.get("/:id", get_id_videoGame)



module.exports = videoGamesRouter;