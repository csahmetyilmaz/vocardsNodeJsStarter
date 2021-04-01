//{getAllCards,getOneCard,addOneCard,updateOneCard,deleteOneCard}
//{word,t_word,word_details,t_word_details,author,shared_with, createdAt, updatedAt}

const Card = require('../models/Card')


module.exports = {
    getAllCards: async (req, res, next) => {
        const cards = await Card.find();
        res.status(200).json({
            success: true,
            message: "salut les cards",
            data: cards
        })
    },
    getOneCard: async (req, res, next) => {
        const id = req.params.id;
        console.log("getOneCard id : " + id)
        const card = await Card.findById(id);
        res.status(200).json({
            success: true,
            message: "card details",
            data: card
        })
    },
    addOneCard: async (req, res, next) => {
        const information = req.body;
        const card = await Card.create({
            ...information
        })
        res.status(200).json({
            success: true,
            message: "card created",
            data: card
        })

    },
    updateOneCard: async (req, res, next) => {
        const id = req.params.id;
        const {word, t_word, word_details, t_word_details, author, shared_with, createdAt, updatedAt} = req.body;
        console.log("update icin id : " + id);
        const updateQuery = {word, t_word, word_details, t_word_details, author, shared_with, createdAt, updatedAt};

        const card = await Card.findByIdAndUpdate(id, updateQuery, {new: true});
        res.status(200).json({
            success: true,
            message: "card updated!",
            data: card
        })
    },
    deleteOneCard: async (req, res, next) => {
        const id = req.params.id;
        console.log("delete icin id : " + id);
        const card = await Card.findByIdAndRemove(id);
        res.status(200).json({
            success: true,
            message: "card deleted!",
            data: card
        })
    }
}



