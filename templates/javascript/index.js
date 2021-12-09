const { Client, Collection, Intents } = require('discord.js');

const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MEMBERS,
  ],
});
module.exports = client;

// Global Variables
client.commands = new Collection();
client.slashCommands = new Collection();

// Initialize the project
require('./handler')(client);

client.login(client.config.token);
