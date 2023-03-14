const { User, Cart } = require("../models");

const userRegister = async (req, res, next) => {

    const {isAdmin, ...data} = req.body;
  
    const [user, created] = await User.findOrCreate({ 
      
      where: { email: data.email }, 
      defaults: { ...data }
  
    })
      .catch (error => next(error));
  
    if (created) {
      
      const cart = await Cart.create().catch(error => next(error));
  
      cart.setUser(user); 
  
      return res.sendStatus(201);  
    }
    
    return res.sendStatus(403);
}

module.exports = { userRegister }; 