// Declare stuff
const Discord = require('discord.js');
const client = new Discord.Client();

// Events below
client.on("ready", () => {
    console.log("Hello world!");
})

// Login to bot
client.login("token");
