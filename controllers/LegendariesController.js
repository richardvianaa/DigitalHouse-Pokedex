const legendaryModel = require('../models/LegendaryModel');

const controller = {
    getoneLegendary: (req, res) => {
        const model = new legendaryModel("01", "Pineco", "Bagworm", "bug")
        return res.json(model);
    }
}

module.exports = controller;