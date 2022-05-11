const { Client, Intents, MessageEmbed } = require('discord.js');
const { korTypeToEng } = require('./translate.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.once('ready', () => {
  console.log('Ready!');
});

client.on('messageCreate', (message) => {
  if (message.author.bot) return false;
  const korean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;

  if (korean.test(message.content)) {
    message.delete();

    message.channel.send({
      embeds: [
        new MessageEmbed()
          .setTitle('delete message')
          .setFooter({ text: korTypeToEng(message.content) }),
      ],
    });
  }

  console.log(`Message from ${message.author.username}: ${message.content}`);
});

client.login('OTczMjM1MDM4ODU2NTQ0Mjk2.Ynkpww.gEWhj1sIugb1M7B5CZSQ6DrCjk8');
