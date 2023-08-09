import { Router } from "express";
import { messages } from "../app.js";

const router = Router();

router.get("/", (req, res) => {
  res.render("index", {
    style: 'index.css',
    existMessages: true,
    messages: messages
  });
})

export default router;