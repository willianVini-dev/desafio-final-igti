import Sequelize from 'sequelize';
console.log(process.env.DATA_BASE)
const sequelize = new Sequelize('desafio-final-igti', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false
}

});

export {sequelize}