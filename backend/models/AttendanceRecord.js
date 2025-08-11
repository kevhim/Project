const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('AttendanceRecord', {
        studentName: { type: DataTypes.STRING, allowNull: false },
        enrollmentNumber: { type: DataTypes.STRING, allowNull: false },
        studentClass: { type: DataTypes.STRING, allowNull: false },
        scannedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
    });
};
