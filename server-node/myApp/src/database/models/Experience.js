module.exports = (sequelize,DataTypes) => {

    let alias = "Experience";

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            null: false
        },
        period: {
            type: DataTypes.STRING,
            null: false
        }
}

    let config = {
        tableName: "Experience",
        timestamps: false
    }

    const Experience = sequelize.define (alias,cols,config);

    Experience.associate = function(models){
        Experience.hasMany(models.Talent,{
            as: "talent",
            foreignKey: "Experience_id",
            timestamps: false
        });
    }

    return Experience;
}