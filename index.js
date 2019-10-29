const express = require("express");
// step 1
const hubsRouter = require("./hubs/hubs-router.js");
const usersRouter = require("./users/users-router.js");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.send(`
    <h2>Lambda Hubs API</h>
    <p>Welcome to the Lambda Hubs API</p>
  `);
});
// step 2
server.use("/api/hubs", hubsRouter);
server.use("/api/users", usersRouter);

server.listen(4000, () => {
  console.log("\n*** Server Running on http://localhost:4000 ***\n");
});
