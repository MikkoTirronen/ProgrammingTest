const db = require("./db");
const helper = require("../helper");
const config = require("../config");

async function getAll() {
  const rows = await db.query(
    `SELECT id, game, active_players, CONCAT_WS("-",year,month,"00") AS date FROM game_usage ORDER BY year, month asc LIMIT 0,100`
  );
  const data = helper.emptyOrRows(rows);

  return data;
}
async function getBetweenDates(
  fromDateYear,
  fromDateMonth,
  toDateYear,
  toDateMonth
) {
  const rows = await db.query(
    `SELECT id, game, active_players, CONCAT_WS("-",year,month,"00") AS date WHERE year> ${fromDateYear} AND year < ${toDateYear} FROM game_usage ORDER BY year, month asc LIMIT 0,100`
  );
  const data = helper.emptyOrRows(rows);

  return data;
}

module.exports = { getAll, getBetweenDates };
