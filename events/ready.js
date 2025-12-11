export default {
    name: 'ready',
    once: true,
    execute(client, interaction) {
        console.log(`Logged in as ${interaction.user.tag}!`);
    }
}