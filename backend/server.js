const express = require("express");
const app = express();
const port = 3000;
const crypto = require("crypto");
const cors = require("cors");

app.use(
  cors({
    origin: "*", // Permite todas as origens
    methods: ["GET", "POST", "PUT", "DELETE"], // Métodos permitidos
    allowedHeaders: ["Content-Type"], // Cabeçalhos permitidos
  })
);

app.use(express.json());

let users = [];

// Função para gerar hash simples
const hashPassword = (password) => {
  return crypto.createHash("sha256").update(password).digest("hex");
};

// Criar usuário
app.post("/create_user", (req, res) => {
  const { name, email, password } = req.body;

  if (users.some((user) => user.email === email)) {
    return res.status(409).json({ error: "User already exists" });
  }

  const newUser = {
    name,
    email,
    encrypted_pwd: hashPassword(password),
    created_at: Date.now(),
    modified_at: null,
  };

  users.push(newUser);
  res.status(201).json({ message: "User created successfully" });
});

// Atualizar usuário
// Atualizar usuário
app.put("/update_user", (req, res) => {
  const { email } = req.query;
  if (!email) {
    return res.status(400).json({ error: "Email query parameter is required" });
  }
  const userIndex = users.findIndex((user) => user.email === email);

  if (userIndex === -1) {
    return res.status(404).json({ error: "User not found" });
  }

  const updatedData = req.body;
  if (Object.keys(updatedData).length === 0) {
    return res.status(200).json({ message: "No changes made to the user" });
  }

  if (updatedData.password) {
    updatedData.encrypted_pwd = hashPassword(updatedData.password);
    delete updatedData.password;
  }
  updatedData.modified_at = Date.now();
  users[userIndex] = { ...users[userIndex], ...updatedData };

  res.json({ message: "User updated successfully" });
});

// Obter todos os usuários (omitindo encrypted_pwd)
app.get("/get_users", (req, res) => {
  const usersWithoutPwd = users.map(({ encrypted_pwd, ...user }) => user);
  res.json(usersWithoutPwd);
});

// Obter usuário por email
app.get("/get_user", (req, res) => {
  const { email } = req.query;
  if (!email) {
    return res.status(400).json({ error: "Email query parameter is required" });
  }
  const user = users.find((user) => user.email === email);

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  const { encrypted_pwd, ...userWithoutPwd } = user;
  res.json(userWithoutPwd);
});

// Deletar usuário
app.delete("/delete_user", (req, res) => {
  const { email } = req.query;
  if (!email) {
    return res.status(400).json({ error: "Email query parameter is required" });
  }
  const userIndex = users.findIndex((user) => user.email === email);

  if (userIndex === -1) {
    return res.status(404).json({ error: "User not found" });
  }

  users.splice(userIndex, 1);
  res.json({ message: "User deleted successfully" });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
