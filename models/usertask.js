'use strict';

module.exports = (sequelize, DataTypes) => {
  const UserTask = sequelize.define('UserTask', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
    userid: DataTypes.INTEGER,
    taskid: DataTypes.INTEGER,
    first: DataTypes.STRING,
    last: DataTypes.STRING,
    email: DataTypes.STRING
  });

  UserTask.associate = function (models) {
    UserTask.hasMany(models.Task, {
      foreignKey : 'id',
      sourceKey: 'taskid'
    });
  };

  return UserTask;
};