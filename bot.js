import "dotenv/config";
import { Client, GatewayIntentBits, Partials, Collection } from "discord.js";
import mongoose from "mongoose";

import path from "path";
import { fileURLToPath, pathToFileURL } from "url";
import fs from "fs";

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.GuildMembers,
        "DirectMessageReactions",
        "GuildMessageReactions",
        
    ],
    partials: [
        Partials.Message,
        Partials.Channel,
    ],

});

mongoose.connect("mongodb://localhost:27017/videobot")
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log("HATA: ", err));

client.prefixCommands = new Collection();
client.slashCommands = new Collection();


client.config = {
	PREFIX: ".",
    logChannel: "1455162958949646336"
}; 

const filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(filename);


// PREFIX COMMAND
const prefixCommandsPath = path.join(__dirname, 'prefixCommands');
const prefixCommandFiles = fs.readdirSync(prefixCommandsPath).filter(file => file.endsWith('.js'));



for (const file of prefixCommandFiles) {
    const filePath = path.join(prefixCommandsPath, file);
    const fileUrl = pathToFileURL(filePath).href;
    const prefixCommandImport = await import(fileUrl);
    const prefixCommand = prefixCommandImport.default;

    if(!prefixCommand.execute) continue;

    client.prefixCommands.set(prefixCommand.name, prefixCommand.execute);
}

// slash COMMAND
const slashCommandsPath = path.join(__dirname, 'slashCommands');
const slashCommandFiles = fs.readdirSync(slashCommandsPath).filter(file => file.endsWith('.js'));



for (const file of slashCommandFiles) {
    const filePath = path.join(slashCommandsPath, file);
    const fileUrl = pathToFileURL(filePath).href;
    const slashCommandImport = await import(fileUrl);
    const slashCommand = slashCommandImport.default;

    if(!slashCommand.execute) continue;
    client.slashCommands.set(slashCommand.data.name, slashCommand.execute);
}


const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {

    const filePath = path.join(eventsPath, file);
    const fileUrl = pathToFileURL(filePath).href;
    const eventImport = await import(fileUrl);
    const event = eventImport.default;

    if (event.once) {
        client.once(event.name, (...args) => event.execute(client, ...args));
    } else {
        client.on(event.name, (...args) => event.execute(client, ...args));
    }
}



client.login(process.env.TOKEN);