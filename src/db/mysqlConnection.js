import Sequelize from 'sequelize';
import dotenv from 'dotenv'
dotenv.config()

const sequelize = new Sequelize(process.env.DATA_BASE, 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false
}

});

export {sequelize}