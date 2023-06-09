const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Pokemon', {
   
    idb :{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },  
    id :{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image:{
      type: DataTypes.STRING,
      allowNull: true
    },
    vida: {
      type: DataTypes.INTEGER,
      allowNull:  false,
    },
    ataque : {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    defensa: {
      type: DataTypes.INTEGER,
      allowNull:  false
    },
    velocidad: {
      type: DataTypes.INTEGER,
      allowNull:  true
    },
    altura: {
      type: DataTypes.INTEGER,
      allowNull:  true
    },
    peso: {
      type: DataTypes.INTEGER,
      allowNull:  true
    },
    type:{
      type: DataTypes.STRING,
      allowNull: true
    },
    createdIndDb :{
      type:DataTypes.BOOLEAN,
      allowNull:false,
      defaultValue: true,
    }
  });
};


