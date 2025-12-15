export default {
    name: 'clientReady',
    once: true,
    execute(client, interaction) {
        console.log(`Logged in as ${interaction.user.tag}!`);
    }
}