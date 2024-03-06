const {Router} = require('express');
const estudianteModel = require('../models/estudiante');

const viewsRouter = Router();

viewsRouter.get('/students', async (req, res) => {
    let page = req.query.page || 1
    let {docs, ...rest} = await estudianteModel.paginate({}, {limit: 5, page: page, lean:true})
    let students = docs
    res.render('students',{students, ...rest})
});

module.exports = viewsRouter;
