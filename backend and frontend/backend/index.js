import express from "express";

const port = 1812;
const app = express();

app.get("/api/jokes", (req, res) => {
  res.send([
    {
      id: 1,
      joke: "This is is a sandwich",
    },
    {
      id: 2,
      joke: "This is is a hamburger",
    },
  ]);
});

app.listen(port, () => {
  console.log("Hey the server is up");
});
