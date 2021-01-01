const { prefix } = require("../config.js");

module.exports = (client, msg) => {
  // Prevent bot's own messages
  if (msg.author.bot) return;
  // Prevent other bots
  if (msg.content.indexOf(prefix) !== 0) return;

  // Splitting arguments
  const args = msg.content.slice(prefix.length).trim().split(/ +/g);

  // Getting command from first argument
  const command = args.shift().toLocaleLowerCase();

  // find command and its props by enmap
  const cmd = client.commands.get(command);

  // if no such command found
  if (!cmd) {
    msg.reply("Command not found");
    return;
  }

  // run command
  cmd.run(client, msg, args);
};
