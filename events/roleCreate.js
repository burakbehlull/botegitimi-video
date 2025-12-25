export default {
    name: "roleCreate",
    async execute(client, role) {
        const user = await role.guild.members.fetch("470548458072440842");
        const channel = await role.guild.channels.fetch("1041505994011852921");
        console.log("channel", channel);
        
    },
}