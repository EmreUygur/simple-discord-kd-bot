// eslint-disable-next-line no-unused-vars
exports.run = (client, msg, args) => {
  const embed = {
    title: "Bot Commands",
    fields: [
      {
        name: `${process.env.PREFIX}stats`,
        value: "Shows author's stats",
      },
      {
        name: `${process.env.PREFIX}kill <target_player_tag>`,
        value:
          "Adds 1 kill score for author and 1 death score for target player",
      },
      {
        name: `${process.env.PREFIX}death <target_player_tag>`,
        value:
          "Adds 1 death score for author and 1 kill score for target player",
      },
      {
        name: `${process.env.PREFIX}scores`,
        value: "Brings current scores table file (CSV)",
      },
    ],
  };
  msg.reply({ embed });
};

exports.helper = {
  name: "help",
};
