const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../records.txt");

/**
 * Fetchs records.txt file row by row
 * @returns {string[]} txt file rows inside array
 */
const fetchData = () => {
  try {
    const rawText = fs.readFileSync(filePath, "utf-8");

    return rawText.split(/\r\n|\r|\n/);
  } catch (error) {
    console.log(error);
    return null;
  }
};

module.exports = {
  fetchData,
};
