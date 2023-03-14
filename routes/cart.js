const express = require("express");
const { Cart, Game } = require("../models");

const router = express.Router();

router.get ("/:userId", async (req, res, next) => {

    const cart = await Cart.findOne({ where: { userId: req.params.userId }}).catch(error => next(error));

    if (!cart) return res.sendStatus (404);

    const cartContents = await cart.getGames().catch(error => next(error));

    if (!cartContents.length) return res.send("El carrito está vacío.");

    return res.send(cartContents);
});

router.post("/:action/:userId/:gameId", async (req, res, next) => {

    const cart = await Cart.findOne({ where: { userId: req.params.userId }}).catch(error => next(error));

    if (!cart) return res.sendStatus (404);

    const game = await Game.findByPk(req.params.gameId).catch(error => next(error));
    
    if (!game) return res.sendStatus (404);

    if (req.params.action === "addItem") {
        
        await cart.addGame(game).catch(error => next(error));
        return res.sendStatus (201);
    }

    if (req.params.action === "removeItem") {
        
        await cart.removeGame(game).catch(error => next(error));
        return res.sendStatus(204);
    }
});

module.exports = router;