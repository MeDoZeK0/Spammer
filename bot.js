const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("586699502795227136")
setInterval(function() {
channel.send(`بحبك`);
}, 30)
})

client.login("NDkwMDMxNzIwNTk5Mzg4MTYw.XPr8eA.t-TfrQDmLQvL67blZDQcnOs3J5A");
