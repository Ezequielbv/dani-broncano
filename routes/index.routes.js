const express = require('express');
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

/* GET rest of pages */
router.get("/libros", (req, res, next) => {
  res.render("libros");
});
router.get("/blog", (req, res, next) => {
  res.render("blog");
});
router.get("/libros", (req, res, next) => {
  res.render("libros");
});
router.get("/about", (req, res, next) => {
  res.render("about");
});
router.get("/contacto", (req, res, next) => {
  res.render("contacto");
});

module.exports = router;