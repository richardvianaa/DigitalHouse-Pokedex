const controller = {
    getoneLegendary: (req, res) => {
        return res.json({
            name: "Pineco",
            categoria: "Bagworm",
            type: "bug"
        });
    }
}

module.exports = controller;