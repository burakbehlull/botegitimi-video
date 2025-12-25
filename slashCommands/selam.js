import { SlashCommandBuilder } from "discord.js";

export default {
    data: new SlashCommandBuilder()
        .setName('selam')
        .setDescription('Botu selamlar')
        .addUserOption(option =>
            option
                .setName("getirilecek_kullanici")
                .setDescription("Kullanıcı seç")
                .setRequired(true)
        )
        .addStringOption(option =>
            option
                .setName("kullanici_id")
                .setDescription("Mesajı yaz")
                .setRequired(true)
        ),

    async execute(client,interaction) {
        /*const kullanici = interaction.options.getMember('getirilecek_kullanici')
        const kullanici_id = interaction.options.getString('kullanici_id')
        const user = await interaction.guild.members.fetch(kullanici_id);
        */
        const channel = await interaction.guild.channels.fetch("1041505994011852921");

        console.log("CHANNEL", channel)

        channel.send("xd");
    },
}