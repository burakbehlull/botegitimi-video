import { AuditLogEvent } from "discord.js";

export default {
    name: "roleDelete",
    async execute(client, role) {
        const logs = await role.guild.fetchAuditLogs({
            limit: 1,
            type: AuditLogEvent.RoleDelete
        });
        
        const log = logs.entries.first();
        
        console.log("ROLE DELETE", log);
    },
}