import { EmbedBuilder } from "discord.js";
import Message from "../models/Message.js";

export default {
    name: 'ml',
    async execute(client, message, args) {

        const userId = args[0] || message.author.id;

        const messages = await Message.find({ userId });
        
        if (!messages) return message.channel.send("Mesaj bulunamadı!");

        const x = messages.map((message, index) => 
                `${index + 1}. ${message.content}`).join("\n")

        const embed = new EmbedBuilder()
        .setTitle("Mesaj Listesi")
        .setDescription(x)
        .setColor("Random");
        await message.channel.send({embeds: [embed]});
    }
}