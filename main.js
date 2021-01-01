const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");
const { token, prefix } = require("./config");

const client = new Discord.Client();

client.commands = new Enmap();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (msg) => {
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
});

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error;

  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    const props = require(`./commands/${file}`);
    const cmd = file.split(".")[0];
    console.log(`Loaded command: ${cmd}`);

    client.commands.set(cmd, props);
  });
});

client.login(token);
