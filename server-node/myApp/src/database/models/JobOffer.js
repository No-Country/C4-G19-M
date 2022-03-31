module.exports = (sequelize,DataTypes) => {

    let alias = "JobOffer";

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            null: false
        },
        title: {
            type: DataTypes.STRING,
            null: false
        },
        description: {
            type: DataTypes.STRING,
            null: false
        },
        location: {
            type: DataTypes.STRING,
            null: false
        },
        createDate: {
            type: 'TIMESTAMP',
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            null: false,
        },
        editDate: {
            type: 'TIMESTAMP',
            null: true,
        },
        removeDate: {
            type: 'TIMESTAMP',
            null: true,
        },
        id_Recruiter: {
            type: DataTypes.INTEGER,
            foreingKey: true,
            null: true,
        },
        id_Schedule: {
            type: DataTypes.INTEGER,
            foreingKey: true,
            null: true,
        },
        id_Remote: {
            type: DataTypes.INTEGER,
            foreingKey: true,
            null: true,
        },
        id_Talent: {
            type: DataTypes.INTEGER,
            foreingKey: true,
            null: true,
        },
        id_Seniority: {
            type: DataTypes.INTEGER,
            foreingKey: true,
            null: true,
        },
        id_Experience: {
            type: DataTypes.INTEGER,
            foreingKey: true,
            null: true,
        },
        id_Speciality: {
            type: DataTypes.INTEGER,
            foreingKey: true,
            null: true,
        }
}

    let config = {
        tableName: "JobOffer",
        timestamps: true
    }

    const JobOffer = sequelize.define (alias,cols,config);

    JobOffer.associate = function(models){
        JobOffer.belongsTo(models.Schedule,{
            as: "schedule",
            foreignKey: "Schedule_id",
            timestamps: false
        });
        JobOffer.belongsTo(models.Remote,{
            as: "remote",
            foreignKey: "Remote_id",
            timestamps: false
        });
        JobOffer.belongsTo(models.Recruiter,{
            as: "recruiter",
            foreignKey: "Recruiter_id",
            timestamps: false
        });
        // Talent.belongsToMany(models.Personaje,{
        //     as: "talent",
        //     through: "personajePelicula",
        //     foreignKey: "Pelicula_id",
        //     otherKey: "Personaje_id",
        //     timestamps: false
        // });
    }

    return JobOffer;
}