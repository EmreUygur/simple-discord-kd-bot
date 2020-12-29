const Discord = require("discord.js");
const { token, prefix } = require("./config");

const client = new Discord.Client();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (msg) => {
  if (msg.content === prefix) {
    msg.reply("pong");
  }
});

client.login(token);
