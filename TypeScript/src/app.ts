import express from "express";
import routes from "./Routes/routes"

const server = express();
server.use(express.json());
import dotenv from "dotenv";
dotenv.config(); 

const PORT = process.env.PORT || 3000;


server.use('/', routes)


server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}, yeah man!`);
});

export default server;