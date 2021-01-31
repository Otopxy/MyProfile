'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    Fullname: DataTypes.STRING,
    Trainee_Role: DataTypes.STRING,
    Group_no: DataTypes.STRING
  });
  User.associate = function(models) {
    models.User.hasMany(models.Post);
  };
  return User;
};

//
