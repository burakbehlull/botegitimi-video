export default {
    name: "interactionCreate",
    async execute(client, interaction) {
        if (!interaction.isCommand()) return;

        const command = client.slashCommands.get(interaction.commandName);
        if (!command) return;

        try {
            await command(client, interaction);
        } catch (error) {
            console.error(error);
            await interaction.reply({ content: 'Bir hata oluştu!', ephemeral: true });
        }
    },
}