const discord = require("discord.js");

module.exports = {
  data: new discord.SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with Pong!"),
  /**
   *
   * @param {discord.Client} client
   * @param {discord.CommandInteraction} interaction
   */
  async execute(client, interaction) {
    await interaction.reply({
      content: "Pong!",
    });
  },
};
