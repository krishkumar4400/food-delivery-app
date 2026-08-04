import express from "express";

const app = express();

// middlewares

// routes

app.get("/", (req, res) => {
  res.send("hello express");
});

export default app;
