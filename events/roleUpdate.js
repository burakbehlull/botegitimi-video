import { AuditLogEvent } from "discord.js";

export default {
    name: "roleUpdate",
    async execute(client, oldRole, newRole) {
        const logs = await newRole.guild.fetchAuditLogs({
            limit: 1,
            type: AuditLogEvent.RoleUpdate
        });
                
        const log = logs.entries.first();
                
        console.log("ROLE UPDATE", log);

       
    },
}