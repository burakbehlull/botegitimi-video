import { ChannelType } from "discord.js";

export default {
    name: "channelCreate",
    async execute(client, channel) {

        if(channel.type == ChannelType.GuildText) {
            await channel.edit({
                name: "video",
                nsfw: false
            })
            await channel.permissionOverwrites.set([
                {
                    id: channel.guild.roles.everyone,
                    deny: [
                        "ViewChannel",
                        "ManageChannels",
                        "SendMessages"
                    ]
                },
                {
                    id: "1233243423423324",
                    allow: [
                        "ViewChannel",
                        "Connect",
                        "Speak",
                        "MuteMembers",
                        "DeafenMembers",
                        "MoveMembers",
                        "ManageWebhooks"
                    ]
                }
            ])
        };

        if(channel.type == ChannelType.GuildVoice) {
            await channel.edit({
                name: "video ses",
                userLimit: 2
            })

            await channel.permissionOverwrites.set([
                {
                    id: channel.guild.roles.everyone,
                    deny: [
                        "ViewChannel",
                        "Connect",
                        "Speak",
                        "MuteMembers",
                        "DeafenMembers",
                        "MoveMembers",
                        "ManageWebhooks"
                    ]
                },
                {
                    id: "1233243423423324",
                    allow: [
                        "ViewChannel",
                        "Connect",
                        "Speak",
                        "MuteMembers",
                        "DeafenMembers",
                        "MoveMembers",
                        "ManageWebhooks"
                    ]
                }
            ])
        }

        if(channel.type == ChannelType.GuildCategory){
            
            const kanal = await channel.guild.channels.fetch("2334231231231");

            kanal.edit({
                parent: "asdassdf",
                position: 2
            })
        }

        
    },
}