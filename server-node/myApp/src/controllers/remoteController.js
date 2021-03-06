const db = require('../database/models');

const remoteController = {

    index: (req, res) => {
        //res.json("Metodo visualización de todos los Remotes");
        db.Remote.findAll()
        .then((allRemote) => {
            if(allRemote) {
                console.log(allRemote);
                return res.status(200).json(allRemote);
            }
            else {
                console.log('No se encontró ningún valor para remote en nuestra base de datos');
                return res.status(404).json({message: 'No se encontró ningún valor para remote en nuestra base de datos'});
            }
        })
        .catch(function(error){
            console.log(`Se ha producido el siguiente error: `, error);
        })
    }
}

module.exports = remoteController;