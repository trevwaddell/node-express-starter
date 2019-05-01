import express from "express";

const hostname = "127.0.0.1";
const port = process.env.PORT || 4200;
const app = express();

app.get("/", (req, res) => {
  res.send({ hello: "world" });
});

app.listen(port, hostname, () =>
  console.log(`Server up and running at http://${hostname}:${port}/`)
);
