const mysql = require("mysql2/promise");
const databaseConfig = require("../config/database.js");

async function createDataBase() {
  try {
    const connection = await mysql.createConnection({
      host: databaseConfig.host,
      user: databaseConfig.user,
      password: databaseConfig.password,
    });

    await connection.query(
      `CREATE DATABASE IF NOT EXISTS ${databaseConfig.database} `
    );
    await connection.end();

    console.log("database created!, conectado com sucesso.");
  } catch (error) {
    console.log(`Error creating database: ${error}`);
  }
}
createDataBase();
