import { Server } from "socket.io";

let io;

export const initSocket = (server) => {
  io = new Server(server, {
    cors: {
      origin: [
        "https://fashion-shop-tau-three.vercel.app",
        "https://fashion-shop-admin-topaz.vercel.app",
        "http://localhost:4200",
        "http://localhost:4201",
      ],
      credentials: true,
    },
    transports: ["polling", "websocket"],
  });

  io.on("connection", (socket) => {
    console.log("Socket connected:", socket.id);
  });

  return io;
};

export const getIO = () => {
  if (!io) throw new Error("Socket not initialized");
  return io;
};
