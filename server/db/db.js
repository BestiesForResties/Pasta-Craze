const { Sequelize, DataTypes} = require('sequelize');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const DB_PASSWORD = process.env.DB_PASSWORD;

const sequelize = new Sequelize(`postgres://postgres:besties4_ev3r@db.qxzjptzexliflmlznubu.supabase.co:6543/postgres`);


module.exports = { sequelize, DataTypes };