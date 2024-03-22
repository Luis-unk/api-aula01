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

async function createUser(req, res) {
  const { name, email, password } = req.body;

  try {
    await userService.createUser(name, email, password);

    res.status(201).json({ message: `Success` });
  } catch (error) {
    res.status(500).send({
      message: `Error adding user !`,
      error: error.message,
    });
  }
}

async function updateUser(req, res) {
  try {
    const { id } = req.params;
    const { name, email, password } = req.params;

    await userService.updateUser(id, name, email, password);

    res.status(204).send("Sucess");
  } catch (error) {
    res.status(500).send({
      message: `Error Update User!`,
      body: error.message,
    });
  }
}

module.exports = { getAllUser, createUser, updateUser, deleteUser };
