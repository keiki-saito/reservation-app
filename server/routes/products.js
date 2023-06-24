const express = require("express");
const router = express.Router();
const Product = require("../model/product");

// 商品一覧を取得
router.get("", async function (req, res) {
  foundProducts = await Product.find({});
  res.json(foundProducts);
});

// 個別の商品情報を取得
router.get("/:productId", async function (req, res) {
  const productId = req.params.productId;
  try {
    foundProduct = await Product.findById(productId);
    // 商品が見つからなかったらエラーを投げるようにする
    if (!foundProduct) {
      throw new Error();
    }
    return res.json(foundProduct);
  } catch (e) {
    return res.status(422).send({
      errors: [{ title: "Product error", detail: "Product not found!" }],
    });
  }
});

module.exports = router;
