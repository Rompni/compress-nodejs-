const express = require("express");
const multer = require("multer");
const fs = require("fs");
const sharp = require("sharp");

const app = express();
const storage = multer.memoryStorage();
const upload = multer({ storage });
require("dotenv").config();

const PORT = Number(process.env.PORT) || 3000;

app.use(express.static("./uploads"));

app.get("/", (req, res) => {
  return res.json({ message: "Hello world 🔥🇵🇹" });
});

app.post("/upload", upload.single("picture"), async (req, res) => {
  try {
    // validate mimetype
    const mimetype = req.file.mimetype.split("/");

    if (mimetype[0] !== "image") {
      return res.status(400).json({ message: "Invalid file type" });
    }

    fs.access("./uploads", (error) => {
      if (error) {
        fs.mkdirSync("./uploads");
      }
    });

    const { buffer, originalname } = req.file;
    const timestamp = new Date().toISOString();
    const ref = `${timestamp}-${originalname}.webp`;
    await sharp(buffer)
    // set quality of webp
      .webp({ quality: 50 })
      .toFile("./uploads/" + ref);
    const link = `http://localhost:${PORT}/${ref}`;
    return res.json({ link });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
