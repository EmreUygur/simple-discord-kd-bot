const { fetchCsvData } = require("../helpers/records.helper");
const { findMemberByTag } = require("../helpers/guild.helper");

// eslint-disable-next-line no-unused-vars
exports.run = async (client, msg, args) => {
  let player;

  if (args.length > 0) {
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

    player = tag;
  } else {
    player = msg.author.tag;
  }

  const data = await fetchCsvData();

  if (!data) {
    msg.reply("Unknown error occured while fetching data");
    return;
  }

  if (data.length === 0) {
    msg.reply("No log found on file");
    return;
  }
  const stats = {
    kill: 0,
    death: 0,
  };
  data.forEach((row) => {
    if (row.player === player) stats.kill += 1;
    else if (row.targetPlayer === player) stats.death += 1;
  });

  msg.reply(`Your stats: ${stats.kill}/${stats.death}`);
};

exports.helper = {
  name: "stats",
};
