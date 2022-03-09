const { user } = require('../models/index');

module.exports = {

    getAll(req, res, next) {
        if(user.isAdmin(req.user.roles)) {
            next();
        } else {
            res.status(401).json({ msg: "No estas autorizado para ver esta pulicacion" });
        }
    },

    create(req, res, next) {
        if(user.isAdmin(req.user.roles)) {
            next();
        } else {
            res.status(401).json({ msg: "No estas autorizado para ver esta pulicacion" });
        }
    },

    update(req, res, next) {
        if(user.isAdmin(req.user.roles)) {
            next();
        } else {
            res.status(401).json({ msg: "No estas autorizado para ver esta pulicacion" });
        }
    },

    deleteAll(req, res, next) {
        if(user.isAdmin(req.user.roles)) {
            next();
        } else {
            res.status(401).json({ msg: "No estas autorizado para ver esta pulicacion" });
        }
    },

    delete(req, res, next) {
        if(user.isAdmin(req.user.roles)) {
            next();
        } else {
            res.status(401).json({ msg: "No estas autorizado para ver esta pulicacion" });
        }
    },

}