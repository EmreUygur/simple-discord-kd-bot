const { addRow } = require("../helpers/records.helper");
const { findMemberByTag } = require("../helpers/guild.helper");

// eslint-disable-next-line no-unused-vars
exports.run = async (client, msg, args) => {
  if (args.length === 0) {
    msg.reply("Target player is missing, please write");
    return;
  }

  let tag = "";
  args.forEach((arg) => {
    tag += `${arg} `;
  });

  tag = tag.slice(0, -1);

  const targetPlayer = await findMemberByTag(msg.guild, tag);

  if (!targetPlayer) {
    msg.reply("Target player is not found, did you write it correctly?");
    return;
  }

  const row = {
    date: new Date().getTime(),
    player: msg.author.tag,
    targetPlayer: tag,
  };
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
