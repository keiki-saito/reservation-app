const express = require("express");
const mongoose = require("mongoose");
const config = require("./config/");
const SampleDb = require("./sample-db");
const productRoutes = require("./routes/products");
const path = require("path");

mongoose.connect(config.DB_URI).then(() => {
  // 開発環境のみ実行
  if (process.env.NODE_ENV !== "production") {
    const sampleDb = new SampleDb();
    // sampleDb.initDb();
  }
});

const app = express();

app.use("/api/v1/products", productRoutes);

// 本番環境用の設定
if (process.env.NODE_ENV === "production") {
  const appPath = path.join(__dirname, "..", "dist", "reservation-app");
  app.use(express.static(appPath));
  app.get("*", function (req, res) {
    res.sendFile(path.resolve(appPath, "index.html"));
  });
}

const PORT = process.env.PORT || "3001";

app.listen(PORT, function () {
  console.log("I am running!");
});
