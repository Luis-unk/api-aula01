const mysql = require("mysql2/promise");
const databaseConfig = require("../config/database.js");

async function getAllProducts() {
  const connection = await mysql.createConnection(databaseConfig);

  const [rows] = await connection.query("SELECT * FROM product");

  connection.end();

  return rows;
}

module.exports = { getAllProducts };
