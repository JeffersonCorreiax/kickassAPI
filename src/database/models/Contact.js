const { sequelize, DataTypes } = require("sequelize");


module.exports = (sequelize, DataTypes) => {
    const Contact = sequelize.define(
        "Contact",
        {
            id_contact: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            reason: DataTypes.STRING,
            message: DataTypes.TEXT,


        },
        {
            tableName: "contact",
            underscored: true,
            timestamps: false,
        }
    );

        return Contact;
      
}
