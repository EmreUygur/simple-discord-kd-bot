const { MessageAttachment } = require("discord.js");
const { fetchFile } = require("../helpers/records.helper");

// eslint-disable-next-line no-unused-vars
exports.run = (client, msg, args) => {
  const data = fetchFile();
  if (!data) {
    msg.reply("Uhhh something went wrong while reading data");
    return;
  }
  const attachment = new MessageAttachment(data, "score-table.csv");

  msg.reply("Here you go !", attachment);
};

exports.helper = {
  name: "scores",
};
