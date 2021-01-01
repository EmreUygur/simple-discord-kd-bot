exports.run = (client, msg, args) => {
  msg.reply("Pong !!").catch(console.error);
};

exports.help = {
  name: "ping",
};
