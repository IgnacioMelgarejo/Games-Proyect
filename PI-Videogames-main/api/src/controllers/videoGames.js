
const axios = require("axios")
const { Videogame, Gender, Platform } = require("../db")
const { API_KEY } = process.env;
const { Op } = require("sequelize");


const get_All_VideoGames = async () => {
    let dataDb = await Videogame.findAll({
        include: {
            model: Gender,
            through: {
                attributes: [],
            },
        },
    })
    console.log(dataDb)
    var array = []
    for (let i = 1; i <= 5; i++) {
        let apiInfo = await axios(`https://api.rawg.io/api/games?key=${API_KEY}&page=${i}`)
        apiInfo.data.results.map(e => {
            array.push({
                id: e.id,
                name: e.name,
                released: e.released,
                rating: e.rating,
                gender: e.genres.map(e => e.name).join(', '),
                platforms: e.platforms.map(e => e.platform.name).join(', '),
                image: e.background_image,

            });
        });
    }

    return [...array, ...dataDb]

}

const get_VideoGames = async (req, res) => {
    try {
        const { name } = req.query
        let videoGames = await get_All_VideoGames()
        if (name) {
            const VideoGameName = videoGames.filter(
                e => e.name.toLowerCase().includes(name.toLowerCase()))
            res.status(200).send(VideoGameName)
        } else {
            res.status(200).send(videoGames)
        }
    } catch (error) {
        res.status(404).send(error)
    }
}

const get_all_platforms = async (req, res) => {
    const apiURL3 = await axios.get(`https://api.rawg.io/api/platforms?key=${API_KEY}`)
    const apiPlatf = await apiURL3.data.results.map(el => el.name)

    apiPlatf.forEach(el => {
        Platform.findOrCreate({
            where: {
                name: el
            }
        })
    });
    const allPlatf = await Platform.findAll();

    res.status(200).send(allPlatf)
}

const post_Video_Games = async (req, res) => {
    try {
        const { name, description, released, rating, image, platforms, gender } = req.body
        console.log(req.body)
        if (!name || !description || !platforms) return res.status(400).send({ message: "information required" });
        console.log()

        const newVideoGame = await Videogame.create({ name, description, released, rating, image, platforms: platforms.toString() });
        console.log("genderACA", gender)

        let genderArray = gender.split(", ");
        console.log("genderArray",genderArray )

        let genderDb = await Gender.findAll({
            where: {
                name: {
                    [Op.in]: genderArray

                }
            }


        });

        console.log("gender db", genderDb)

        await newVideoGame.addGender(genderDb)

        res.status(200).send(newVideoGame)
    } catch (error) {
        res.status(404).send({ error: error.message })
    }
}





const get_id_videoGame = async (req, res) => {
    try {
        const { id } = req.params
        const regex = /([a-zA-Z]+([0-9]+[a-zA-Z]+)+)/
        if (regex.test(id)) {
            let videoGameDb = await Videogame.findAll({
                where: {
                    id: id
                },
                include: {
                    model: Gender,
                    through: {
                        attributes: [],
                    },
                }
            });
            return res.status(200).send(videoGameDb)
        } else {
            let apiInfoID = await axios(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
            let description = {
                name: apiInfoID.data.name,
                released: apiInfoID.data.released,
                rating: apiInfoID.data.rating,
                gender: apiInfoID.data.genres.map(e => e.name).join(', '),
                description: apiInfoID.data.description_raw,
                platforms: apiInfoID.data.platforms.map(e => e.platform.name).join(', '),
                image: apiInfoID.data.background_image
            }
            return res.status(200).send(description);
        }
    } catch (error) {
        res.status(404).send(error)
    }
}



module.exports = { get_All_VideoGames, get_VideoGames, post_Video_Games, get_id_videoGame, get_all_platforms };