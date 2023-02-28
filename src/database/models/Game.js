const { sequelize, DataTypes } = require("sequelize");
//ss

module.exports = (sequelize, DataTypes) => {
    const Game = sequelize.define(
        "Game",
        {
            id_games: {
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
            tableName: "games",
            underscored: true,
            timestamps: false,
        }
    );

        return Game;
      
}