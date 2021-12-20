const Abonent = require("./model_db");
const {Op} = require("sequelize");



const abonentController = {
  getAll: async(req, res) => {
    try {
        res.send(await Abonent.findAll());
    } catch (e) {
        console.log(e);
        res.status(500).send(e);
    }
  },

  getQuery: async(req, res) => {
    try {
        let queryObject = { where:{} };
        if (req.query.bill)
            queryObject.where.bill= { [Op.gte] : req.query.bill};//спитати як дістати це поле в скюл
        if (req.query.owner)
            queryObject.where.owner = { [Op.substring]:req.query.owner };
        console.log(queryObject)
        let queriedAbonents = await Abonent.findAll(queryObject);
        res.send(queriedAbonents);
    } catch (e) {
        console.log(e);
        res.status(500).send(e);
    }
  },

  getById: async(req, res) => {
    try {
        let abonent = await Abonent.findByPk(parseInt(req.params.id));
        if (abonent !== null) res.status(200).send(abonent);
        else res.status(404).send("Not Found");
    } catch (e) {
        console.log(e);
        res.status(500).send(e);
    }
  },

  delete: async(req, res) => {
    try {
        let deletedAbonent = await Abonent.findByPk(parseInt(req.params.id));
        if (deletedAbonent) {
            await deletedAbonent.destroy();
            res.send(deletedAbonent);
        } else res.status(404).send("Not Found");
    } catch (e) {
        console.log(e);
        res.status(500).send(e);
    }
  },
  post: async(req, res) => {
    try {
        let newAbonent = await Abonent.create(req.body);
        res.send(newAbonent);
    } catch (e) {
        console.log(e);
        res.status(500).send(e);
    }
  },


  patch: async(req, res) => {
    try {
        let updatedAbonent = await Abonent.findByPk(parseInt(req.params.id));
        if (updatedAbonent) {
            await updatedAbonent.update(req.body);
            res.send(updatedAbonent);
        } else res.status(404).send("Not Found");
    } catch (e) {
        console.log(e);
        res.status(500).send(e);
    }
  },




}

module.exports = abonentController;