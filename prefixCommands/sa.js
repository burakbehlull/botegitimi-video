import { EmbedBuilder } from "discord.js";
export default {
    name: 'sa',
    async execute(client, message) {
        //const user = await message.guild.members.fetch("470548458072440842");
        // const channel = await message.guild.channels.fetch("1041505994011852921");
        // const channel = message.guild.channels.cache.get("1041505994011852921");
        
        const userEmbed = new EmbedBuilder()
        .setTitle("User Embed")

    
        const embed = new EmbedBuilder(userEmbed)
        .setAuthor({name: message.author.username, iconURL: message.author.displayAvatarURL()})
        .setFields([
            {name: "**Para**", value: "money", inline: true},
            {name: "__Seviye__", value: "level", inline: true},
            {name: "XP", value: "xp"},
        ])
        .setImage("https://cdn.discordapp.com/attachments/1287336506008141907/1418549020837675059/image.png?ex=6953adb9&is=69525c39&hm=038274496bd6a5305d67e77fae9ad83f72bc715d6ddd1fe61c5ef3c961e73f7f&")
        .setColor("Random")
        .setTimestamp()
        .setFooter({text: message.author.username, iconURL: message.author.displayAvatarURL()})
        .setThumbnail(message.author.displayAvatarURL());
        await message.channel.send({embeds: [embed]});
    }
}