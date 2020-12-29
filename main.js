const Discord = require("discord.js");
const { token, prefix } = require("./config");

const client = new Discord.Client();

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

  if (command === "ping") {
    msg.reply("pong");
  }
});

client.login(token);
