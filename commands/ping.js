// eslint-disable-next-line no-unused-vars
exports.run = (client, msg, args) => {
  msg.reply("Pong !!").catch(console.error);
};

exports.help = {
  name: "ping",
};
