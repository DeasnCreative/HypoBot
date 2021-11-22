const { Client, Intents, Discord } = require('discord.js');
const client = new Client





//--                               CLIENT.LOGIN                             --\\

client
  .login("TOKENI GIR")
  .then(() => console.log("[BOT] Bot bağlandı!"))
  .catch(() => console.log("[BOT] Bot bağlanamadı!"));

//--                               CLIENT.LOGIN                             --\\





//--                               BOT BİO                             --\\

client.on("ready", async () => {
  client.user.setActivity("Hypo Shop", 
    { url: 'https://twitch.tv/.',
    type: 'STREAMING' }); 
})

//--                               BOT BİO                             --\\





//--                               KOMUTLAR                             --\\

client.on("message", async message => {
  if(message.content.toLowerCase() == "!instagram") 
  return message.reply(`komutu kullanınca vereceği cevap`)
});

client.on("message", async message => {
  if(message.content.toLowerCase() == "!tiktok") 
  return message.reply(`komutu kullanınca vereceği cevap`)
});

client.on("message", async message => {
  if(message.content.toLowerCase() == "!vds") 
  return message.reply(`komutu kullanınca vereceği cevap`)
});

client.on("message", async message => {
  if(message.content.toLowerCase() == "!vds") 
  return message.reply(`komutu kullanınca vereceği cevap`)
});

client.on("message", async message => {
  if(message.content.toLowerCase() == "!bot") 
  return message.reply(`komutu kullanınca vereceği cevap`)
});

client.on("message", async message => {
  if(message.content.toLowerCase() == "!domain") 
  return message.reply(`komutu kullanınca vereceği cevap`)
});

//--                               KOMUTLAR                             --\\