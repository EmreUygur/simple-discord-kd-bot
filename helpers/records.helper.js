const fs = require("fs");
const { parseFile, writeToPath } = require("fast-csv");
const path = require("path");

const filePath = path.join(__dirname, "../score-table.csv");

/**
 * Fetchs score-table.csv file
 * @returns {Buffer} - returns file data in buffer type
 */
const fetchFile = () => {
  try {
    return fs.readFileSync(filePath);
  } catch (error) {
    console.log(error);
    return null;
  }
};

/**
 * Returns table data into array
 * @returns {array | null} - returns array of data if success, returns null if error occurs
 */
const fetchCsvData = () =>
  new Promise((resolve, reject) => {
    const dataArr = [];

    parseFile("score-table.csv", { headers: true })
      .on("error", (error) => {
        console.error(error);
        reject(null);
      })
      .on("data", (row) => {
        dataArr.push(row);
      })
      .on("end", (rowCount) => {
        console.log(`Parsed ${rowCount} rows`);
        resolve(dataArr);
      });
  });

/**
 * Adds new row to the table and overrides the data
 * @param {Object} row - row to be apended to file
 * @returns {Promise<boolean>} - success status
 */
const addRow = async (row) => {
  const data = await fetchCsvData();

  data.push(row);

  return new Promise((resolve, reject) => {
    writeToPath("score-table.csv", data, { headers: true })
      .on("error", (error) => {
        console.error(error);
        reject(false);
      })
      .on("finish", () => {
        console.log("Row successfully added");
        resolve(true);
      });
  });
};

module.exports = {
  fetchFile,
  fetchCsvData,
  addRow,
};
