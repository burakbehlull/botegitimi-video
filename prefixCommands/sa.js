export default {
    name: 'sa',
    async execute(client, message) {
        //const user = await message.guild.members.fetch("470548458072440842");
        const channel = await message.guild.channels.fetch("1041505994011852921");
        
        console.log(channel);
        await message.channel.send("xd");
    }
}