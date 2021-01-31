'use strict';
module.exports = (sequelize, DataTypes) => {
  var Post = sequelize.define('Post', {
    Fullname: DataTypes.STRING,
    Trainee_Role: DataTypes.STRING,
    Group_no: DataTypes.STRING
  });
  Post.associate = function(models) {
    models.Post.hasMany(models.Post);
  };
  return Post;
};

// Make sure you complete other models fields
