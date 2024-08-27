import express from "express";

const PORT = 8080;
const app = express();

app.get("/", (req, res) => {
  res.send("Hi");
});

app.listen(PORT, () => console.log("Hello from PORT 8080"));
