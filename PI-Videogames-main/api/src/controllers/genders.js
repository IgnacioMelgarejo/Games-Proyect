const { Gender } = require("../db");
const { API_KEY } = process.env;
const axios = require("axios")


const Get_genders = async () => {
    var generos = []
    
    let gendersApi = await axios(`https://api.rawg.io/api/genres?key=${API_KEY}`)
    

    gendersApi.data.results.map(e => generos.push(e.name));
    
    generos.map(async (d) => {
        await Gender.create({ name: d });
    });
    
}

const all_genders = async (req, res) => {
    try {
        const gendersDb = await Gender.findAll()
        
        if (gendersDb.length === 0)  await Get_genders() 

        res.status(200).send(gendersDb)

    } catch (error) {
        res.status(404).send(error)
    }
}



module.exports = { all_genders};