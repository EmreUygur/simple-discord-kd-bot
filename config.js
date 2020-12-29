require("dotenv-flow").config();

const config = {
  token: process.env.TOKEN,
  owner: process.env.OWNER,
  prefix: process.env.PREFIX,
};

module.exports = config;
