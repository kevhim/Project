const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('Event', {
        subjectName: { type: DataTypes.STRING, allowNull: false },
        subjectCode: { type: DataTypes.STRING, allowNull: false },
        facultyName: { type: DataTypes.STRING, allowNull: false },
        facultyCode: { type: DataTypes.STRING, allowNull: false },
        eventDate: { type: DataTypes.DATEONLY, allowNull: false },
        startTime: { type: DataTypes.TIME, allowNull: false },
        endTime: { type: DataTypes.TIME, allowNull: false },
        status: { type: DataTypes.ENUM('PENDING', 'ACTIVE', 'FINISHED'), defaultValue: 'PENDING', allowNull: false }
    });
};
