export default {
    name: 'sa',
    async execute(client, message) {
        const user = await message.guild.members.fetch("470548458072440842");
        console.log(user);
        await message.reply("xd");
    }
}