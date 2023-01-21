const { sequelize, DataTypes } = require("sequelize");


module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define(
        "Usuario",
        {
            id_usuarios: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            email: {
            type: DataTypes.STRING,
            allowNull: false
            },
            cpf: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            password: DataTypes.STRING
            

        },
        {
            tableName: "usuarios",
            underscored: true,
            timestamps: false,
        }
    );

        return Usuario;
      
}
