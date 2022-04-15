const yup = require('yup');

function isLegendaryValidet(req, res, next) {
     const schema = yup.object().shape({
          name: yup.string().required(),
          description: yup.string().required(),
          type: yup.string().required()
     });

     if (!schema.isValidSync(req.body)) {
          return res.status(400).json({
               error: 'Invalid data'
          })
     }
}

module.exports = isLegendaryValidet;