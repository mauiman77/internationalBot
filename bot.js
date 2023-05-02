require('dotenv').config();
const { Client, Intents } = require('discord.js');

const client = new Client({
  Intents: [
    GatewayIntentsBits.Guilds,
  ],
});
client.once('ready', () => {
  console.log('Bot is On');
});
client.login(process.env.TOKEN);
