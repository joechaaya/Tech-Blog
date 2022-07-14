const Sequelize = require('sequelize');
const PORT = process.env.PORT || 3306;

require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize("tech_blog_db", "root", "AAnimaLL1994", {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });
}

module.exports = sequelize;