export default {
    name: "roleCreate",
    async execute(client, role) {
        const user = await role.guild.members.fetch("470548458072440842");
        console.log("USER", user);
    },
}