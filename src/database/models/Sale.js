module.exports = (sequelize, DataTypes) => {
    const Sale = sequelize.define(
        "Sale",
        {
            id_sales: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            adress: DataTypes.STRING,
            name: DataTypes.STRING,
            products: DataTypes.STRING,
            price: DataTypes.INTEGER,
            createdAt: {
                type: DataTypes.DATE,
                allowNull: false
            },
            updatedAt: {
                type: DataTypes.DATE,
                allowNull: false
            },
            contact: DataTypes.STRING
        },
        {
            tableName: "sales",
            underscored: true,
            timestamps: true,
        }
    );

    return Sale;
}