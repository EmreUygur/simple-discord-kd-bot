const { addRow } = require("../helpers/records.helper");

// eslint-disable-next-line no-unused-vars
exports.run = async (client, msg, args) => {
  const row = [msg.author.tag, 1, 2];
  const result = await addRow(row);

  if (!result) {
    msg.reply("Uhhh something went wrong while reading data");
  } else {
    msg.reply("Score successfully added to table");
  }
};

exports.helper = {
  name: "kill",
};
