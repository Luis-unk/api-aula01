const userService = require("../service/user.js");

//controller -> gerencia e trata erros;

async function getAllUser(req, res) {
  try {
    const rows = await userService.getAllUser();
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).send({
      message: `Error get users`,
      body: error.message,
    });
  }
}

module.exports = { getAllUser };
