import express from "express";
import http from "http";
import cors from "cors";
import routes from "./routes.js";
import { initSocket } from "./socket.js";

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.use(express.json());

app.use("/api", routes);

const server = http.createServer(app);

initSocket(server);

const PORT = process.env.PORT || 9000;

server.listen(PORT, () => {
  console.log("Socket server running on port", PORT);
});
