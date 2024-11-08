const discord = require("discord.js");

module.exports = {
  data: new discord.SlashCommandBuilder()
    .setName("youtube")
    .setDescription("Replies with codeitjs channel link"),
  /**
   *
   * @param {discord.Client} client
   * @param {discord.CommandInteraction} interaction
   */
  async execute(client, interaction) {
    await interaction.reply({
      content: "https://youtube.com/@codeitjs",
    });
  },
};
