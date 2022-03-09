'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.user, { as: "users", through: "user_role", foreignKey: "role_id" });
    }
  };
  role.init({
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'role',
  });
  return role;
};