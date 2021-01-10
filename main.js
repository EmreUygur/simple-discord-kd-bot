const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");
const { token } = require("./config");

const intents = new Discord.Intents([
  Discord.Intents.NON_PRIVILEGED,
  "GUILD_MEMBERS",
]);

const client = new Discord.Client({ ws: { intents } });

client.commands = new Enmap();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

fs.readdir("./events/", (err, files) => {
  if (err) return console.error;

  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    const evt = require(`./events/${file}`);
    const evtName = file.split(".")[0];
    console.log(`Loaded event: ${evtName}`);

    client.on(evtName, evt.bind(null, client));
  });
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
