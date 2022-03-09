'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user.belongsToMany(models.role, { as: "roles", through: "user_role", foreignKey: "user_id" });
    }
  };
  user.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'user',
  });

  // Comprueba que el usuario es administrador
  user.isAdmin = function(roles) {
    let tmpArray = [];
    roles.forEach(role => tmpArray.push(role.role));

    return tmpArray.includes('admin');
  }

  return user;
};