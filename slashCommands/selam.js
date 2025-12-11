import { SlashCommandBuilder } from "discord.js";

export default {
    data: new SlashCommandBuilder()
        .setName('selam')
        .setDescription('Botu selamlar'),
    execute(client,interaction) {
        interaction.reply('Merhaba!');
    },
}