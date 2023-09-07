const express = require("express");
const router = express.Router();

const game_usage = require("../services/gameUsageService");

router.get("/", async function (req, res, next) {
  try {
    res.json(await game_usage.getAll());
  } catch (err) {
    console.error({ error: err.message });
    next(err);
  }
});
router.get("/dates", async function (req, res, next) {
  const fromDateYear = req.query.fromDate.slice(0, 4);
  const fromDateMonth = req.query.fromDate.slice(5, 7);
  const toDateYear = req.query.fromDate.slice(0, 4);
  const toDateMonth = req.query.fromDate.slice(5, 7);
  try {
    res.json(await game_usage.getBetweenDates(fromDateYear,fromDateMonth,toDateYear,toDateMonth));
  } catch (err) {
    console.error({ error: err.message });
    next(err);
  }
});

module.exports = router;
