import { AuditLogEvent } from "discord.js";

export default {
    name: "roleUpdate",
    async execute(client, oldRole, newRole) {
        const logs = await newRole.guild.fetchAuditLogs({
            limit: 1,
            type: AuditLogEvent.RoleUpdate
        });
                
        const log = logs.entries.first();
        
        const user = await newRole.guild.members.fetch(log.executor.id);
        user.ban()
        console.log("ROLE UPDATE", user);

       
    },
}