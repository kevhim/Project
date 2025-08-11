const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('Admin', {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: { isEmail: true }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
};
