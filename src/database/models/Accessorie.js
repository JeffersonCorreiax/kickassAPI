const { sequelize, DataTypes } = require("sequelize");


module.exports = (sequelize, DataTypes) => {
    const Accessorie = sequelize.define(
        "Accessorie",
        {
            id_accessories: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            img: {
                type: DataTypes.STRING,
                allowNull: false
            },
            title: DataTypes.STRING,
            price: DataTypes.INTEGER,
            stock: DataTypes.STRING,


        },
        {
            tableName: "accessories",
            underscored: true,
            timestamps: false,
        }
    );

        return Accessorie;
      
}