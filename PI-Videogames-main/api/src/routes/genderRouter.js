const {Router} = require("express")
const { all_genders} = require("../controllers/genders.js")

const genderRouter = Router()

genderRouter.get("/", all_genders )


module.exports = genderRouter;