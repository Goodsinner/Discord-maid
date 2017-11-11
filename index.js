const Discord = require('discord.js');
bot = new Discord.Client();

bot.on('Message',(Message) => {
    if (Message.content == 'goodnight'){
Message.reply('goodnight, master');    
}})
bot.on('Message',(Message) => {
    if (Message.content == 'goodmorning'){
Message.reply('goodmorning, master');    
}})

client.login('process.enj.BOT_TOKEN);
