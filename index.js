const Discord = require("discord.js"); // Imports Discord.js Package
const client = new Discord.Client(); // Creates the Discord Client
const config = require('config.json');  // Imports the Config

client.on("message", message => {
  // Waits for a message
  if (message.author.id === client.user.id) return; // Prevents the bot from spamming the chat.
  console.log(`${message.author} | ${message.content}`); // Creates a pretty embed.
  let embed = new Discord.RichEmbed()
    .setTitle(message.id)
    .setDescription(message.content)
    .setThumbnail(message.author.avatarURL)
    .setFooter(message.author)
    .setTimestamp();
  message.delete(70); // Waits 70 Milliseconds and deletes the message sent by the user.
  message.channel.send(embed); // Sends the new message
});

client.login(config.token); // Login
