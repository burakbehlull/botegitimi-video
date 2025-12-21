import { AuditLogEvent } from "discord.js";

export default {
    name: "channelDelete",
    async execute(client, channel) {
        const logs = await channel.guild.fetchAuditLogs({
            limit: 1,
            type: AuditLogEvent.ChannelDelete
        });

        const log = logs.entries.first();

        if("2132321983" === log.executorId) return;
        
        console.log("CHANNEL delete", log.executorId);
    },
}