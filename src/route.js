import express from "express";
import { getIO } from "./src/socket.js";

const router = express.Router();

router.post("/emit", (req, res) => {
  try {
    const { event, room, data } = req.body;

    const io = getIO();

    if (room) {
      io.to(room).emit(event, data);
    } else {
      io.emit(event, data);
    }

    return res.json({ success: true });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

export default router;
