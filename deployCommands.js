const config = require("./config.json");
const { Routes } = require("discord.js");
const { REST } = require("@discordjs/rest");
const fs = require("node:fs");
const path = require("node:path");

const commands = [];

const commandsPath = path.join(__dirname, "commands");
const commandFiles = fs
  .readdirSync(commandsPath)
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file);
  const command = require(filePath);
  commands.push(command.data.toJSON());
}

const rest = new REST({
  version: "10",
}).setToken(config.bot_token);

rest
  .put(Routes.applicationCommands("your client id"), {
    body: commands,
  })
  .then(() => {
    console.log("Successfully reloaded/registered the application commands");
  })
  .catch((err) => {
    console.log(err);
  });
