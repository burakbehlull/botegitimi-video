export default {
    name: "roleUpdate",
    async execute(client, oldRole, newRole) {
        if(oldRole.name !== newRole.name) {
            console.log("ROLE NAME UPDATE", oldRole.name, newRole.name);
        }
    },
}