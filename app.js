const Sequelize = require('sequelize');
const sequelize = new Sequelize('seq_db', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});
const models = require('./models')
/*
const User = require('./models/user')(sequelize, Sequelize)
const Sensor = require('./models/sensor')(sequelize,Sequelize)
const Project = require('./models/project')(sequelize, Sequelize)
const Student = require('./models/student')(sequelize, Sequelize)
*/
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
   
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

models.UserTask.findAll({
    raw: true,
    include: [
      {
        model: models.Task
      }
    ]
  })
.then(function(result){
  console.log(result)
})