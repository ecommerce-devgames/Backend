const { Cart, Library, Game } = require("../models");
const { mailer } = require("../utils/mailer");

const cartItems = async (req, res, next) => {

    const cart = await Cart.findOne({ where: { userId: req.params.userId }})

    if (!cart) return res.status(404).send("No cart found.");

    const cartGames = await cart.getGames({ joinTableAttributes: [] });

    if (!cartGames.length) return res.send([]);

    return res.send(cartGames);
}

const actionOnCart = async (req, res, next) => {

    const cart = await Cart.findOne({ where: { userId: req.params.userId }})

    if (!cart) return res.status(404).send("No cart found.");

    const game = await Game.findByPk(req.params.gameId)
    
    if (!game) return res.status(404).send("No game found.");

    if (req.params.action === "addItem") {
        
        await cart.addGame(game)
        return res.status(201).send("Game added to cart!");
    }

    if (req.params.action === "removeItem") {
        
        await cart.removeGame(game)
        return res.send("Game removed from cart!");
    }
}

const purchaseCart = async (req, res, next) => {

    const cart = await Cart.findOne({ where: { userId: req.params.userId }});

    if (!cart) return res.status(404).send("No cart found.");
    
    const library = await Library.findOne({ where: { userId: req.params.userId }});

    if (!library) return res.status(404).send("No library found.");

    const cartGames = await cart.getGames({ joinTableAttributes: [] });

    if (!cartGames.length) return res.send("Your cart seems empty...");

    await library.addGames(cartGames);
    await cart.setGames([]);

    const { dataValues } = await cart.getUser();
    const { name, lastName, email } = dataValues;

    await mailer (name, lastName, email, cartGames);

    return res.send("Purchase Successful!"); 
}

const historyItems = async (req, res, next) => {

    const library = await Library.findOne({ where: { userId: req.params.userId }});

    if (!library) return res.status(404).send("No library found.");

    const libraryGames = await library.getGames({ joinTableAttributes: [] });

    if (!libraryGames.length) return res.send([]);

    return res.send(libraryGames); 
}

module.exports = { cartItems, actionOnCart, purchaseCart, historyItems }