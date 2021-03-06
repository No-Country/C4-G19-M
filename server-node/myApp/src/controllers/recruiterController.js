const db = require('../database/models');
const bcryptjs = require('bcryptjs');

const recruiterController = {
    create: (req, res) => {
        //res.json("Metodo creación de Recruiter");
        // console.log(req.body);

        db.Recruiter.findOne({
            where: {
                email: req.body.email
            }
        })
            .then((recruiter) => {
                if (recruiter) {
                    console.log('Este usuario ya se encuentra registrado');
                    return res.json({ message: 'Este usuario ya se encuentra registrado' })
                }
                else {
                    console.log(req.body);
                    const password = req.body.password;
                    const hashPassword = bcryptjs.hashSync(password, 10);
                    db.Recruiter.create({
                        name: req.body.name,
                        lastName: req.body.lastName,
                        email: req.body.email,
                        password: hashPassword,
                        company: req.body.company,
                        image: req.body.image,
                        url: req.body.url
                    })
                        .then((recruiter) => {
                            console.log('recruiter creado');
                            res.json(recruiter)
                        })
                        .catch(function (error) {
                            console.log("No se pudo crear el registro en la base de datos");
                            console.log(req.body)
                            console.error(error)
                        })
                }
            })
            .catch(function (error) {
                console.log(`Se ha producido el siguiente error: `, error);
            })
    },

    update: (req, res) => {
        //res.json("Metodo edición de Recruiter");
        console.log(req.body);
        db.Recruiter.findByPk(req.params.id)
            .then((recruiter) => {
                if (recruiter) {
                    db.Recruiter.update({
                        name: req.body.name,
                        lastName: req.body.lastName,
                        email: req.body.email,
                        company: req.body.company,
                        image: req.body.image,
                        url: req.body.url
                    }, { where: { id: req.params.id } })
                        .then(() => {
                            console.log('Se actualizó el reclutador');
                            return res.status(201).json(
                                {
                                    message: 'Se actualizó el reclutador',
                                    recruiter
                                });
                        })
                        .catch(function (error) {
                            console.log("No se pudo crear el registro en nuestra base de datos", error);
                        })
                }
                else {
                    console.log('No se encontró el reclutador en nuestra base de datos');
                    return res.status(404).json({ message: 'No se encontró el reclutador en nuestra base de datos' });
                }
            })
            .catch(function (error) {
                console.log(`Se ha producido el siguiente error: `, error);
            })
    },

    destroy: (req, res) => {
        //res.json("Metodo borrado de Recruiter");
        console.log(req.body);
        db.Recruiter.findByPk(req.params.id)
            .then((recruiter) => {
                if (recruiter) {
                    db.Recruiter.destroy({
                        where: { id: req.params.id }
                    })
                        .then(() => {
                            console.log('El reclutador ha sido borrado de nuestra base de datos');
                            return res.status(204).json({ message: 'El reclutador ha sido borrado nuestra base de datos' });
                        })
                        .catch(function (error) {
                            console.log("No se pudo borar el reclutador de nuestra base de datos", error);
                        })
                }
                else {
                    console.log('No se encontró el reclutador en nuestra base de datos');
                    return res.status(404).json({ message: 'No se encontró el reclutador en nuestra base de datos' });
                }
            })
            .catch(function (error) {
                console.log(`Se ha producido el siguiente error: `, error);
            })
    },

    show: (req, res) => {
        //res.json("Metodo visualización de Recruiter x id");
        db.Recruiter.findByPk(req.params.id)
            .then((recruiter) => {
                if (recruiter) {
                    delete recruiter.dataValues.password;
                    console.log(recruiter);
                    return res.status(200).json(recruiter.dataValues);
                }
                else {
                    console.log('No se encontró el reclutador en nuestra base de datos');
                    return res.status(404).json({ message: 'No se encontró el reclutador en nuestra base de datos' });
                }
            })
            .catch(function (error) {
                console.log(`Se ha producido el siguiente error: `, error);
            })
    },

    index: (req, res) => {
        //res.json("Metodo visualización de todos los Recruiters");
        db.Recruiter.findAll()
            .then((allRecruiter) => {
                if (allRecruiter) {
                    for (let i = 0; i < allRecruiter.length; i++) {
                        delete allRecruiter[i].dataValues.password;
                    }
                    console.log(allRecruiter);
                    return res.status(200).json(allRecruiter);
                }
                else {
                    console.log('No se encontró ningún reclutador en nuestra base de datos');
                    return res.status(404).json({ message: 'No se encontró ningún reclutador en nuestra base de datos' });
                }
            })
            .catch(function (error) {
                console.log(`Se ha producido el siguiente error: `, error);
            })
    }
}

module.exports = recruiterController;