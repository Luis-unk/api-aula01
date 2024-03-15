const mysql = require("mysql2/promise");
const databaseConfig = require("../config/database.js");

async function createProductTable() {
  try {
    const connection = await mysql.createConnection(databaseConfig);

    await connection.query(`USE ${databaseConfig.database}`);

    await connection.query(`CREATE TABLE IF NOT EXISTS product ( 
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        descricao VARCHAR(200),
        quantidadeEstoque INT,
        unidadeMedida FLOAT,
        valorUnidade FLOAT
        );`);

    console.log("Table created.");

    connection.end();
  } catch (error) {
    console.log(`Error creating table: ${error}`);
  }
}

createProductTable();
