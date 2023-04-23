const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'ping') {
    message.channel.send('Pong!');
  }
});

client.login('MTA5ODg4NDU2NzMyODM2NjY3Mg.G13Txu.3YQxt-wb6WOQWmjdOFEArFRFQ9PUsR25Gkgnp0');

