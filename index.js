const { Client, Intents, MessageEmbed } = require('discord.js');
const { korTypeToEng } = require('./translate.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const korean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;

client.once('ready', () => {
  console.log('Ready!');
});

client.on('messageCreate', (message) => {
  if (message.author.bot) return false;

  if (korean.test(message.content)) {
    message.delete();

    message.channel.send({
      embeds: [
        new MessageEmbed().setTitle('delete message').setDescription(korTypeToEng(message.content)),
      ],
    });
    return;
  }
});

client.login(process.env.TOKEN);
