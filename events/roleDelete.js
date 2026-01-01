import { AuditLogEvent, EmbedBuilder } from "discord.js";

export default {
    name: "roleDelete",
    async execute(client, role) {

        const channel = await role.guild.channels.fetch(client.config.logChannel);

        const logs = await role.guild.fetchAuditLogs({
            limit: 1,
            type: AuditLogEvent.RoleDelete
        });
        
        const log = logs.entries.first();
        
        const embed = new EmbedBuilder()
            .setTitle('Rol Silindi')
            .setDescription(`Role ${role.name} deleted by ${log.executor}`)
            .setColor("Red");

        channel.send({embeds: [embed]});
    }
}