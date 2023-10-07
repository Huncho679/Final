const User = require('../models/userModel');


exports.getUserInfo = async (req, res) => {
    const users = await User.find({});
    res.send(users);
}