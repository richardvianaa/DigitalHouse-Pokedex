const legendaryModel = require('../models/LegendaryModel');

const controller = {
    getAllLegendary: (req, res) => {
        const model = new legendaryModel("01", "Pineco", "Bagworm", "bug")
        const model2 = new legendaryModel("02", "Richard", "Bagworm", "bug");
        const model3 = new legendaryModel("03", "Carlos", "Bagworm", "bug");
        const model4 = new legendaryModel("04", "Matheus", "Bagworm", "bug");
        const model5 = new legendaryModel("05", "Julia", "Bagworm", "bug");
        return res.json([
            model,
            model2,
            model3,
            model4,
            model5
        ])
    }
}

module.exports = controller;